import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    all: {failed: false, loading: false, succeeded: false, message: ""},
    add: {failed: false, loading: false, succeeded: false, message: ""},
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
    show: {failed: false, loading: false, succeeded: false, message: ""},
    edit: {failed: false, loading: false, succeeded: false, message: ""},
    status: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Supervisors
        // Resolve event to set supervisors init request store data
        case actions.STORE_SUPERVISORS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set supervisors failed request store data
        case actions.STORE_SUPERVISORS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisors succeeded request store data
        case actions.STORE_SUPERVISORS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisors reset request store data
        case actions.STORE_SUPERVISORS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next supervisors
        // Resolve event to set next supervisors init request store data
        case actions.STORE_NEXT_SUPERVISORS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next supervisors failed request store data
        case actions.STORE_NEXT_SUPERVISORS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next supervisors succeeded request store data
        case actions.STORE_NEXT_SUPERVISORS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next supervisors reset request store data
        case actions.STORE_NEXT_SUPERVISORS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All supervisors
        // Resolve event to set all supervisors init request store data
        case actions.STORE_ALL_SUPERVISORS_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all supervisors failed request store data
        case actions.STORE_ALL_SUPERVISORS_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all supervisors succeeded request store data
        case actions.STORE_ALL_SUPERVISORS_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all supervisors reset request store data
        case actions.STORE_ALL_SUPERVISORS_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Add supervisor
        // Resolve event to set add supervisor init request store data
        case actions.STORE_ADD_SUPERVISOR_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add supervisor failed request store data
        case actions.STORE_ADD_SUPERVISOR_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add supervisor succeeded request store data
        case actions.STORE_ADD_SUPERVISOR_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add supervisor reset request store data
        case actions.STORE_ADD_SUPERVISOR_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Supervisor
        // Resolve event to set supervisor init request store data
        case actions.STORE_SUPERVISOR_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set supervisor failed request store data
        case actions.STORE_SUPERVISOR_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisor succeeded request store data
        case actions.STORE_SUPERVISOR_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisor reset request store data
        case actions.STORE_SUPERVISOR_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Supervisor status toggle
        // Resolve event to set supervisor status toggle init request store data
        case actions.STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_INIT:
            nextState = {...state, status: requestInitValue()};
            return nextState || state;
        // Resolve event to set supervisor status toggle failed request store data
        case actions.STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_FAILED:
            nextState = {...state, status: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisor status toggle succeeded request store data
        case actions.STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_SUCCEEDED:
            nextState = {...state, status: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisor status toggle reset request store data
        case actions.STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_RESET:
            nextState = {...state, status: initialState.status};
            return nextState || state;
        // ======================================================== Supervisor edit info
        // Resolve event to set supervisor edit info init request store data
        case actions.STORE_SUPERVISOR_EDIT_INFO_REQUEST_INIT:
            nextState = {...state, edit: requestInitValue()};
            return nextState || state;
        // Resolve event to set supervisor edit info failed request store data
        case actions.STORE_SUPERVISOR_EDIT_INFO_REQUEST_FAILED:
            nextState = {...state, edit: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisor edit info succeeded request store data
        case actions.STORE_SUPERVISOR_EDIT_INFO_REQUEST_SUCCEEDED:
            nextState = {...state, edit: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisor edit info reset request store data
        case actions.STORE_SUPERVISOR_EDIT_INFO_REQUEST_RESET:
            nextState = {...state, edit: initialState.edit};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
