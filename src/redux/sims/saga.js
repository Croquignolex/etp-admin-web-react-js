import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiGetRequest, apiPostRequest} from "../../functions/axiosFunctions";
import {
    EMIT_NEW_SIM,
    EMIT_SIM_FETCH,
    storeSetSimData,
    EMIT_SIMS_FETCH,
    EMIT_UPDATE_SIM,
    storeSetSimsData,
    storeSetNewSimData,
    EMIT_ALL_SIMS_FETCH,
    EMIT_NEXT_SIMS_FETCH,
    storeSetNextSimsData,
    EMIT_AGENTS_SIMS_FETCH,
    EMIT_FLEETS_SIMS_FETCH,
    EMIT_SEARCH_SIMS_FETCH,
    EMIT_MASTERS_SIMS_FETCH,
    EMIT_RESOURCES_SIMS_FETCH,
    EMIT_COLLECTORS_SIMS_FETCH,
    EMIT_NEXT_AGENTS_SIMS_FETCH,
    EMIT_NEXT_FLEETS_SIMS_FETCH,
    EMIT_NEXT_MASTERS_SIMS_FETCH,
    storeStopInfiniteScrollSimData,
    EMIT_NEXT_RESOURCES_SIMS_FETCH,
    EMIT_NEXT_COLLECTORS_SIMS_FETCH
} from "./actions";
import {
    storeSimsRequestInit,
    storeSimsRequestFailed,
    storeAddSimRequestInit,
    storeShowSimRequestInit,
    storeSimsRequestSucceed,
    storeAllSimsRequestInit,
    storeEditSimRequestInit,
    storeNextSimsRequestInit,
    storeAddSimRequestFailed,
    storeShowSimRequestFailed,
    storeAllSimsRequestFailed,
    storeAddSimRequestSucceed,
    storeEditSimRequestFailed,
    storeShowSimRequestSucceed,
    storeNextSimsRequestFailed,
    storeAllSimsRequestSucceed,
    storeEditSimRequestSucceed,
    storeNextSimsRequestSucceed
} from "../requests/sims/actions";

// Fetch all sims from API
export function* emitAllSimsFetch() {
    yield takeLatest(EMIT_ALL_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, api.All_SIMS_API_PATH);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllSimsRequestFailed({message}));
        }
    });
}

// Fetch sims from API
export function* emitSimsFetch() {
    yield takeLatest(EMIT_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Fetch next sims from API
export function* emitNextSimsFetch() {
    yield takeLatest(EMIT_NEXT_SIMS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.SIMS_API_PATH}?page=${page}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetNextSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextSimsRequestFailed({message}));
            yield put(storeStopInfiniteScrollSimData());
        }
    });
}

// Fetch sim from API
export function* emitSimFetch() {
    yield takeLatest(EMIT_SIM_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeShowSimRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.SIM_API_PATH}/${id}`);
            // Extract data
            const sim = extractSimData(
                apiResponse.data.puce,
                apiResponse.data.type,
                apiResponse.data.user,
                apiResponse.data.agent,
                apiResponse.data.corporate,
                apiResponse.data.flote,
                apiResponse.data.recouvreur,
                apiResponse.data.agency,
            );
            // Fire event to redux
            yield put(storeSetSimData({sim}));
            // Fire event for request
            yield put(storeShowSimRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeShowSimRequestFailed({message}));
        }
    });
}

// New sim into API
export function* emitNewSim() {
    yield takeLatest(EMIT_NEW_SIM, function*({name, number, operator, agent, collector, agency,
                                                 reference, description, simType, company}) {
        try {
            // Fire event for request
            yield put(storeAddSimRequestInit());
            // From data
            const data = {
                reference,
                nom: name,
                description,
                type: simType,
                numero: number,
                id_agent: agent,
                id_agency: agency,
                id_flotte: operator,
                id_corporate: company,
                id_recouvreur: collector,
            }
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_SIM_API_PATH, data);
            // Extract data
            const sim = extractSimData(
                apiResponse.data.puce,
                apiResponse.data.type,
                apiResponse.data.user,
                apiResponse.data.agent,
                apiResponse.data.corporate,
                apiResponse.data.flote,
                apiResponse.data.recouvreur,
                apiResponse.data.agency,
            );
            // Fire event to redux
            yield put(storeSetNewSimData({sim}));
            // Fire event for request
            yield put(storeAddSimRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddSimRequestFailed({message}));
        }
    });
}

// Update sim info
export function* emitUpdateSim() {
    yield takeLatest(EMIT_UPDATE_SIM, function*({id, name, description}) {
        try {
            // Fire event for request
            yield put(storeEditSimRequestInit());
            const data = {nom: name, description};
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_SIM_API_PATH}/${id}`, data);
            // Extract data
            const sim = extractSimData(
                apiResponse.data.puce,
                apiResponse.data.type,
                apiResponse.data.user,
                apiResponse.data.agent,
                apiResponse.data.corporate,
                apiResponse.data.flote,
                apiResponse.data.recouvreur,
                apiResponse.data.agency,
            );
            // Fire event to redux
            yield put(storeSetSimData({sim, alsoInList: true}));
            // Fire event for request
            yield put(storeEditSimRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeEditSimRequestFailed({message}));
        }
    });
}

