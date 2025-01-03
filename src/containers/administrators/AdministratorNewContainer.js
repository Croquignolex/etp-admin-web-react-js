import {connect} from "react-redux";

import AdministratorNewComponent from "../../components/administrators/AdministratorNewComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.administratorsRequests.add
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AdministratorNewComponent);