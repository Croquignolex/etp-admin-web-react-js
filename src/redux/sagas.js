import { all } from 'redux-saga/effects';

import user from './user/saga';
import sims from './sims/saga';
import zones from './zones/saga';
import agents from './agents/saga';
import vendors from './vendors/saga';
import settings from './settings/saga';
import managers from './managers/saga';
import operators from './operators/saga';
import companies from './companies/saga';
import simsTypes from './simsTypes/saga';
import overseers from './overseers/saga';
import collectors from './collectors/saga';
import accountants from './accountants/saga';
import supervisors from './supervisors/saga';
import administrators from './administrators/saga';

// Combine all saga middleware
export default function* sagas() {
    yield all([
        user(),
        sims(),
        zones(),
        agents(),
        vendors(),
        managers(),
        settings(),
        companies(),
        simsTypes(),
        overseers(),
        operators(),
        collectors(),
        accountants(),
        supervisors(),
        administrators(),
    ]);
}
