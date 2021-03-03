import PropTypes from 'prop-types';
import React, {useEffect, useMemo} from 'react';

import * as types from "../constants/typeConstants";
import * as path from "../constants/pagePathConstants";
import {emitAllSimsFetch} from "../redux/sims/actions";
import * as setting from "../constants/settingsConstants";
import {formatNumber} from "../functions/generalFunctions";
import {emitAllAgentsFetch} from "../redux/agents/actions";
import HeaderComponent from "../components/HeaderComponent";
import {DASHBOARD_PAGE} from "../constants/pageNameConstants";
import AppLayoutContainer from "../containers/AppLayoutContainer";
import {storeAllSimsRequestReset} from "../redux/requests/sims/actions";
import {storeAllAgentsRequestReset} from "../redux/requests/agents/actions";
import DashboardCardComponent from "../components/dashboard/DashboardCardComponent";

// Component
function DashboardPage({agents, settings, dispatch, location, allAgentsRequests}) {
    // Local effects
    useEffect(() => {
        dispatch(emitAllSimsFetch());
        dispatch(emitAllAgentsFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAllSimsRequestReset());
        dispatch(storeAllAgentsRequestReset());
    };

    // Data
    const cardsData = settings.cards;
    const resourcesData = useMemo(() => {
        return formatNumber(agents.filter(agent => types.RESOURCE_TYPE === agent.reference).length)
        // eslint-disable-next-line
    }, [agents]);

    // Render
    return (
        <AppLayoutContainer pathname={location.pathname}>
            <div className="content-wrapper">
                <HeaderComponent title={DASHBOARD_PAGE} icon={'fa fa-tachometer-alt'} />
                <section className="content">
                    <div className='container-fluid'>
                        <div className="row">
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
                        </div>
                    </div>
                </section>
            </div>
        </AppLayoutContainer>
    )
}

// Prop types to ensure destroyed props data type
DashboardPage.propTypes = {
    user: PropTypes.object.isRequired,
    agents: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
    allAgentsRequests: PropTypes.object.isRequired,
};

export default React.memo(DashboardPage);