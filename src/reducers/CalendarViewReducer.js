import { SET_HOLIDAYS, NEXT_WEEK, LAST_WEEK } from '../constants/CalendarView_constants';
import moment from 'moment';

const initialState = {
  holidays: [],
  selectedDate: moment('01/01/2019'),
  days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

const CalendarViewReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_HOLIDAYS:
      return {
        ...state,
        holidays: state.holidays.concat(action.payload)
      };
    case NEXT_WEEK:
      return {
        ...state,
        selectedDate: moment(state.selectedDate, 'DD/MM/YYYY').add(7, 'days')
      };
    case LAST_WEEK:
      return {
        ...state,
        selectedDate: moment(state.selectedDate, 'DD/MM/YYYY').subtract(7, 'days')
      };
    default:
      return state;
  }
}

export default CalendarViewReducer;