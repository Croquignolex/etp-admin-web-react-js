import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import {OVERSEER} from "../../constants/pageNameConstants";
import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutComponent from "../../components/AppLayoutComponent";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import BlockModalComponent from "../../components/modals/BlockModalComponent";
import OverseerNewContainer from "../../containers/overseers/OverseerNewContainer";
import OverseersCardsComponent from "../../components/overseers/OverseersCardsComponent";
import OverseerDetailsContainer from "../../containers/overseers/OverseerDetailsContainer";
import {emitOverseersFetch, emitNextOverseersFetch, emitToggleOverseerStatus} from "../../redux/overseers/actions";
import {applySuccess, dateToString, needleSearch, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";
import {storeOverseersRequestReset, storeNextOverseersRequestReset, storeOverseerStatusToggleRequestReset,} from "../../redux/requests/overseers/actions";

// Component
function OverseersPage({overseers, overseersRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [blockModal, setBlockModal] = useState({show: false, body: '', id: 0});
    const [newOverseerModal, setNewOverseerModal] = useState({show: false, header: ''});
    const [overseerDetailsModal, setOverseerDetailsModal] = useState({show: false, header: '', id: 0});

    // Local effects
    useEffect(() => {
        dispatch(emitOverseersFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(overseersRequests.status)) {
            applySuccess(overseersRequests.status.message);
        }
        // eslint-disable-next-line
    }, [overseersRequests.status]);

    const handleNeedleInput = (data) => {
        setNeedle(data)
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeOverseersRequestReset());
        dispatch(storeNextOverseersRequestReset());
        dispatch(storeOverseerStatusToggleRequestReset());
    };

    // Fetch next overseer data to enhance infinite scroll
    const handleNextOverseersData = () => {
        dispatch(emitNextOverseersFetch({page}));
    }

    // Show new overseer modal form
    const handleNewOverseerModalShow = () => {
        setNewOverseerModal({newOverseerModal, header: "NOUVEAU COMPTABLE", show: true})
    }

    // Hide new overseer modal form
    const handleNewOverseerModalHide = () => {
        setNewOverseerModal({...newOverseerModal, show: false})
    }

    // Show overseer details modal form
    const handleOverseerDetailsModalShow = ({id, name}) => {
        setOverseerDetailsModal({...overseerDetailsModal, show: true, id, header: "DETAIL DE " + name})
    }

    // Hide overseer details modal form
    const handleOverseerDetailsModalHide = () => {
        setOverseerDetailsModal({...overseerDetailsModal, show: false})
    }

    // Trigger when user block status confirmed on modal
    const handleBlockModalShow = ({id, name}) => {
        setBlockModal({...blockModal, show: true, id, body: `Bloquer le comptable ${name}?`})
    };

    // Hide block confirmation modal
    const handleBlockModalHide = () => {
        setBlockModal({...blockModal, show: false})
    }

    // Trigger when user change status confirmed on modal
    const handleBlock = (id) => {
        handleBlockModalHide();
        dispatch(emitToggleOverseerStatus({id}));
    };

    // Render
    return (
        <>
            <AppLayoutComponent pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={OVERSEER} icon={'fa fa-user-astronaut'} />
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
                                            {requestFailed(overseersRequests.list) && <ErrorAlertComponent message={overseersRequests.list.message} />}
                                            {requestFailed(overseersRequests.next) && <ErrorAlertComponent message={overseersRequests.next.message} />}
                                            {requestFailed(overseersRequests.status) && <ErrorAlertComponent message={overseersRequests.status.message} />}
                                            <button type="button"
                                                    className="btn btn-theme ml-2 mb-2"
                                                    onClick={handleNewOverseerModalShow}
                                            >
                                                <i className="fa fa-plus" /> Nouveau controleur
                                            </button>
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <OverseersCardsComponent handleBlock={handleBlock}
                                                                             handleBlockModalShow={handleBlockModalShow}
                                                                             overseers={searchEngine(overseers, needle)}
                                                                             handleOverseerDetailsModalShow={handleOverseerDetailsModalShow}
                                                />
                                                : (requestLoading(overseersRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={overseers.length}
                                                                        next={handleNextOverseersData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <OverseersCardsComponent overseers={overseers}
                                                                                       handleBlock={handleBlock}
                                                                                       handleBlockModalShow={handleBlockModalShow}
                                                                                       handleOverseerDetailsModalShow={handleOverseerDetailsModalShow}
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
            <FormModalComponent modal={newOverseerModal} handleClose={handleNewOverseerModalHide}>
                <OverseerNewContainer type={newOverseerModal.type} handleClose={handleNewOverseerModalHide} />
            </FormModalComponent>
            <FormModalComponent modal={overseerDetailsModal} handleClose={handleOverseerDetailsModalHide}>
                <OverseerDetailsContainer id={overseerDetailsModal.id} />
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
                needleSearch(item.creator.name, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
OverseersPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    overseers: PropTypes.array.isRequired,
    overseersRequests: PropTypes.object.isRequired,
};

export default React.memo(OverseersPage);