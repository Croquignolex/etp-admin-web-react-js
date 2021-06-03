import user from './user/reducer';
import sims from './sims/reducer';
import zones from './zones/reducer';
import agents from './agents/reducer';
import vendors from './vendors/reducer';
import settings from './settings/reducer';
import managers from './managers/reducer';
import operators from './operators/reducer';
import companies from './companies/reducer';
import simsTypes from './simsTypes/reducer';
import collectors from './collectors/reducer';
import supervisors from './supervisors/reducer';
import userRequests from './requests/user/reducer';
import simsRequests from './requests/sims/reducer';
import zonesRequests from './requests/zones/reducer';
import administrators from './administrators/reducer';
import agentsRequests from './requests/agents/reducer';
import vendorsRequests from './requests/vendors/reducer';
import settingsRequests from './requests/settings/reducer';
import managersRequests from './requests/managers/reducer';
import operatorsRequests from './requests/operators/reducer';
import simsTypesRequests from './requests/simsTypes/reducer';
import companiesRequests from './requests/companies/reducer';
import collectorsRequests from './requests/collectors/reducer';
import supervisorsRequests from './requests/supervisors/reducer';
import administratorsRequests from './requests/administrators/reducer';

// Combine all reducers
export default {
    user,
    sims,
    zones,
    agents,
    vendors,
    settings,
    managers,
    operators,
    simsTypes,
    companies,
    collectors,
    supervisors,
    simsRequests,
    userRequests,
    zonesRequests,
    agentsRequests,
    administrators,
    vendorsRequests,
    managersRequests,
    settingsRequests,
    simsTypesRequests,
    operatorsRequests,
    companiesRequests,
    collectorsRequests,
    supervisorsRequests,
    administratorsRequests,
};
