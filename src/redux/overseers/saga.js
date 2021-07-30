import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {APPROVE} from "../../constants/typeConstants";
import {PROFILE_SCOPE} from "../../constants/defaultConstants";
import {apiGetRequest, apiPostRequest, getImageFromServer} from "../../functions/axiosFunctions";
import {
    EMIT_NEW_OVERSEER,
    EMIT_OVERSEER_FETCH,
    storeSetOverseerData,
    EMIT_OVERSEERS_FETCH,
    storeSetOverseersData,
    storeSetNewOverseerData,
    EMIT_ALL_OVERSEERS_FETCH,
    EMIT_NEXT_OVERSEERS_FETCH,
    storeSetNextOverseersData,
    EMIT_UPDATE_OVERSEER_INFO,
    storeSetOverseerActionData,
    storeSetOverseerToggleData,
    EMIT_TOGGLE_OVERSEER_STATUS,
    storeStopInfiniteScrollOverseerData
} from "./actions";
import {
    storeOverseerRequestInit,
    storeOverseersRequestInit,
    storeOverseerRequestFailed,
    storeAddOverseerRequestInit,
    storeOverseersRequestFailed,
    storeOverseerRequestSucceed,
    storeOverseersRequestSucceed,
    storeAllOverseersRequestInit,
    storeNextOverseersRequestInit,
    storeAddOverseerRequestFailed,
    storeAllOverseersRequestFailed,
    storeAddOverseerRequestSucceed,
    storeAllOverseersRequestSucceed,
    storeNextOverseersRequestFailed,
    storeOverseerEditInfoRequestInit,
    storeNextOverseersRequestSucceed,
    storeOverseerEditInfoRequestFailed,
    storeOverseerEditInfoRequestSucceed,
    storeOverseerStatusToggleRequestInit,
    storeOverseerStatusToggleRequestFailed,
    storeOverseerStatusToggleRequestSucceed,
} from "../requests/overseers/actions";

// Fetch all overseers from API
export function* emitAllOverseersFetch() {
    yield takeLatest(EMIT_ALL_OVERSEERS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllOverseersRequestInit());
            const apiResponse = yield call(apiGetRequest, api.ALL_OVERSEERS_API_PATH);
            // Extract data
            const overseers = extractOverseersData(apiResponse.data.comptables);
            // Fire event to redux
            yield put(storeSetOverseersData({overseers, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllOverseersRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllOverseersRequestFailed({message}));
        }
    });
}

// Fetch overseers from API
export function* emitOverseersFetch() {
    yield takeLatest(EMIT_OVERSEERS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeOverseersRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.OVERSEERS_API_PATH}?page=1`);
            // Extract data
            const overseers = extractOverseersData(apiResponse.data.comptables);
            // Fire event to redux
            yield put(storeSetOverseersData({overseers, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeOverseersRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeOverseersRequestFailed({message}));
        }
    });
}

// Fetch next overseers from API
export function* emitNextOverseersFetch() {
    yield takeLatest(EMIT_NEXT_OVERSEERS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextOverseersRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.OVERSEERS_API_PATH}?page=${page}`);
            // Extract data
            const overseers = extractOverseersData(apiResponse.data.comptables);
            // Fire event to redux
            yield put(storeSetNextOverseersData({overseers, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextOverseersRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextOverseersRequestFailed({message}));
            yield put(storeStopInfiniteScrollOverseerData());
        }
    });
}

// Toggle overseer status into API
export function* emitToggleOverseerStatus() {
    yield takeLatest(EMIT_TOGGLE_OVERSEER_STATUS, function*({id}) {
        try {
            // Fire event for request
            yield put(storeSetOverseerActionData({id}));
            yield put(storeOverseerStatusToggleRequestInit());
            const apiResponse = yield call(apiPostRequest, `${api.TOGGLE_OVERSEER_STATUS_API_PATH}/${id}`);
            // Fire event to redux
            yield put(storeSetOverseerToggleData({id}));
            // Fire event for request
            yield put(storeOverseerStatusToggleRequestSucceed({message: apiResponse.message}));
            yield put(storeSetOverseerActionData({id}));
        } catch (message) {
            // Fire event for request
            yield put(storeSetOverseerActionData({id}));
            yield put(storeOverseerStatusToggleRequestFailed({message}));
        }
    });
}

