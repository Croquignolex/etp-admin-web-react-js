import PropTypes from 'prop-types';
import React, {useEffect, useMemo, useState} from 'react';

import * as types from "../constants/typeConstants";
import * as path from "../constants/pagePathConstants";
import {emitAllSimsFetch} from "../redux/sims/actions";
import {emitAllZonesFetch} from "../redux/zones/actions";
import * as setting from "../constants/settingsConstants";
import {emitAllAgentsFetch} from "../redux/agents/actions";
import {emitUserFactoryReset} from "../redux/user/actions";
import LoaderComponent from "../components/LoaderComponent";
import HeaderComponent from "../components/HeaderComponent";
import {emitAllVendorsFetch} from "../redux/vendors/actions";
import {DASHBOARD_PAGE} from "../constants/pageNameConstants";
import {emitAllManagersFetch} from "../redux/managers/actions";
import {emitAllCompaniesFetch} from "../redux/companies/actions";
import {emitAllOperatorsFetch} from "../redux/operators/actions";
import {emitAllOverseersFetch} from "../redux/overseers/actions";
import AppLayoutComponent from "../components/AppLayoutComponent";
import {emitAllCollectorsFetch} from "../redux/collectors/actions";
import ErrorAlertComponent from "../components/ErrorAlertComponent";
import {emitAllAccountantsFetch} from "../redux/accountants/actions";
import {emitAllSupervisorsFetch} from "../redux/supervisors/actions";
import {storeAllSimsRequestReset} from "../redux/requests/sims/actions";
import {storeAllZonesRequestReset} from "../redux/requests/zones/actions";
import {emitAllAdministratorsFetch} from "../redux/administrators/actions";
import {storeAllAgentsRequestReset} from "../redux/requests/agents/actions";
import DeleteModalComponent from "../components/modals/DeleteModalComponent";
import {storeAllVendorsRequestReset} from "../redux/requests/vendors/actions";
import {storeAllManagersRequestReset} from "../redux/requests/managers/actions";
import {storeUserFactoryResetRequestReset} from "../redux/requests/user/actions";
import {storeAllCompaniesRequestReset} from "../redux/requests/companies/actions";
import {storeAllOperatorsRequestReset} from "../redux/requests/operators/actions";
import DashboardCardComponent from "../components/dashboard/DashboardCardComponent";
import {storeAllCollectorsRequestReset} from "../redux/requests/collectors/actions";
import {storeAllSupervisorsRequestReset} from "../redux/requests/supervisors/actions";
import {storeAllAdministratorsRequestReset} from "../redux/requests/administrators/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../functions/generalFunctions";

