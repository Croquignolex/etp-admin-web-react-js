import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import * as path from "./constants/pagePathConstants";
import asyncComponent from './components/asyncComponent';
import {NotificationContainer} from "react-notifications";
import PublicRouteContainer from "./containers/PublicRouteContainer";
import RestrictedRouteContainer from "./containers/RestrictedRouteContainer";

// Component
function AppRoutes() {
    return (
        <Router>
            <NotificationContainer />
            <Switch>
                {/* Available pages on guest mode */}
                <PublicRouteContainer exact path="/" component={asyncComponent(() => import('./containers/CheckUserContainer'))} />
                {/* Available pages on auth mode */}
                {/* Common pages */}
                <RestrictedRouteContainer exact path={path.HOME_PAGE_PATH} component={asyncComponent(() => import('./pages/HomePage'))} />
                <RestrictedRouteContainer exact path={path.PROFILE_PAGE_PATH} component={asyncComponent(() => import('./pages/ProfilePage'))} />
                <RestrictedRouteContainer exact path={path.SETTINGS_PAGE_PATH} component={asyncComponent(() => import('./containers/SettingsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.DASHBOARD_PAGE_PATH} component={asyncComponent(() => import('./containers/DashboardPageContainer'))} />
                {/* Users */}
                <RestrictedRouteContainer exact path={path.AGENTS_PAGE_PATH} component={asyncComponent(() => import('./containers/agents/AgentsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.MANAGERS_PAGE_PATH} component={asyncComponent(() => import('./containers/managers/ManagersPageContainer'))} />
                <RestrictedRouteContainer exact path={path.RESOURCES_PAGE_PATH} component={asyncComponent(() => import('./containers/resources/ResourcesPageContainer'))} />
                <RestrictedRouteContainer exact path={path.OVERSEERS_PAGE_PATH} component={asyncComponent(() => import('./containers/overseers/OverseersPageContainer'))} />
                <RestrictedRouteContainer exact path={path.COLLECTORS_PAGE_PATH} component={asyncComponent(() => import('./containers/collectors/CollectorsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.SUPERVISORS_PAGE_PATH} component={asyncComponent(() => import('./containers/supervisors/SupervisorsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.ACCOUNTANTS_PAGE_PATH} component={asyncComponent(() => import('./containers/accountants/AccountantsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.ADMINS_PAGE_PATH} component={asyncComponent(() => import('./containers/administrators/AdministratorsPageContainer'))} />
                {/* Other pages */}
                <RestrictedRouteContainer exact path={path.ZONES_PAGE_PATH} component={asyncComponent(() => import('./containers/zones/ZonesPageContainer'))} />
                <RestrictedRouteContainer exact path={path.VENDORS_PAGE_PATH} component={asyncComponent(() => import('./containers/vendors/VendorsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.AGENCIES_PAGE_PATH} component={asyncComponent(() => import('./containers/agencies/AgenciesPageContainer'))} />
                <RestrictedRouteContainer exact path={path.OPERATORS_PAGE_PATH} component={asyncComponent(() => import('./containers/operators/OperatorsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.COMPANIES_PAGE_PATH} component={asyncComponent(() => import('./containers/companies/CompaniesPageContainer'))} />
                {/* Sims */}
                <RestrictedRouteContainer exact path={path.SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/SimsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.FLEETS_SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/FleetSimsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.AGENTS_SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/AgentSimsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.MASTERS_SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/MasterSimsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.RESOURCES_SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/ResourceSimsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.COLLECTORS_SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/CollectorSimsPageContainer'))} />
                {/* 404 page */}
                <Route component={asyncComponent(() => import('./pages/NotFoundPage'))} />
            </Switch>
        </Router>
    );
}

export default React.memo(AppRoutes);
