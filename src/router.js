import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import * as path from "./constants/pagePathConstants";
import asyncComponent from './components/asyncComponent';
import {NotificationContainer} from "react-notifications";
import PublicRouteContainer from "./containers/PublicRouteContainer";
import RestrictedRouteContainer from "./containers/RestrictedRouteContainer";

// Component
function AppRoutes({history}) {
    return (
        <ConnectedRouter history={history}>
            <NotificationContainer />
            <Switch>
                {/* Available pages on guest mode */}
                <PublicRouteContainer exact path="/" component={asyncComponent(() => import('./containers/CheckUserContainer'))} />
                {/* Available pages on auth mode */}
                {/* Common pages */}
                <RestrictedRouteContainer exact path={path.PROFILE_PAGE_PATH} component={asyncComponent(() => import('./pages/ProfilePage'))} />
                <RestrictedRouteContainer exact path={path.SETTINGS_PAGE_PATH} component={asyncComponent(() => import('./containers/SettingsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.DASHBOARD_PAGE_PATH} component={asyncComponent(() => import('./containers/DashboardPageContainer'))} />
                <RestrictedRouteContainer exact path={path.NOTIFICATIONS_PAGE_PATH} component={asyncComponent(() => import('./containers/notifications/NotificationsPageContainer'))} />
                {/* Users */}
                <RestrictedRouteContainer exact path={path.AGENTS_PAGE_PATH} component={asyncComponent(() => import('./containers/agents/AgentsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.MANAGERS_PAGE_PATH} component={asyncComponent(() => import('./containers/managers/ManagersPageContainer'))} />
                <RestrictedRouteContainer exact path={path.COLLECTORS_PAGE_PATH} component={asyncComponent(() => import('./containers/collectors/CollectorsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.SUPERVISORS_PAGE_PATH} component={asyncComponent(() => import('./containers/supervisors/SupervisorsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.ADMINS_PAGE_PATH} component={asyncComponent(() => import('./containers/administrators/AdministratorsPageContainer'))} />
                {/* Other pages */}
                <RestrictedRouteContainer exact path={path.SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/SimsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.ZONES_PAGE_PATH} component={asyncComponent(() => import('./containers/zones/ZonesPageContainer'))} />
                <RestrictedRouteContainer exact path={path.OPERATORS_PAGE_PATH} component={asyncComponent(() => import('./containers/operators/OperatorsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.COMPANIES_PAGE_PATH} component={asyncComponent(() => import('./containers/companies/CompaniesPageContainer'))} />
                {/* 404 page */}
                <Route component={asyncComponent(() => import('./pages/NotFoundPage'))} />
            </Switch>
        </ConnectedRouter>
    );
}

export default React.memo(AppRoutes);
