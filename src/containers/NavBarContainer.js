import {connect} from "react-redux";

import NavBarComponent from "../components/NavBarComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    userName: state.user.name
});

// Connect component to Redux
export default connect(mapStateToProps)(NavBarComponent);