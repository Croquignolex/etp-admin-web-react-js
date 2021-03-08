import {connect} from "react-redux";

import ManagerNewComponent from "../../components/managers/ManagerNewComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.managersRequests.add
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ManagerNewComponent);