// Component
function DashboardPage({agents, overseers, accountants, settings, dispatch, location, vendors,
                           zones, operators, allAgentsRequests, allAdministratorsRequests, administrators,
                           allSupervisorsRequests, allManagersRequests, allCollectorsRequests, allOverseersRequests,
                           supervisors, managers, collectors, companies, sims, allVendorsRequests, allAccountantsRequests,
                           allCompaniesRequests, allSimsRequests, allZonesRequests, allOperatorsRequests, resetUserRequests}) {
    // Local states
    const [confirmModal, setConfirmModal] = useState({show: false, body: '', id: 0});

    // Local effects
    useEffect(() => {
        fillDashboardData();
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(resetUserRequests)) {
            applySuccess(resetUserRequests.message);
            fillDashboardData();
        }
        // eslint-disable-next-line
    }, [resetUserRequests]);

    // Fill dashboard
    const fillDashboardData = () => {
        dispatch(emitAllSimsFetch());
        dispatch(emitAllZonesFetch());
        dispatch(emitAllAgentsFetch());
        dispatch(emitAllVendorsFetch());
        dispatch(emitAllManagersFetch());
        dispatch(emitAllCompaniesFetch());
        dispatch(emitAllOperatorsFetch());
        dispatch(emitAllOverseersFetch());
        dispatch(emitAllOverseersFetch());
        dispatch(emitAllCollectorsFetch());
        dispatch(emitAllSupervisorsFetch());
        dispatch(emitAllAccountantsFetch());
        dispatch(emitAllAccountantsFetch());
        dispatch(emitAllAdministratorsFetch());
    };

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAllSimsRequestReset());
        dispatch(storeAllZonesRequestReset());
        dispatch(storeAllAgentsRequestReset());
        dispatch(storeAllVendorsRequestReset());
        dispatch(storeAllManagersRequestReset());
        dispatch(storeAllCompaniesRequestReset());
        dispatch(storeAllOperatorsRequestReset());
        dispatch(storeAllCollectorsRequestReset());
        dispatch(storeAllSupervisorsRequestReset());
        dispatch(storeUserFactoryResetRequestReset());
        dispatch(storeAllAdministratorsRequestReset());
    };

    // Show confirm modal form
    const handleConfirmModalShow = () => {
        setConfirmModal({
            ...confirmModal,
            body: `
                Confirmer la rémise à zéro du système?
                Toutes des transactions seront perdus.
                Pensez à les sauvegarder avant d'éffectuer la rémise à zéro
            `,
            show: true
        });
    }

    // Hide confirm modal form
    const handleConfirmModalHide = () => {
        setConfirmModal({...confirmModal, show: false})
    }

    // Trigger when clearance confirm confirmed on modal
    const handleConfirm = () => {
        handleConfirmModalHide();
        dispatch(emitUserFactoryReset());
    };

    // Data
    const cardsData = settings.cards;
    const resourcesData = useMemo(() => {
        return agents.filter(agent => types.RESOURCE_TYPE === agent.reference).length
        // eslint-disable-next-line
    }, [agents]);

    // Render
    return (
        <>
            <AppLayoutComponent pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={DASHBOARD_PAGE} icon={'fa fa-tachometer-alt'} />
                    <section className="content">
                        <div className='container-fluid'>
                            <div className="row">
                                <div className="col">
                                    {requestFailed(resetUserRequests) && <ErrorAlertComponent message={resetUserRequests.message} />}
                                    {requestLoading(resetUserRequests) ? <div className='small-box'><LoaderComponent /></div> : (
                                        <button type="button"
                                                onClick={handleConfirmModalShow}
                                                className="btn btn-theme mr-2 mb-2"
                                        >
                                            <i className="fa fa-backward" /> Rémise à zéro
                                        </button>
                                    )}
                                </div>
                            </div>
                            {!requestLoading(resetUserRequests) && (
                                <div className="row">
                                    {cardsData.includes(setting.CARD_ADMINS) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent color='bg-danger'
                                                                    icon='fa fa-user-secret'
                                                                    url={path.ADMINS_PAGE_PATH}
                                                                    label={setting.LABEL_ADMINS}
                                                                    data={administrators.length}
                                                                    request={allAdministratorsRequests}
                                            />
                                        </div>
                                    }
                                    {cardsData.includes(setting.CARD_OVERSEERS) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent color='bg-dark'
                                                                    data={overseers.length}
                                                                    icon='fa fa-user-astronaut'
                                                                    url={path.OVERSEERS_PAGE_PATH}
                                                                    label={setting.LABEL_OVERSEERS}
                                                                    request={allOverseersRequests}
                                            />
                                        </div>
                                    }
                                    {cardsData.includes(setting.CARD_SUPERVISORS) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent color='bg-warning'
                                                                    icon='fa fa-user-edit'
                                                                    data={supervisors.length}
                                                                    url={path.SUPERVISORS_PAGE_PATH}
                                                                    label={setting.LABEL_SUPERVISORS}
                                                                    request={allSupervisorsRequests}
                                            />
                                        </div>
                                    }
                                    {cardsData.includes(setting.CARD_ACCOUNTANTS) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent color='bg-primary'
                                                                    icon='fa fa-user-shield'
                                                                    data={accountants.length}
                                                                    url={path.ACCOUNTANTS_PAGE_PATH}
                                                                    request={allAccountantsRequests}
                                                                    label={setting.LABEL_ACCOUNTANTS}
                                            />
                                        </div>
                                    }
                                    {cardsData.includes(setting.CARD_MANAGERS) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent color='bg-success'
                                                                    icon='fa fa-user-tag'
                                                                    data={managers.length}
                                                                    url={path.MANAGERS_PAGE_PATH}
                                                                    label={setting.LABEL_MANAGERS}
                                                                    request={allManagersRequests}
                                            />
                                        </div>
                                    }
                                    {cardsData.includes(setting.CARD_COLLECTORS) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent color='bg-dark'
                                                                    icon='fa fa-user-clock'
                                                                    data={collectors.length}
                                                                    url={path.COLLECTORS_PAGE_PATH}
                                                                    label={setting.LABEL_COLLECTORS}
                                                                    request={allCollectorsRequests}
                                            />
                                        </div>
                                    }
                                    {cardsData.includes(setting.CARD_AGENTS) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent color='bg-primary'
                                                                    icon='fa fa-user-cog'
                                                                    request={allAgentsRequests}
                                                                    url={path.AGENTS_PAGE_PATH}
                                                                    label={setting.LABEL_AGENTS}
                                                                    data={agents.length - resourcesData}
                                            />
                                        </div>
                                    }
                                    {cardsData.includes(setting.CARD_RESOURCES) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent color='bg-info'
                                                                    data={resourcesData}
                                                                    icon='fa fa-user-clock'
                                                                    url={path.AGENTS_PAGE_PATH}
                                                                    request={allAgentsRequests}
                                                                    label={setting.LABEL_RESOURCES}
                                            />
                                        </div>
                                    }
                                    {cardsData.includes(setting.CARD_COMPANIES) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent color='bg-danger'
                                                                    data={companies.length}
                                                                    icon='fa fa-university'
                                                                    url={path.COMPANIES_PAGE_PATH}
                                                                    label={setting.LABEL_COMPANIES}
                                                                    request={allCompaniesRequests}
                                            />
                                        </div>
                                    }
                                    {cardsData.includes(setting.CARD_SIMS) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent color='bg-warning'
                                                                    data={sims.length}
                                                                    icon='fa fa-sim-card'
                                                                    url={path.SIMS_PAGE_PATH}
                                                                    label={setting.LABEL_SIMS}
                                                                    request={allSimsRequests}
                                            />
                                        </div>
                                    }
                                    {cardsData.includes(setting.CARD_ZONES) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent icon='fa fa-map'
                                                                    color='bg-success'
                                                                    data={zones.length}
                                                                    url={path.ZONES_PAGE_PATH}
                                                                    label={setting.LABEL_ZONES}
                                                                    request={allZonesRequests}
                                            />
                                        </div>
                                    }
                                    {cardsData.includes(setting.CARD_OPERATORS) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent color='bg-primary'
                                                                    icon='fa fa-globe'
                                                                    data={operators.length}
                                                                    url={path.OPERATORS_PAGE_PATH}
                                                                    label={setting.LABEL_OPERATORS}
                                                                    request={allOperatorsRequests}
                                            />
                                        </div>
                                    }
                                    {cardsData.includes(setting.CARD_VENDORS) &&
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <DashboardCardComponent color='bg-info'
                                                                    data={vendors.length}
                                                                    icon='fa fa-user-ninja'
                                                                    request={allVendorsRequests}
                                                                    url={path.VENDORS_PAGE_PATH}
                                                                    label={setting.LABEL_VENDORS}
                                            />
                                        </div>
                                    }
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </AppLayoutComponent>
            {/* Modal */}
            <DeleteModalComponent modal={confirmModal}
                                  handleModal={handleConfirm}
                                  handleClose={handleConfirmModalHide}
            />
        </>
    )
}

// Prop types to ensure destroyed props data type
DashboardPage.propTypes = {
    sims: PropTypes.array.isRequired,
    zones: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    agents: PropTypes.array.isRequired,
    vendors: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    managers: PropTypes.array.isRequired,
    overseers: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired,
    companies: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
    collectors: PropTypes.array.isRequired,
    accountants: PropTypes.array.isRequired,
    supervisors: PropTypes.array.isRequired,
    administrators: PropTypes.array.isRequired,
    allSimsRequests: PropTypes.object.isRequired,
    allZonesRequests: PropTypes.object.isRequired,
    allAgentsRequests: PropTypes.object.isRequired,
    resetUserRequests: PropTypes.object.isRequired,
    allVendorsRequests: PropTypes.object.isRequired,
    allManagersRequests: PropTypes.object.isRequired,
    allOverseersRequests: PropTypes.object.isRequired,
    allCompaniesRequests: PropTypes.object.isRequired,
    allOperatorsRequests: PropTypes.object.isRequired,
    allCollectorsRequests: PropTypes.object.isRequired,
    allSupervisorsRequests: PropTypes.object.isRequired,
    allAccountantsRequests: PropTypes.object.isRequired,
    allAdministratorsRequests: PropTypes.object.isRequired,
};

export default React.memo(DashboardPage);