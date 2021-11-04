import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    all: {failed: false, loading: false, succeeded: false, message: ""},
    add: {failed: false, loading: false, succeeded: false, message: ""},
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
    show: {failed: false, loading: false, succeeded: false, message: ""},
    reset: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Administrators
        // Resolve event to set administrators init request store data
        case actions.STORE_ADMINISTRATORS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set administrators failed request store data
        case actions.STORE_ADMINISTRATORS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set administrators succeeded request store data
        case actions.STORE_ADMINISTRATORS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set administrators reset request store data
        case actions.STORE_ADMINISTRATORS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next administrators
        // Resolve event to set next administrators init request store data
        case actions.STORE_NEXT_ADMINISTRATORS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next administrators failed request store data
        case actions.STORE_NEXT_ADMINISTRATORS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next administrators succeeded request store data
        case actions.STORE_NEXT_ADMINISTRATORS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next administrators reset request store data
        case actions.STORE_NEXT_ADMINISTRATORS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All administrators
        // Resolve event to set all administrators init request store data
        case actions.STORE_ALL_ADMINISTRATORS_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all administrators failed request store data
        case actions.STORE_ALL_ADMINISTRATORS_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all administrators succeeded request store data
        case actions.STORE_ALL_ADMINISTRATORS_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all administrators reset request store data
        case actions.STORE_ALL_ADMINISTRATORS_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Add administrator
        // Resolve event to set add administrator init request store data
        case actions.STORE_ADD_ADMINISTRATOR_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add administrator failed request store data
        case actions.STORE_ADD_ADMINISTRATOR_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add administrator succeeded request store data
        case actions.STORE_ADD_ADMINISTRATOR_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add administrator reset request store data
        case actions.STORE_ADD_ADMINISTRATOR_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Administrator
        // Resolve event to set administrator init request store data
        case actions.STORE_ADMINISTRATOR_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set administrator failed request store data
        case actions.STORE_ADMINISTRATOR_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set administrator succeeded request store data
        case actions.STORE_ADMINISTRATOR_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set administrator reset request store data
        case actions.STORE_ADMINISTRATOR_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Reset administrator
        // Resolve event to set reset administrator init request store data
        case actions.STORE_RESET_ADMINISTRATOR_REQUEST_INIT:
            nextState = {...state, reset: requestInitValue()};
            return nextState || state;
        // Resolve event to set reset administrator failed request store data
        case actions.STORE_RESET_ADMINISTRATOR_REQUEST_FAILED:
            nextState = {...state, reset: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set reset administrator succeeded request store data
        case actions.STORE_RESET_ADMINISTRATOR_REQUEST_SUCCEEDED:
            nextState = {...state, reset: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set reset administrator reset request store data
        case actions.STORE_RESET_ADMINISTRATOR_REQUEST_RESET:
            nextState = {...state, reset: initialState.reset};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
