import { takeLatest } from 'redux-saga/effects'
import Api from '../services/Api'

import { GET_HOLIDAYS } from '../constants/CalendarView_constants';
import { getAllHolidays } from './CalendarSaga'

const api = Api.create()

function* Saga() {
  yield takeLatest(GET_HOLIDAYS, getAllHolidays, api);
}

export default Saga;