import PropTypes from 'prop-types';
import React, {useEffect, useMemo} from 'react';

import * as types from "../constants/typeConstants";
import * as path from "../constants/pagePathConstants";
import {emitAllSimsFetch} from "../redux/sims/actions";
import {emitAllZonesFetch} from "../redux/zones/actions";
import * as setting from "../constants/settingsConstants";
import {emitAllAgentsFetch} from "../redux/agents/actions";
import HeaderComponent from "../components/HeaderComponent";
import {emitAllVendorsFetch} from "../redux/vendors/actions";
import {DASHBOARD_PAGE} from "../constants/pageNameConstants";
import {emitAllManagersFetch} from "../redux/managers/actions";
import {emitAllCompaniesFetch} from "../redux/companies/actions";
import {emitAllOperatorsFetch} from "../redux/operators/actions";
import AppLayoutComponent from "../components/AppLayoutComponent";
import {emitAllCollectorsFetch} from "../redux/collectors/actions";
import {emitAllSupervisorsFetch} from "../redux/supervisors/actions";
import {storeAllSimsRequestReset} from "../redux/requests/sims/actions";
import {storeAllZonesRequestReset} from "../redux/requests/zones/actions";
import {emitAllAdministratorsFetch} from "../redux/administrators/actions";
import {storeAllAgentsRequestReset} from "../redux/requests/agents/actions";
import {storeAllVendorsRequestReset} from "../redux/requests/vendors/actions";
import {storeAllManagersRequestReset} from "../redux/requests/managers/actions";
import {storeAllCompaniesRequestReset} from "../redux/requests/companies/actions";
import {storeAllOperatorsRequestReset} from "../redux/requests/operators/actions";
import DashboardCardComponent from "../components/dashboard/DashboardCardComponent";
import {storeAllCollectorsRequestReset} from "../redux/requests/collectors/actions";
import {storeAllSupervisorsRequestReset} from "../redux/requests/supervisors/actions";
import {storeAllAdministratorsRequestReset} from "../redux/requests/administrators/actions";

// Component
function ResetPage({ }) {
    // Local effects
    useEffect(() => {
        // dispatch(emitAllSimsFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        // dispatch(storeAllSimsRequestReset());

    };

    // Render
    return (
        <div></div>
    )
}

// Prop types to ensure destroyed props data type
ResetPage.propTypes = {

};

export default React.memo(ResetPage);