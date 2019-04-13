import { call, put } from 'redux-saga/effects';
import { SET_HOLIDAYS } from '../constants/CalendarView_constants';

export function* getAllHolidays(api, action) {
    try {
        const response = yield call(api.getAllHolidays, action.payload)
        if(response.ok) {
          yield put({ type: SET_HOLIDAYS, payload: response.data });
        } else {
            console.log('error happened');
        }
    } catch (error) {
        console.log('error happened', error);
    }
}