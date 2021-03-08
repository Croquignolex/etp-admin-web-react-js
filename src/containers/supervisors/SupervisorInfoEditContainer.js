import {connect} from "react-redux";

import SupervisorInfoEditComponent from "../../components/supervisors/SupervisorInfoEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    supervisor: state.supervisors.current,
    request: state.supervisorsRequests.edit,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(SupervisorInfoEditComponent);