import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import {SUPERVISORS} from "../../constants/pageNameConstants";
import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import BlockModalComponent from "../../components/modals/BlockModalComponent";
import SupervisorNewContainer from "../../containers/supervisors/SupervisorNewContainer";
import SupervisorsCardsComponent from "../../components/supervisors/SupervisorsCardsComponent";
import SupervisorDetailsContainer from "../../containers/supervisors/SupervisorDetailsContainer";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";
import {emitSupervisorsFetch, emitNextSupervisorsFetch, emitToggleSupervisorStatus} from "../../redux/supervisors/actions";
import {storeSupervisorsRequestReset, storeNextSupervisorsRequestReset,storeSupervisorStatusToggleRequestReset} from "../../redux/requests/supervisors/actions";

// Component
function SupervisorsPage({supervisors, supervisorsRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [blockModal, setBlockModal] = useState({show: false, body: '', id: 0});
    const [newSupervisorModal, setNewSupervisorModal] = useState({show: false, header: ''});
    const [supervisorDetailsModal, setSupervisorDetailsModal] = useState({show: false, header: "DETAIL DU SUPERVISEUR", id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitSupervisorsFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    const handleNeedleInput = (data) => {
        setNeedle(data)
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeSupervisorsRequestReset());
        dispatch(storeNextSupervisorsRequestReset());
        dispatch(storeSupervisorStatusToggleRequestReset());
    };

    // Fetch next supervisor data to enhance infinite scroll
    const handleNextSupervisorsData = () => {
        dispatch(emitNextSupervisorsFetch({page}));
    }

    // Show new supervisor modal form
    const handleNewSupervisorModalShow = () => {
        setNewSupervisorModal({newSupervisorModal, header: "NOUVEAU SUPERVISEUR", show: true})
    }

    // Hide new supervisor modal form
    const handleNewSupervisorModalHide = () => {
        setNewSupervisorModal({...newSupervisorModal, show: false})
    }

    // Show supervisor details modal form
    const handleSupervisorDetailsModalShow = ({id}) => {
        setSupervisorDetailsModal({...supervisorDetailsModal, show: true, id})
    }

    // Hide supervisor details modal form
    const handleSupervisorDetailsModalHide = () => {
        setSupervisorDetailsModal({...supervisorDetailsModal, show: false})
    }

    // Trigger when user block status confirmed on modal
    const handleBlockModalShow = ({id, name}) => {
        setBlockModal({...blockModal, show: true, id, body: `Bloquer le superviseur ${name}?`})
    };

    // Hide block confirmation modal
    const handleBlockModalHide = () => {
        setBlockModal({...blockModal, show: false})
    }

    // Trigger when user change status confirmed on modal
    const handleBlock = (id) => {
        handleBlockModalHide();
        dispatch(emitToggleSupervisorStatus({id}));
    };

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={SUPERVISORS} icon={'fa fa-user-astronaut'} />
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
                                            {requestFailed(supervisorsRequests.list) && <ErrorAlertComponent message={supervisorsRequests.list.message} />}
                                            {requestFailed(supervisorsRequests.next) && <ErrorAlertComponent message={supervisorsRequests.next.message} />}
                                            <button type="button"
                                                    className="btn btn-theme mr-2 mb-2"
                                                    onClick={handleNewSupervisorModalShow}
                                            >
                                                <i className="fa fa-plus" /> Nouveau superviseur
                                            </button>
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <SupervisorsCardsComponent handleBlock={handleBlock}
                                                                             handleBlockModalShow={handleBlockModalShow}
                                                                             supervisors={searchEngine(supervisors, needle)}
                                                                             handleSupervisorDetailsModalShow={handleSupervisorDetailsModalShow}
                                                />
                                                : (requestLoading(supervisorsRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={supervisors.length}
                                                                        next={handleNextSupervisorsData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <SupervisorsCardsComponent handleBlock={handleBlock}
                                                                                       supervisors={supervisors}
                                                                                       handleBlockModalShow={handleBlockModalShow}
                                                                                       handleSupervisorDetailsModalShow={handleSupervisorDetailsModalShow}
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
            </AppLayoutContainer>
            {/* Modal */}
            <BlockModalComponent modal={blockModal}
                                 handleBlock={handleBlock}
                                 handleClose={handleBlockModalHide}
            />
            <FormModalComponent modal={newSupervisorModal} handleClose={handleNewSupervisorModalHide}>
                <SupervisorNewContainer type={newSupervisorModal.type} handleClose={handleNewSupervisorModalHide} />
            </FormModalComponent>
            <FormModalComponent modal={supervisorDetailsModal} handleClose={handleSupervisorDetailsModalHide}>
                <SupervisorDetailsContainer id={supervisorDetailsModal.id} />
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
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
SupervisorsPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    supervisors: PropTypes.array.isRequired,
    supervisorsRequests: PropTypes.object.isRequired,
};

export default React.memo(SupervisorsPage);