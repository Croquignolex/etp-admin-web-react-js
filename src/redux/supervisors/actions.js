// Reducer action types
export const STORE_SET_SUPERVISOR_DATA = 'STORE_SET_SUPERVISOR_DATA';
export const STORE_SET_SUPERVISORS_DATA = 'STORE_SET_SUPERVISORS_DATA';
export const STORE_SET_NEW_SUPERVISOR_DATA = 'STORE_SET_NEW_SUPERVISOR_DATA';
export const STORE_SET_NEXT_SUPERVISORS_DATA = 'STORE_SET_NEXT_SUPERVISORS_DATA';
export const STORE_SET_SUPERVISOR_ACTION_DATA = 'STORE_SET_SUPERVISOR_ACTION_DATA';
export const STORE_SET_SUPERVISOR_TOGGLE_DATA = 'STORE_SET_SUPERVISOR_TOGGLE_DATA';
export const STORE_STOP_INFINITE_SCROLL_SUPERVISORS_DATA = 'STORE_STOP_INFINITE_SCROLL_SUPERVISORS_DATA';

// Middleware action types
export const EMIT_NEW_SUPERVISOR = 'EMIT_NEW_SUPERVISOR';
export const EMIT_SUPERVISOR_FETCH = 'EMIT_SUPERVISOR_FETCH';
export const EMIT_SUPERVISORS_FETCH = 'EMIT_SUPERVISORS_FETCH'; 
export const EMIT_ALL_SUPERVISORS_FETCH = 'EMIT_ALL_SUPERVISORS_FETCH';
export const EMIT_NEXT_SUPERVISORS_FETCH = 'EMIT_NEXT_SUPERVISORS_FETCH';
export const EMIT_UPDATE_SUPERVISOR_INFO = 'EMIT_UPDATE_SUPERVISOR_INFO';
export const EMIT_TOGGLE_SUPERVISOR_STATUS = 'EMIT_TOGGLE_SUPERVISOR_STATUS';

//====================== Reducer trigger actions
// Set supervisors data in store
export const storeSetSupervisorsData = ({supervisors, hasMoreData, page}) => ({
    page,
    supervisors,
    hasMoreData,
    type: STORE_SET_SUPERVISORS_DATA
});

// Set new supervisor data in store
export const storeSetNewSupervisorData = ({supervisor}) => ({
    supervisor,
    type: STORE_SET_NEW_SUPERVISOR_DATA
});

// Set supervisor data in store
export const storeSetSupervisorData = ({supervisor, alsoInList = false}) => ({
    supervisor,
    alsoInList,
    type: STORE_SET_SUPERVISOR_DATA
});

// Set next supervisors data in store
export const storeSetNextSupervisorsData = ({supervisors, hasMoreData, page}) => ({
    page,
    supervisors,
    hasMoreData,
    type: STORE_SET_NEXT_SUPERVISORS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollSupervisorData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_SUPERVISORS_DATA
});

// Set supervisor action data in store
export const storeSetSupervisorActionData = ({id}) => ({
    id,
    type: STORE_SET_SUPERVISOR_ACTION_DATA
});

// Set supervisor toggle data in store
export const storeSetSupervisorToggleData = ({id}) => ({
    id,
    type: STORE_SET_SUPERVISOR_TOGGLE_DATA
});

//====================== Middleware trigger actions
// Emit supervisors fetch
export const emitSupervisorsFetch = () => ({
    type: EMIT_SUPERVISORS_FETCH
});

// Emit next supervisors fetch
export const emitNextSupervisorsFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_SUPERVISORS_FETCH
});

// Emit all supervisors fetch
export const emitAllSupervisorsFetch = () => ({
    type: EMIT_ALL_SUPERVISORS_FETCH
});

// Emit supervisor fetch
export const emitSupervisorFetch = ({id}) => ({
    id,
    type: EMIT_SUPERVISOR_FETCH
});

// Emit toggle supervisor status
export const emitToggleSupervisorStatus = ({id}) => ({
    id,
    type: EMIT_TOGGLE_SUPERVISOR_STATUS
});
 
// Emit new supervisor fetch
export const emitNewSupervisor = ({name, address, phone, email, password,  description}) => ({
    name,
    phone,
    email,
    address,
    password,
    description,
    type: EMIT_NEW_SUPERVISOR
});

// Emit update supervisor info
export const emitUpdateSupervisorInfo = ({id, email, name, address, description}) => ({
    id,
    name,
    email,
    address,
    description,
    type: EMIT_UPDATE_SUPERVISOR_INFO
});
