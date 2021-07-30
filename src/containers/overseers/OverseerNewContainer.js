import {connect} from "react-redux";

import OverseerNewComponent from "../../components/overseers/OverseerNewComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.overseersRequests.add
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OverseerNewComponent);