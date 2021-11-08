// Reducer action types
export const STORE_OVERSEERS_REQUEST_INIT = 'STORE_OVERSEERS_REQUEST_INIT';
export const STORE_OVERSEERS_REQUEST_RESET = 'STORE_OVERSEERS_REQUEST_RESET';
export const STORE_OVERSEERS_REQUEST_FAILED = 'STORE_OVERSEERS_REQUEST_FAILED';
export const STORE_OVERSEERS_REQUEST_SUCCEEDED = 'STORE_OVERSEERS_REQUEST_SUCCEEDED';

export const STORE_NEXT_OVERSEERS_REQUEST_INIT = 'STORE_NEXT_OVERSEERS_REQUEST_INIT';
export const STORE_NEXT_OVERSEERS_REQUEST_RESET = 'STORE_NEXT_OVERSEERS_REQUEST_RESET';
export const STORE_NEXT_OVERSEERS_REQUEST_FAILED = 'STORE_NEXT_OVERSEERS_REQUEST_FAILED';
export const STORE_NEXT_OVERSEERS_REQUEST_SUCCEEDED = 'STORE_NEXT_OVERSEERS_REQUEST_SUCCEEDED';

export const STORE_ALL_OVERSEERS_REQUEST_INIT = 'STORE_ALL_OVERSEERS_REQUEST_INIT';
export const STORE_ALL_OVERSEERS_REQUEST_RESET = 'STORE_ALL_OVERSEERS_REQUEST_RESET';
export const STORE_ALL_OVERSEERS_REQUEST_FAILED = 'STORE_ALL_OVERSEERS_REQUEST_FAILED';
export const STORE_ALL_OVERSEERS_REQUEST_SUCCEEDED = 'STORE_ALL_OVERSEERS_REQUEST_SUCCEEDED';

export const STORE_ADD_OVERSEER_REQUEST_INIT = 'STORE_ADD_OVERSEER_REQUEST_INIT';
export const STORE_ADD_OVERSEER_REQUEST_RESET = 'STORE_ADD_OVERSEER_REQUEST_RESET';
export const STORE_ADD_OVERSEER_REQUEST_FAILED = 'STORE_ADD_OVERSEER_REQUEST_FAILED';
export const STORE_ADD_OVERSEER_REQUEST_SUCCEEDED = 'STORE_ADD_OVERSEER_REQUEST_SUCCEEDED';

export const STORE_OVERSEER_REQUEST_INIT = 'STORE_OVERSEER_REQUEST_INIT';
export const STORE_OVERSEER_REQUEST_RESET = 'STORE_OVERSEER_REQUEST_RESET';
export const STORE_OVERSEER_REQUEST_FAILED = 'STORE_OVERSEER_REQUEST_FAILED';
export const STORE_OVERSEER_REQUEST_SUCCEEDED = 'STORE_OVERSEER_REQUEST_SUCCEEDED';

export const STORE_OVERSEER_STATUS_TOGGLE_REQUEST_INIT = 'STORE_OVERSEER_STATUS_TOGGLE_REQUEST_INIT';
export const STORE_OVERSEER_STATUS_TOGGLE_REQUEST_RESET = 'STORE_OVERSEER_STATUS_TOGGLE_REQUEST_RESET';
export const STORE_OVERSEER_STATUS_TOGGLE_REQUEST_FAILED = 'STORE_OVERSEER_STATUS_TOGGLE_REQUEST_FAILED';
export const STORE_OVERSEER_STATUS_TOGGLE_REQUEST_SUCCEEDED = 'STORE_OVERSEER_STATUS_TOGGLE_REQUEST_SUCCEEDED';

export const STORE_OVERSEER_EDIT_INFO_REQUEST_INIT = 'STORE_OVERSEER_EDIT_INFO_REQUEST_INIT';
export const STORE_OVERSEER_EDIT_INFO_REQUEST_RESET = 'STORE_OVERSEER_EDIT_INFO_REQUEST_RESET';
export const STORE_OVERSEER_EDIT_INFO_REQUEST_FAILED = 'STORE_OVERSEER_EDIT_INFO_REQUEST_FAILED';
export const STORE_OVERSEER_EDIT_INFO_REQUEST_SUCCEEDED = 'STORE_OVERSEER_EDIT_INFO_REQUEST_SUCCEEDED';

export const STORE_RESET_OVERSEER_REQUEST_INIT = 'STORE_RESET_OVERSEER_REQUEST_INIT';
export const STORE_RESET_OVERSEER_REQUEST_RESET = 'STORE_RESET_OVERSEER_REQUEST_RESET';
export const STORE_RESET_OVERSEER_REQUEST_FAILED = 'STORE_RESET_OVERSEER_REQUEST_FAILED';
export const STORE_RESET_OVERSEER_REQUEST_SUCCEEDED = 'STORE_RESET_OVERSEER_REQUEST_SUCCEEDED';

// ======================================================== Overseers
// Set overseers init data into store
export const storeOverseersRequestInit = () => ({
    type: STORE_OVERSEERS_REQUEST_INIT
});

// Set overseers failed data into store
export const storeOverseersRequestFailed = ({message}) => ({
    message,
    type: STORE_OVERSEERS_REQUEST_FAILED
});

