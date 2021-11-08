// Reducer action types
export const STORE_SET_ADMINISTRATOR_DATA = 'STORE_SET_ADMINISTRATOR_DATA';
export const STORE_SET_ADMINISTRATORS_DATA = 'STORE_SET_ADMINISTRATORS_DATA';
export const STORE_SET_NEW_ADMINISTRATOR_DATA = 'STORE_SET_NEW_ADMINISTRATOR_DATA';
export const STORE_SET_NEXT_ADMINISTRATORS_DATA = 'STORE_SET_NEXT_ADMINISTRATORS_DATA';
export const STORE_SET_ADMINISTRATOR_ACTION_DATA = 'STORE_SET_ADMINISTRATOR_ACTION_DATA';
export const STORE_STOP_INFINITE_SCROLL_ADMINISTRATORS_DATA = 'STORE_STOP_INFINITE_SCROLL_ADMINISTRATORS_DATA';

// Middleware action types
export const EMIT_NEW_ADMINISTRATOR = 'EMIT_NEW_ADMINISTRATOR';
export const EMIT_ADMINISTRATOR_FETCH = 'EMIT_ADMINISTRATOR_FETCH';
export const EMIT_RESET_ADMINISTRATOR = 'EMIT_RESET_ADMINISTRATOR';
export const EMIT_ADMINISTRATORS_FETCH = 'EMIT_ADMINISTRATORS_FETCH';
export const EMIT_ALL_ADMINISTRATORS_FETCH = 'EMIT_ALL_ADMINISTRATORS_FETCH';
export const EMIT_NEXT_ADMINISTRATORS_FETCH = 'EMIT_NEXT_ADMINISTRATORS_FETCH';

//====================== Reducer trigger actions
// Set administrators data in store
export const storeSetAdministratorsData = ({administrators, hasMoreData, page}) => ({
    page,
    administrators,
    hasMoreData,
    type: STORE_SET_ADMINISTRATORS_DATA
});

// Set new administrator data in store
export const storeSetNewAdministratorData = ({administrator}) => ({
    administrator,
    type: STORE_SET_NEW_ADMINISTRATOR_DATA
});

// Set administrator data in store
export const storeSetAdministratorData = ({administrator, alsoInList = false}) => ({
    administrator,
    alsoInList,
    type: STORE_SET_ADMINISTRATOR_DATA
});

// Set next administrators data in store
export const storeSetNextAdministratorsData = ({administrators, hasMoreData, page}) => ({
    page,
    administrators,
    hasMoreData,
    type: STORE_SET_NEXT_ADMINISTRATORS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollAdministratorData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_ADMINISTRATORS_DATA
});

// Set administrator action data in store
export const storeSetAdministratorActionData = ({id}) => ({
    id,
    type: STORE_SET_ADMINISTRATOR_ACTION_DATA
});

//====================== Middleware trigger actions
// Emit administrators fetch
export const emitAdministratorsFetch = () => ({
    type: EMIT_ADMINISTRATORS_FETCH
});

// Emit next administrators fetch
export const emitNextAdministratorsFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_ADMINISTRATORS_FETCH
});

// Emit all administrators fetch
export const emitAllAdministratorsFetch = () => ({
    type: EMIT_ALL_ADMINISTRATORS_FETCH
});

// Emit administrator fetch
export const emitAdministratorFetch = ({id}) => ({
    id,
    type: EMIT_ADMINISTRATOR_FETCH
});

// Emit new administrator fetch
export const emitNewAdministrator = ({name, address, phone, email, password,  description}) => ({
    name,
    phone,
    email,
    address,
    password,
    description,
    type: EMIT_NEW_ADMINISTRATOR
});

// Emit reset administrator
export const emitResetAdministrator = ({id}) => ({
    id,
    type: EMIT_RESET_ADMINISTRATOR
});
