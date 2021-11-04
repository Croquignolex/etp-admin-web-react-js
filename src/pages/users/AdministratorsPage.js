import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import {ADMINS} from "../../constants/pageNameConstants";
import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutComponent from "../../components/AppLayoutComponent";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import DeleteModalComponent from "../../components/modals/DeleteModalComponent";
import AdministratorNewContainer from "../../containers/administrators/AdministratorNewContainer";
import AdministratorsCardsComponent from "../../components/administrators/AdministratorsCardsComponent";
import {emitAdministratorsFetch, emitNextAdministratorsFetch} from "../../redux/administrators/actions";
import AdministratorDetailsContainer from "../../containers/administrators/AdministratorDetailsContainer";
import {
    storeAdministratorsRequestReset,
    storeNextAdministratorsRequestReset,
    storeResetAdministratorRequestReset
} from "../../redux/requests/administrators/actions";
import {
    applySuccess,
    dateToString,
    needleSearch,
    requestFailed,
    requestLoading,
    requestSucceeded
} from "../../functions/generalFunctions";

// Component
function AdministratorsPage({administrators, administratorsRequests, hasMoreData, user, page, dispatch, location}) {console.log({user})
    // Local states
    const [needle, setNeedle] = useState('');
    const [resetModal, setResetModal] = useState({show: false, body: '', id: 0});
    const [newAdministratorModal, setNewAdministratorModal] = useState({show: false, header: ''});
    const [administratorDetailsModal, setAdministratorDetailsModal] = useState({show: false, header: "DETAIL DE L'ADMINISTRATEUR", id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitAdministratorsFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(administratorsRequests.reset)) {
            applySuccess(administratorsRequests.reset.message);
        }
        // eslint-disable-next-line
    }, [administratorsRequests.cancel]);

    const handleNeedleInput = (data) => {
        setNeedle(data)
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAdministratorsRequestReset());
        dispatch(storeNextAdministratorsRequestReset());
        dispatch(storeResetAdministratorRequestReset());
    };

    // Fetch next administrator data to enhance infinite scroll
    const handleNextAdministratorsData = () => {
        dispatch(emitNextAdministratorsFetch({page}));
    }

    // Show new administrator modal form
    const handleNewAdministratorModalShow = () => {
        setNewAdministratorModal({newAdministratorModal, header: "NOUVEL ADMINISTRATEUR", show: true})
    }

    // Hide new administrator modal form
    const handleNewAdministratorModalHide = () => {
        setNewAdministratorModal({...newAdministratorModal, show: false})
    }

    // Show administrator details modal form
    const handleAdministratorDetailsModalShow = ({id}) => {
        setAdministratorDetailsModal({...administratorDetailsModal, show: true, id})
    }

    // Hide administrator details modal form
    const handleAdministratorDetailsModalHide = () => {
        setAdministratorDetailsModal({...administratorDetailsModal, show: false})
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
        // dispatch(emitCancelTransfer({id}));
    };

    // Render
    return (
        <>
            <AppLayoutComponent pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={ADMINS} icon={'fa fa-user-secret'} />
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
                                            {requestFailed(administratorsRequests.list) && <ErrorAlertComponent message={administratorsRequests.list.message} />}
                                            {requestFailed(administratorsRequests.next) && <ErrorAlertComponent message={administratorsRequests.next.message} />}
                                            {requestFailed(administratorsRequests.reset) && <ErrorAlertComponent message={administratorsRequests.reset.message} />}
                                            <button type="button"
                                                    className="btn btn-theme mr-2 mb-2"
                                                    onClick={handleNewAdministratorModalShow}
                                            >
                                                <i className="fa fa-plus" /> Nouvel administrateur
                                            </button>
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <AdministratorsCardsComponent user={user}
                                                                                handleResetModalShow={handleResetModalShow}
                                                                                administrators={searchEngine(administrators, needle)}
                                                                                handleAdministratorDetailsModalShow={handleAdministratorDetailsModalShow}
                                                />
                                                : (requestLoading(administratorsRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={administrators.length}
                                                                        next={handleNextAdministratorsData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <AdministratorsCardsComponent user={user}
                                                                                          administrators={administrators}
                                                                                          handleResetModalShow={handleResetModalShow}
                                                                                          handleAdministratorDetailsModalShow={handleAdministratorDetailsModalShow}
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
            <DeleteModalComponent modal={resetModal}
                                  handleModal={handleReset}
                                  handleClose={handleResetModalHide}
            />
            <FormModalComponent modal={administratorDetailsModal} handleClose={handleAdministratorDetailsModalHide}>
                <AdministratorDetailsContainer id={administratorDetailsModal.id} />
            </FormModalComponent>
            <FormModalComponent modal={newAdministratorModal} handleClose={handleNewAdministratorModalHide}>
                <AdministratorNewContainer handleClose={handleNewAdministratorModalHide} />
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
AdministratorsPage.propTypes = {
    user: PropTypes.object.isRequired,
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    administrators: PropTypes.array.isRequired,
    administratorsRequests: PropTypes.object.isRequired,
};

export default React.memo(AdministratorsPage);