// Set overseers succeeded data into store
export const storeOverseersRequestSucceed = ({message}) => ({
    message,
    type: STORE_OVERSEERS_REQUEST_SUCCEEDED
});

// Set overseers reset data into store
export const storeOverseersRequestReset = () => ({
    type: STORE_OVERSEERS_REQUEST_RESET
});
// ======================================================== Next overseers
// Set next overseers init data into store
export const storeNextOverseersRequestInit = () => ({
    type: STORE_NEXT_OVERSEERS_REQUEST_INIT
});

// Set next overseers failed data into store
export const storeNextOverseersRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_OVERSEERS_REQUEST_FAILED
});

// Set next overseers succeeded data into store
export const storeNextOverseersRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_OVERSEERS_REQUEST_SUCCEEDED
});

// Set next overseers reset data into store
export const storeNextOverseersRequestReset = () => ({
    type: STORE_NEXT_OVERSEERS_REQUEST_RESET
});
// ======================================================== All overseers
// Set all overseers init data into store
export const storeAllOverseersRequestInit = () => ({
    type: STORE_ALL_OVERSEERS_REQUEST_INIT
});

// Set all overseers failed data into store
export const storeAllOverseersRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_OVERSEERS_REQUEST_FAILED
});

// Set all overseers succeeded data into store
export const storeAllOverseersRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_OVERSEERS_REQUEST_SUCCEEDED
});

// Set all overseers reset data into store
export const storeAllOverseersRequestReset = () => ({
    type: STORE_ALL_OVERSEERS_REQUEST_RESET
});
// ======================================================== Add overseer
// Set add overseer init data into store
export const storeAddOverseerRequestInit = () => ({
    type: STORE_ADD_OVERSEER_REQUEST_INIT
});

// Set add overseer failed data into store
export const storeAddOverseerRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_OVERSEER_REQUEST_FAILED
});

// Set add overseer succeeded data into store
export const storeAddOverseerRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_OVERSEER_REQUEST_SUCCEEDED
});

// Set add overseer reset data into store
export const storeAddOverseerRequestReset = () => ({
    type: STORE_ADD_OVERSEER_REQUEST_RESET
});
// ======================================================== Overseer
// Set overseer init data into store
export const storeOverseerRequestInit = () => ({
    type: STORE_OVERSEER_REQUEST_INIT
});

// Set overseer failed data into store
export const storeOverseerRequestFailed = ({message}) => ({
    message,
    type: STORE_OVERSEER_REQUEST_FAILED
});

// Set overseer succeeded data into store
export const storeOverseerRequestSucceed = ({message}) => ({
    message,
    type: STORE_OVERSEER_REQUEST_SUCCEEDED
});

// Set overseer reset data into store
export const storeOverseerRequestReset = () => ({
    type: STORE_OVERSEER_REQUEST_RESET
});
// ======================================================== Overseer status toggle
// Set overseer status toggle init data into store
export const storeOverseerStatusToggleRequestInit = () => ({
    type: STORE_OVERSEER_STATUS_TOGGLE_REQUEST_INIT
});

// Set overseer status toggle failed data into store
export const storeOverseerStatusToggleRequestFailed = ({message}) => ({
    message,
    type: STORE_OVERSEER_STATUS_TOGGLE_REQUEST_FAILED
});

// Set overseer status toggle succeeded data into store
export const storeOverseerStatusToggleRequestSucceed = ({message}) => ({
    message,
    type: STORE_OVERSEER_STATUS_TOGGLE_REQUEST_SUCCEEDED
});

// Set overseer status toggle reset data into store
export const storeOverseerStatusToggleRequestReset = () => ({
    type: STORE_OVERSEER_STATUS_TOGGLE_REQUEST_RESET
});
// ======================================================== Overseer edit info
// Set overseer edit info init data into store
export const storeOverseerEditInfoRequestInit = () => ({
    type: STORE_OVERSEER_EDIT_INFO_REQUEST_INIT
});

// Set overseer edit info failed data into store
export const storeOverseerEditInfoRequestFailed = ({message}) => ({
    message,
    type: STORE_OVERSEER_EDIT_INFO_REQUEST_FAILED
});

// Set overseer edit info succeeded data into store
export const storeOverseerEditInfoRequestSucceed = ({message}) => ({
    message,
    type: STORE_OVERSEER_EDIT_INFO_REQUEST_SUCCEEDED
});

// Set overseer edit info reset data into store
export const storeOverseerEditInfoRequestReset = () => ({
    type: STORE_OVERSEER_EDIT_INFO_REQUEST_RESET
});
// ======================================================== Reset overseer
// Set reset overseer init data into store
export const storeResetOverseerRequestInit = () => ({
    type: STORE_RESET_OVERSEER_REQUEST_INIT
});

// Set reset overseer failed data into store
export const storeResetOverseerRequestFailed = ({message}) => ({
    message,
    type: STORE_RESET_OVERSEER_REQUEST_FAILED
});

// Set reset overseer succeeded data into store
export const storeResetOverseerRequestSucceed = ({message}) => ({
    message,
    type: STORE_RESET_OVERSEER_REQUEST_SUCCEEDED
});

// Set reset overseer reset data into store
export const storeResetOverseerRequestReset = () => ({
    type: STORE_RESET_OVERSEER_REQUEST_RESET
});
