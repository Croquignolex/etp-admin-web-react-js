// Reducer action types
export const STORE_SUPERVISORS_REQUEST_INIT = 'STORE_SUPERVISORS_REQUEST_INIT';
export const STORE_SUPERVISORS_REQUEST_RESET = 'STORE_SUPERVISORS_REQUEST_RESET';
export const STORE_SUPERVISORS_REQUEST_FAILED = 'STORE_SUPERVISORS_REQUEST_FAILED';
export const STORE_SUPERVISORS_REQUEST_SUCCEEDED = 'STORE_SUPERVISORS_REQUEST_SUCCEEDED';

export const STORE_NEXT_SUPERVISORS_REQUEST_INIT = 'STORE_NEXT_SUPERVISORS_REQUEST_INIT';
export const STORE_NEXT_SUPERVISORS_REQUEST_RESET = 'STORE_NEXT_SUPERVISORS_REQUEST_RESET';
export const STORE_NEXT_SUPERVISORS_REQUEST_FAILED = 'STORE_NEXT_SUPERVISORS_REQUEST_FAILED';
export const STORE_NEXT_SUPERVISORS_REQUEST_SUCCEEDED = 'STORE_NEXT_SUPERVISORS_REQUEST_SUCCEEDED';

export const STORE_ALL_SUPERVISORS_REQUEST_INIT = 'STORE_ALL_SUPERVISORS_REQUEST_INIT';
export const STORE_ALL_SUPERVISORS_REQUEST_RESET = 'STORE_ALL_SUPERVISORS_REQUEST_RESET';
export const STORE_ALL_SUPERVISORS_REQUEST_FAILED = 'STORE_ALL_SUPERVISORS_REQUEST_FAILED';
export const STORE_ALL_SUPERVISORS_REQUEST_SUCCEEDED = 'STORE_ALL_SUPERVISORS_REQUEST_SUCCEEDED';

export const STORE_ADD_SUPERVISOR_REQUEST_INIT = 'STORE_ADD_SUPERVISOR_REQUEST_INIT';
export const STORE_ADD_SUPERVISOR_REQUEST_RESET = 'STORE_ADD_SUPERVISOR_REQUEST_RESET';
export const STORE_ADD_SUPERVISOR_REQUEST_FAILED = 'STORE_ADD_SUPERVISOR_REQUEST_FAILED';
export const STORE_ADD_SUPERVISOR_REQUEST_SUCCEEDED = 'STORE_ADD_SUPERVISOR_REQUEST_SUCCEEDED';

export const STORE_SUPERVISOR_REQUEST_INIT = 'STORE_SUPERVISOR_REQUEST_INIT';
export const STORE_SUPERVISOR_REQUEST_RESET = 'STORE_SUPERVISOR_REQUEST_RESET';
export const STORE_SUPERVISOR_REQUEST_FAILED = 'STORE_SUPERVISOR_REQUEST_FAILED';
export const STORE_SUPERVISOR_REQUEST_SUCCEEDED = 'STORE_SUPERVISOR_REQUEST_SUCCEEDED';

export const STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_INIT = 'STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_INIT';
export const STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_RESET = 'STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_RESET';
export const STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_FAILED = 'STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_FAILED';
export const STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_SUCCEEDED = 'STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_SUCCEEDED';

export const STORE_SUPERVISOR_EDIT_INFO_REQUEST_INIT = 'STORE_SUPERVISOR_EDIT_INFO_REQUEST_INIT';
export const STORE_SUPERVISOR_EDIT_INFO_REQUEST_RESET = 'STORE_SUPERVISOR_EDIT_INFO_REQUEST_RESET';
export const STORE_SUPERVISOR_EDIT_INFO_REQUEST_FAILED = 'STORE_SUPERVISOR_EDIT_INFO_REQUEST_FAILED';
export const STORE_SUPERVISOR_EDIT_INFO_REQUEST_SUCCEEDED = 'STORE_SUPERVISOR_EDIT_INFO_REQUEST_SUCCEEDED';

export const STORE_RESET_SUPERVISOR_REQUEST_INIT = 'STORE_RESET_SUPERVISOR_REQUEST_INIT';
export const STORE_RESET_SUPERVISOR_REQUEST_RESET = 'STORE_RESET_SUPERVISOR_REQUEST_RESET';
export const STORE_RESET_SUPERVISOR_REQUEST_FAILED = 'STORE_RESET_SUPERVISOR_REQUEST_FAILED';
export const STORE_RESET_SUPERVISOR_REQUEST_SUCCEEDED = 'STORE_RESET_SUPERVISOR_REQUEST_SUCCEEDED';

// ======================================================== Supervisors
// Set supervisors init data into store
export const storeSupervisorsRequestInit = () => ({
    type: STORE_SUPERVISORS_REQUEST_INIT
});

// Set supervisors failed data into store
export const storeSupervisorsRequestFailed = ({message}) => ({
    message,
    type: STORE_SUPERVISORS_REQUEST_FAILED
});

// Set supervisors succeeded data into store
export const storeSupervisorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_SUPERVISORS_REQUEST_SUCCEEDED
});

