import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {APPROVE} from "../../constants/typeConstants";
import {PROFILE_SCOPE} from "../../constants/defaultConstants";
import {apiGetRequest, apiPostRequest, getImageFromServer} from "../../functions/axiosFunctions";
import {
    EMIT_ADMINISTRATOR_FETCH,
    storeSetAdministratorData,
    EMIT_ADMINISTRATORS_FETCH,
    storeSetAdministratorsData,
    EMIT_ALL_ADMINISTRATORS_FETCH,
    storeSetNextAdministratorsData,
    EMIT_NEXT_ADMINISTRATORS_FETCH,
    storeStopInfiniteScrollAdministratorData, EMIT_NEW_ADMINISTRATOR, storeSetNewAdministratorData
} from "./actions";
import {
    storeAdministratorRequestInit,
    storeAdministratorsRequestInit,
    storeAdministratorRequestFailed,
    storeAdministratorsRequestFailed,
    storeAdministratorRequestSucceed,
    storeAllAdministratorsRequestInit,
    storeAdministratorsRequestSucceed,
    storeNextAdministratorsRequestInit,
    storeAllAdministratorsRequestFailed,
    storeNextAdministratorsRequestFailed,
    storeAllAdministratorsRequestSucceed,
    storeNextAdministratorsRequestSucceed,
    storeAddAdministratorRequestInit,
    storeAddAdministratorRequestSucceed,
    storeAddAdministratorRequestFailed,
} from "../requests/administrators/actions";
import {EMIT_NEW_SUPERVISOR, storeSetNewSupervisorData} from "../supervisors/actions";
import {
    storeAddSupervisorRequestFailed,
    storeAddSupervisorRequestInit,
    storeAddSupervisorRequestSucceed
} from "../requests/supervisors/actions";

// Fetch all administrators from API
export function* emitAllAdministratorsFetch() {
    yield takeLatest(EMIT_ALL_ADMINISTRATORS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllAdministratorsRequestInit());
            const apiResponse = yield call(apiGetRequest, api.ALL_ADMINISTRATORS_API_PATH);
            // Extract data
            const administrators = extractAdministratorsData(apiResponse.data.administrateurs);
            // Fire event to redux
            yield put(storeSetAdministratorsData({administrators, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllAdministratorsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllAdministratorsRequestFailed({message}));
        }
    });
}

// Fetch administrators from API
export function* emitAdministratorsFetch() {
    yield takeLatest(EMIT_ADMINISTRATORS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAdministratorsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ADMINISTRATORS_API_PATH}?page=1`);
            // Extract data
            const administrators = extractAdministratorsData(apiResponse.data.administrateurs);
            // Fire event to redux
            yield put(storeSetAdministratorsData({administrators, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeAdministratorsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAdministratorsRequestFailed({message}));
        }
    });
}

// Fetch next administrators from API
export function* emitNextAdministratorsFetch() {
    yield takeLatest(EMIT_NEXT_ADMINISTRATORS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextAdministratorsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ADMINISTRATORS_API_PATH}?page=${page}`);
            // Extract data
            const administrators = extractAdministratorsData(apiResponse.data.administrateurs);
            // Fire event to redux
            yield put(storeSetNextAdministratorsData({administrators, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextAdministratorsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextAdministratorsRequestFailed({message}));
            yield put(storeStopInfiniteScrollAdministratorData());
        }
    });
}

// New administrator into API
export function* emitNewAdministrator() {
    yield takeLatest(EMIT_NEW_ADMINISTRATOR, function*({name, address, phone, email, password,  description}) {
        try {
            // Fire event for request
            yield put(storeAddAdministratorRequestInit());
            // From data
            const data = {name, phone, email, password, description, adresse: address}
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_ADMINISTRATOR_API_PATH, data);
            // Extract data
            const administrator = extractAdministratorData(
                apiResponse.data.administrateur,
                apiResponse.data.caisse
            );
            // Fire event to redux
            yield put(storeSetNewAdministratorData({administrator}));
            // Fire event for request
            yield put(storeAddAdministratorRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddAdministratorRequestFailed({message}));
        }
    });
}

// Fetch administrator from API
export function* emitAdministratorFetch() {
    yield takeLatest(EMIT_ADMINISTRATOR_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeAdministratorRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ADMINISTRATOR_DETAILS_API_PATH}/${id}`);
            // Extract data
            const administrator = extractAdministratorData(apiResponse.data.user);
            // Fire event to redux
            yield put(storeSetAdministratorData({administrator}));
            // Fire event for request
            yield put(storeAdministratorRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAdministratorRequestFailed({message}));
        }
    });
}

// Extract administrator data
function extractAdministratorData(apiAdministrator, apiAccount) {
    let administrator = {
        id: '', name: '', phone: '', email: '', avatar: '', address: '', creation: '', description: '',

        account: {id: '', balance: ''},
    };

    if(apiAccount) {
        administrator.account = {
            balance: apiAccount.solde,
            id: apiAccount.id.toString(),
        }
    }
    if(apiAdministrator) {
        administrator.actionLoader = false;
        administrator.toggleLoader = false;
        administrator.name = apiAdministrator.name;
        administrator.phone = apiAdministrator.phone;
        administrator.email = apiAdministrator.email;
        administrator.address = apiAdministrator.adresse;
        administrator.id = apiAdministrator.id.toString();
        administrator.creation = apiAdministrator.created_at;
        administrator.description = apiAdministrator.description;
        administrator.status = apiAdministrator.statut === APPROVE;
        administrator.avatar = getImageFromServer(apiAdministrator.avatar, PROFILE_SCOPE);
    }
    return administrator;
}

// Extract administrators data
function extractAdministratorsData(apiAdministrators) {
    const administrators = [];
    if(apiAdministrators) {
        apiAdministrators.forEach(data => {
            administrators.push(extractAdministratorData(data.administrateur));
        });
    }
    return administrators;
}

// Combine to export all functions at once
export default function* sagaAdministrators() {
    yield all([
        fork(emitNewAdministrator),
        fork(emitAdministratorFetch),
        fork(emitAdministratorsFetch),
        fork(emitAllAdministratorsFetch),
        fork(emitNextAdministratorsFetch),
    ]);
}