// New overseer into API
export function* emitNewOverseer() {
    yield takeLatest(EMIT_NEW_OVERSEER, function*({name, address, phone, email, password,  description}) {
        try {
            // Fire event for request
            yield put(storeAddOverseerRequestInit());
            // From data
            const data = {name, phone, email, password, description, adresse: address}
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_OVERSEER_API_PATH, data);
            // Extract data
            const overseer = extractOverseerData(
                apiResponse.data.gestionnaire,
                apiResponse.data.createur,
            );
            // Fire event to redux
            yield put(storeSetNewOverseerData({overseer}));
            // Fire event for request
            yield put(storeAddOverseerRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddOverseerRequestFailed({message}));
        }
    });
}

// Fetch overseer from API
export function* emitOverseerFetch() {
    yield takeLatest(EMIT_OVERSEER_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeOverseerRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.OVERSEER_DETAILS_API_PATH}/${id}`);
            // Extract data
            const overseer = extractOverseerData(
                apiResponse.data.user,
                apiResponse.data.createur,
            );
            // Fire event to redux
            yield put(storeSetOverseerData({overseer}));
            // Fire event for request
            yield put(storeOverseerRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeOverseerRequestFailed({message}));
        }
    });
}

// Update overseer info
export function* emitUpdateOverseerInfo() {
    yield takeLatest(EMIT_UPDATE_OVERSEER_INFO, function*({id, email, name, address, description}) {
        try {
            // Fire event for request
            yield put(storeOverseerEditInfoRequestInit());
            const data = {email, name, adresse: address, description};
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_OVERSEER_API_PATH}/${id}`, data);
            // Extract data
            const overseer = extractOverseerData(
                apiResponse.data.user,
                apiResponse.data.createur,
            );
            // Fire event to redux
            yield put(storeSetOverseerData({overseer, alsoInList: true}));
            // Fire event for request
            yield put(storeOverseerEditInfoRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeOverseerEditInfoRequestFailed({message}));
        }
    });
}

// Extract overseer data
function extractOverseerData(apiOverseer, apiCreator) {
    let overseer = {
        id: '', name: '', phone: '', email: '', avatar: '', address: '', creation: '', description: '',

        creator: {id: '', name: ''},
    };

    if(apiCreator) {
        overseer.creator = {
            name: apiCreator.name,
            id: apiCreator.id.toString(),
        }
    }
    if(apiOverseer) {
        overseer.actionLoader = false;
        overseer.toggleLoader = false;
        overseer.name = apiOverseer.name;
        overseer.phone = apiOverseer.phone;
        overseer.email = apiOverseer.email;
        overseer.address = apiOverseer.adresse;
        overseer.id = apiOverseer.id.toString();
        overseer.creation = apiOverseer.created_at;
        overseer.description = apiOverseer.description;
        overseer.status = apiOverseer.statut === APPROVE;
        overseer.avatar = getImageFromServer(apiOverseer.avatar, PROFILE_SCOPE);
    }
    return overseer;
}

// Extract overseers data
function extractOverseersData(apiOverseers) {
    const overseers = [];
    if(apiOverseers) {
        apiOverseers.forEach(data => {
            overseers.push(extractOverseerData(
                data.comptable,
                data.createur,
            ));
        });
    }
    return overseers;
}

// Combine to export all functions at once
export default function* sagaOverseers() {
    yield all([
        fork(emitNewOverseer),
        fork(emitOverseerFetch),
        fork(emitOverseersFetch),
        fork(emitAllOverseersFetch),
        fork(emitUpdateOverseerInfo),
        fork(emitNextOverseersFetch),
        fork(emitToggleOverseerStatus),
    ]);
}