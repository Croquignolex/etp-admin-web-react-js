import {connect} from "react-redux";

import DashboardPage from "../pages/DashboardPage";
import {setPageTitle} from "../functions/generalFunctions";
import {DASHBOARD_PAGE} from "../constants/pageNameConstants";

setPageTitle(DASHBOARD_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user,
    sims: state.sims.list,
    settings: state.settings,
    agents: state.agents.list,
    managers: state.managers.list,
    companies: state.companies.list,
    collectors: state.collectors.list,
    supervisors: state.supervisors.list,
    allSimsRequests: state.simsRequests.all,
    administrators: state.administrators.list,
    allAgentsRequests: state.agentsRequests.all,
    allManagersRequests: state.managersRequests.all,
    allCompaniesRequests: state.companiesRequests.all,
    allCollectorsRequests: state.collectorsRequests.all,
    allSupervisorsRequests: state.supervisorsRequests.all,
    allAdministratorsRequests: state.administratorsRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);