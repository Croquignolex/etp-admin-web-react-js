import {connect} from "react-redux";

import OverseerInfoEditComponent from "../../components/overseers/OverseerInfoEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    overseer: state.overseers.current,
    request: state.overseersRequests.edit,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OverseerInfoEditComponent);