import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutComponent from "../../components/AppLayoutComponent";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import BlockModalComponent from "../../components/modals/BlockModalComponent";
import CollectorNewContainer from "../../containers/collectors/CollectorNewContainer";
import CollectorsCardsComponent from "../../components/collectors/CollectorsCardsComponent";
import CollectorDetailsContainer from "../../containers/collectors/CollectorDetailsContainer";
import {
    emitResetCollector,
    emitCollectorsFetch,
    emitNextCollectorsFetch,
    emitToggleCollectorStatus
} from "../../redux/collectors/actions";
import {
    applySuccess,
    dateToString,
    needleSearch,
    requestFailed,
    requestLoading,
    requestSucceeded
} from "../../functions/generalFunctions";
import {
    storeCollectorsRequestReset,
    storeNextCollectorsRequestReset,
    storeResetCollectorRequestReset,
    storeCollectorStatusToggleRequestReset,
} from "../../redux/requests/collectors/actions";
import DeleteModalComponent from "../../components/modals/DeleteModalComponent";

// Component
function CollectorsPage({collectors, collectorsRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [resetModal, setResetModal] = useState({show: false, body: '', id: 0});
    const [blockModal, setBlockModal] = useState({show: false, body: '', id: 0});
    const [newCollectorModal, setNewCollectorModal] = useState({show: false, header: ''});
    const [collectorDetailsModal, setCollectorDetailsModal] = useState({show: false, header: "DETAIL DU RESPONSABLE DE ZONE", id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitCollectorsFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(collectorsRequests.status)) {
            applySuccess(collectorsRequests.status.message);
        }
        // eslint-disable-next-line
    }, [collectorsRequests.status]);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(collectorsRequests.reset)) {
            applySuccess(collectorsRequests.reset.message);
        }
        // eslint-disable-next-line
    }, [collectorsRequests.reset]);

    const handleNeedleInput = (data) => {
        setNeedle(data)
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeCollectorsRequestReset());
        dispatch(storeNextCollectorsRequestReset());
        dispatch(storeResetCollectorRequestReset());
        dispatch(storeCollectorStatusToggleRequestReset());
    };

    // Fetch next collector data to enhance infinite scroll
    const handleNextCollectorsData = () => {
        dispatch(emitNextCollectorsFetch({page}));
    }

    // Show new collector modal form
    const handleNewCollectorModalShow = () => {
        setNewCollectorModal({newCollectorModal, header: "NOUVEAU RESPONSABLE DE ZONE", show: true})
    }

    // Hide new collector modal form
    const handleNewCollectorModalHide = () => {
        setNewCollectorModal({...newCollectorModal, show: false})
    }

    // Show collector details modal form
    const handleCollectorDetailsModalShow = ({id}) => {
        setCollectorDetailsModal({...collectorDetailsModal, show: true, id})
    }

    // Hide collector details modal form
    const handleCollectorDetailsModalHide = () => {
        setCollectorDetailsModal({...collectorDetailsModal, show: false})
    }

    // Trigger when user block status confirmed on modal
    const handleBlockModalShow = ({id, name}) => {
        setBlockModal({...blockModal, show: true, id, body: `Bloquer le responsable de zone ${name}?`})
    };

    // Hide block confirmation modal
    const handleBlockModalHide = () => {
        setBlockModal({...blockModal, show: false})
    }

    // Show reset modal form
    const handleResetModalShow = ({id, name}) => {
        setResetModal({...resetModal, id, body: `Confirmer la réinitialisation du mot de passe de ${name}?`, show: true})
    }

    // Hide reset modal form
    const handleResetModalHide = () => {
        setResetModal({...resetModal, show: false})
    }

    // Trigger when administrator reset confirmed on modal
    const handleReset = (id) => {
        handleResetModalHide();
        dispatch(emitResetCollector({id}));
    };

    // Trigger when user change status confirmed on modal
    const handleBlock = (id) => {
        handleBlockModalHide();
        dispatch(emitToggleCollectorStatus({id}));
    };

    // Render
    return (
        <>
            <AppLayoutComponent pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title="Responsables de zones" icon={'fa fa-user-clock'} />
                    <section className="content">
                        <div className='container-fluid'>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card custom-card-outline">
                                        {/* Search input */}
                                        <div className="card-header">
                                            <div className="card-tools">
                                                <TableSearchComponent needle={needle} handleNeedle={handleNeedleInput} />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            {/* Error message */}
                                            {requestFailed(collectorsRequests.list) && <ErrorAlertComponent message={collectorsRequests.list.message} />}
                                            {requestFailed(collectorsRequests.next) && <ErrorAlertComponent message={collectorsRequests.next.message} />}
                                            {requestFailed(collectorsRequests.reset) && <ErrorAlertComponent message={collectorsRequests.reset.message} />}
                                            {requestFailed(collectorsRequests.status) && <ErrorAlertComponent message={collectorsRequests.status.message} />}
                                            <button type="button"
                                                    className="btn btn-theme mr-2 mb-2"
                                                    onClick={handleNewCollectorModalShow}
                                            >
                                                <i className="fa fa-plus" /> Nouveau responsable
                                            </button>
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <CollectorsCardsComponent handleBlock={handleBlock}
                                                                            handleResetModalShow={handleResetModalShow}
                                                                            handleBlockModalShow={handleBlockModalShow}
                                                                            collectors={searchEngine(collectors, needle)}
                                                                            handleCollectorDetailsModalShow={handleCollectorDetailsModalShow}
                                                />
                                                : (requestLoading(collectorsRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        dataLength={collectors.length}
                                                                        next={handleNextCollectorsData}
                                                                        loader={<LoaderComponent />}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <CollectorsCardsComponent collectors={collectors}
                                                                                      handleBlock={handleBlock}
                                                                                      handleResetModalShow={handleResetModalShow}
                                                                                      handleBlockModalShow={handleBlockModalShow}
                                                                                      handleCollectorDetailsModalShow={handleCollectorDetailsModalShow}
                                                            />
                                                        </InfiniteScroll>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </AppLayoutComponent>
            {/* Modal */}
            <BlockModalComponent modal={blockModal}
                                 handleBlock={handleBlock}
                                 handleClose={handleBlockModalHide}
            />
            <DeleteModalComponent modal={resetModal}
                                  handleModal={handleReset}
                                  handleClose={handleResetModalHide}
            />
            <FormModalComponent modal={newCollectorModal} handleClose={handleNewCollectorModalHide}>
                <CollectorNewContainer type={newCollectorModal.type} handleClose={handleNewCollectorModalHide} />
            </FormModalComponent>
            <FormModalComponent modal={collectorDetailsModal} handleClose={handleCollectorDetailsModalHide}>
                <CollectorDetailsContainer id={collectorDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Search engine
function searchEngine(data, _needle) {
    // Avoid empty filtering
    if(_needle !== '' && _needle !== undefined) {
        // Filter
        data = data.filter((item) => {
            return (
                needleSearch(item.name, _needle) ||
                needleSearch(item.phone, _needle) ||
                needleSearch(item.email, _needle) ||
                needleSearch(item.zone.name, _needle) ||
                needleSearch(item.creator.name, _needle) ||
                needleSearch(item.zone.reference, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
CollectorsPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    collectors: PropTypes.array.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    collectorsRequests: PropTypes.object.isRequired,
};

export default React.memo(CollectorsPage);