// Set supervisors reset data into store
export const storeSupervisorsRequestReset = () => ({
    type: STORE_SUPERVISORS_REQUEST_RESET
});
// ======================================================== Next supervisors
// Set next supervisors init data into store
export const storeNextSupervisorsRequestInit = () => ({
    type: STORE_NEXT_SUPERVISORS_REQUEST_INIT
});

// Set next supervisors failed data into store
export const storeNextSupervisorsRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_SUPERVISORS_REQUEST_FAILED
});

// Set next supervisors succeeded data into store
export const storeNextSupervisorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_SUPERVISORS_REQUEST_SUCCEEDED
});

// Set next supervisors reset data into store
export const storeNextSupervisorsRequestReset = () => ({
    type: STORE_NEXT_SUPERVISORS_REQUEST_RESET
});
// ======================================================== All supervisors
// Set all supervisors init data into store
export const storeAllSupervisorsRequestInit = () => ({
    type: STORE_ALL_SUPERVISORS_REQUEST_INIT
});

// Set all supervisors failed data into store
export const storeAllSupervisorsRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_SUPERVISORS_REQUEST_FAILED
});

// Set all supervisors succeeded data into store
export const storeAllSupervisorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_SUPERVISORS_REQUEST_SUCCEEDED
});

// Set all supervisors reset data into store
export const storeAllSupervisorsRequestReset = () => ({
    type: STORE_ALL_SUPERVISORS_REQUEST_RESET
});
// ======================================================== Add supervisor
// Set add supervisor init data into store
export const storeAddSupervisorRequestInit = () => ({
    type: STORE_ADD_SUPERVISOR_REQUEST_INIT
});

// Set add supervisor failed data into store
export const storeAddSupervisorRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_SUPERVISOR_REQUEST_FAILED
});

// Set add supervisor succeeded data into store
export const storeAddSupervisorRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_SUPERVISOR_REQUEST_SUCCEEDED
});

// Set add supervisor reset data into store
export const storeAddSupervisorRequestReset = () => ({
    type: STORE_ADD_SUPERVISOR_REQUEST_RESET
});
// ======================================================== Supervisor
// Set supervisor init data into store
export const storeSupervisorRequestInit = () => ({
    type: STORE_SUPERVISOR_REQUEST_INIT
});

// Set supervisor failed data into store
export const storeSupervisorRequestFailed = ({message}) => ({
    message,
    type: STORE_SUPERVISOR_REQUEST_FAILED
});

// Set supervisor succeeded data into store
export const storeSupervisorRequestSucceed = ({message}) => ({
    message,
    type: STORE_SUPERVISOR_REQUEST_SUCCEEDED
});

// Set supervisor reset data into store
export const storeSupervisorRequestReset = () => ({
    type: STORE_SUPERVISOR_REQUEST_RESET
});
// ======================================================== Supervisor status toggle
// Set supervisor status toggle init data into store
export const storeSupervisorStatusToggleRequestInit = () => ({
    type: STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_INIT
});

// Set supervisor status toggle failed data into store
export const storeSupervisorStatusToggleRequestFailed = ({message}) => ({
    message,
    type: STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_FAILED
});

// Set supervisor status toggle succeeded data into store
export const storeSupervisorStatusToggleRequestSucceed = ({message}) => ({
    message,
    type: STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_SUCCEEDED
});

// Set supervisor status toggle reset data into store
export const storeSupervisorStatusToggleRequestReset = () => ({
    type: STORE_SUPERVISOR_STATUS_TOGGLE_REQUEST_RESET
});
// ======================================================== Supervisor edit info
// Set supervisor edit info init data into store
export const storeSupervisorEditInfoRequestInit = () => ({
    type: STORE_SUPERVISOR_EDIT_INFO_REQUEST_INIT
});

// Set supervisor edit info failed data into store
export const storeSupervisorEditInfoRequestFailed = ({message}) => ({
    message,
    type: STORE_SUPERVISOR_EDIT_INFO_REQUEST_FAILED
});

// Set supervisor edit info succeeded data into store
export const storeSupervisorEditInfoRequestSucceed = ({message}) => ({
    message,
    type: STORE_SUPERVISOR_EDIT_INFO_REQUEST_SUCCEEDED
});

// Set supervisor edit info reset data into store
export const storeSupervisorEditInfoRequestReset = () => ({
    type: STORE_SUPERVISOR_EDIT_INFO_REQUEST_RESET
});
// ======================================================== Reset supervisor
// Set reset supervisor init data into store
export const storeResetSupervisorRequestInit = () => ({
    type: STORE_RESET_SUPERVISOR_REQUEST_INIT
});

// Set reset supervisor failed data into store
export const storeResetSupervisorRequestFailed = ({message}) => ({
    message,
    type: STORE_RESET_SUPERVISOR_REQUEST_FAILED
});

// Set reset supervisor succeeded data into store
export const storeResetSupervisorRequestSucceed = ({message}) => ({
    message,
    type: STORE_RESET_SUPERVISOR_REQUEST_SUCCEEDED
});

// Set reset supervisor reset data into store
export const storeResetSupervisorRequestReset = () => ({
    type: STORE_RESET_SUPERVISOR_REQUEST_RESET
});
