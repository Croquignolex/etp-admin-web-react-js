import {connect} from "react-redux";

import ResetPage from "../pages/ResetPage";
import {setPageTitle} from "../functions/generalFunctions";
import {RESET_PAGE} from "../constants/pageNameConstants";

setPageTitle(RESET_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({

});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ResetPage);