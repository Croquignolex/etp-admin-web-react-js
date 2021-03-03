import { all } from 'redux-saga/effects';

import user from './user/saga';
import sims from './sims/saga';
import zones from './zones/saga';
import agents from './agents/saga';
import settings from './settings/saga';
import managers from './managers/saga';
import operators from './operators/saga';
import companies from './companies/saga';
import simsTypes from './simsTypes/saga';
import collectors from './collectors/saga';
import supervisors from './supervisors/saga';
import notifications from './notifications/saga';
import administrators from './administrators/saga';

// Combine all saga middleware
export default function* sagas() {
    yield all([
        user(),
        sims(),
        zones(),
        agents(),
        managers(),
        settings(),
        companies(),
        simsTypes(),
        operators(),
        collectors(),
        supervisors(),
        notifications(),
        administrators(),
    ]);
}
