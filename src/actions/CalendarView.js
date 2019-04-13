import {
  GET_HOLIDAYS,
  NEXT_WEEK,
  LAST_WEEK
} from '../constants/CalendarView_constants';
  
export const getHolidays = payload => {
  return {
    type: GET_HOLIDAYS,
    payload: payload
  }
}

export const showNextWeek = payload => {
  return {
    type: NEXT_WEEK,
    payload: payload
  }
}

export const showLastWeek = payload => {
  return {
    type: LAST_WEEK,
    payload: payload
  }
}