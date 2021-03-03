import user from './user/reducer';
import sims from './sims/reducer';
import zones from './zones/reducer';
import agents from './agents/reducer';
import settings from './settings/reducer';
import managers from './managers/reducer';
import operators from './operators/reducer';
import companies from './companies/reducer';
import simsTypes from './simsTypes/reducer';
import collectors from './collectors/reducer';
import supervisors from './supervisors/reducer';
import userRequests from './requests/user/reducer';
import simsRequests from './requests/sims/reducer';
import notifications from './notifications/reducer';
import zonesRequests from './requests/zones/reducer';
import administrators from './administrators/reducer';
import agentsRequests from './requests/agents/reducer';
import settingsRequests from './requests/settings/reducer';
import managersRequests from './requests/managers/reducer';
import operatorsRequests from './requests/operators/reducer';
import simsTypesRequests from './requests/simsTypes/reducer';
import companiesRequests from './requests/companies/reducer';
import collectorsRequests from './requests/collectors/reducer';
import supervisorsRequests from './requests/supervisors/reducer';
import notificationsRequests from './requests/notifications/reducer';
import administratorsRequests from './requests/administrators/reducer';

// Combine all reducers
export default {
    user,
    sims,
    zones,
    agents,
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
    notifications,
    agentsRequests,
    administrators,
    managersRequests,
    settingsRequests,
    simsTypesRequests,
    operatorsRequests,
    companiesRequests,
    collectorsRequests,
    supervisorsRequests,
    notificationsRequests,
    administratorsRequests,
};