// Fetch fleets sims from API
export function* emitFleetsSimsFetch() {
    yield takeLatest(EMIT_FLEETS_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.FLEETS_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Fetch next fleets sims from API
export function* emitNextFleetsSimsFetch() {
    yield takeLatest(EMIT_NEXT_FLEETS_SIMS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.FLEETS_SIMS_API_PATH}?page=${page}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetNextSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextSimsRequestFailed({message}));
            yield put(storeStopInfiniteScrollSimData());
        }
    });
}

// Fetch collectors sims from API
export function* emitCollectorsSimsFetch() {
    yield takeLatest(EMIT_COLLECTORS_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.COLLECTORS_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Fetch next collectors sims from API
export function* emitNextCollectorsSimsFetch() {
    yield takeLatest(EMIT_NEXT_COLLECTORS_SIMS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.COLLECTORS_SIMS_API_PATH}?page=${page}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetNextSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextSimsRequestFailed({message}));
            yield put(storeStopInfiniteScrollSimData());
        }
    });
}

// Fetch agents sims from API
export function* emitAgentsSimsFetch() {
    yield takeLatest(EMIT_AGENTS_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.AGENTS_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Fetch next agents sims from API
export function* emitNextAgentsSimsFetch() {
    yield takeLatest(EMIT_NEXT_AGENTS_SIMS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.AGENTS_SIMS_API_PATH}?page=${page}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetNextSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextSimsRequestFailed({message}));
            yield put(storeStopInfiniteScrollSimData());
        }
    });
}

// Fetch resources sims from API
export function* emitResourcesSimsFetch() {
    yield takeLatest(EMIT_RESOURCES_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.RESOURCES_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Fetch next resources sims from API
export function* emitNextResourcesSimsFetch() {
    yield takeLatest(EMIT_NEXT_RESOURCES_SIMS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.RESOURCES_SIMS_API_PATH}?page=${page}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetNextSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextSimsRequestFailed({message}));
            yield put(storeStopInfiniteScrollSimData());
        }
    });
}

// Fetch masters sims from API
export function* emitMastersSimsFetch() {
    yield takeLatest(EMIT_MASTERS_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.MASTERS_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Fetch next masters sims from API
export function* emitNextMastersSimsFetch() {
    yield takeLatest(EMIT_NEXT_MASTERS_SIMS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.MASTERS_SIMS_API_PATH}?page=${page}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetNextSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextSimsRequestFailed({message}));
            yield put(storeStopInfiniteScrollSimData());
        }
    });
}

// Fetch search sims from API
export function* emitSearchSimsFetch() {
    yield takeLatest(EMIT_SEARCH_SIMS_FETCH, function*({needle}) {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.SEARCH_SIMS_API_PATH}?needle=${needle}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Extract sim data
function extractSimData(apiSim, apiType, apiUser, apiAgent, apiCompany, apiOperator, apiCollector, apiAgency) {
    let sim = {
        id: '', name: '', reference: '', number: '', balance: '', description: '', creation: '',

        type: {id: '', name: ''},
        agent: {id: '', name: ''},
        agency: {id: '', name: ''},
        company: {id: '', name: ''},
        operator: {id: '', name: ''},
        collector: {id: '', name: ''},

        transactions: []
    };
    if(apiAgent && apiUser) {
        sim.agent = {
            name: apiUser.name,
            id: apiUser.id.toString()
        };
    }
    if(apiCollector) {
        sim.collector = {
            name: apiCollector.name,
            id: apiCollector.id.toString(),
        };
    }
    if(apiCompany) {
        sim.company = {
            name: apiCompany.nom,
            id: apiCompany.id.toString()
        };
    }
    if(apiOperator) {
        sim.operator = {
            name: apiOperator.nom,
            id: apiOperator.id.toString()
        };
    }
    if(apiType) {
        sim.type = {
            name: apiType.name,
            id: apiType.id.toString()
        };
    }
    if(apiAgency) {
        sim.agency = {
            name: apiAgency.name,
            id: apiAgency.id.toString()
        };
    }
    if(apiSim) {
        sim.name = apiSim.nom;
        sim.actionLoader = false;
        sim.number = apiSim.numero;
        sim.balance = apiSim.solde;
        sim.id = apiSim.id.toString();
        sim.creation = apiSim.created_at;
        sim.reference = apiSim.reference;
        sim.description = apiSim.description;
    }
    return sim;
}

// Extract sims data
function extractSimsData(apiSims) {
    const sims = [];
    apiSims.forEach(data => {
        sims.push(extractSimData(
            data.puce,
            data.type,
            data.user,
            data.agent,
            data.corporate,
            data.flote,
            data.recouvreur,
            data.agency
        ))
    });
    return sims;
}

// Combine to export all functions at once
export default function* sagaSims() {
    yield all([
        fork(emitNewSim),
        fork(emitSimFetch),
        fork(emitUpdateSim),
        fork(emitSimsFetch),
        fork(emitAllSimsFetch),
        fork(emitNextSimsFetch),
        fork(emitFleetsSimsFetch),
        fork(emitSearchSimsFetch),
        fork(emitAgentsSimsFetch),
        fork(emitMastersSimsFetch),
        fork(emitResourcesSimsFetch),
        fork(emitNextFleetsSimsFetch),
        fork(emitCollectorsSimsFetch),
        fork(emitNextAgentsSimsFetch),
        fork(emitNextMastersSimsFetch),
        fork(emitNextResourcesSimsFetch),
        fork(emitNextCollectorsSimsFetch),
    ]);
}
