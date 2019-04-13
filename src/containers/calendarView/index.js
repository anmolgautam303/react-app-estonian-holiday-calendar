import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getHolidays,
  showNextWeek,
  showLastWeek,
} from '../../actions/CalendarView';
import CalendarViewComponent from '../../components/calendarView';

class App extends Component {
render() {
  return (
    <CalendarViewComponent
      holidays={this.props.holidays}
      selectedDate={this.props.selectedDate}
      days={this.props.days}
      getHolidays={this.props.getHolidays}
      showNextWeek={this.props.showNextWeek}
      showLastWeek={this.props.showLastWeek}
    />
  );
  }
}

const mapStateToProps = state => {
  return {
    holidays: state.calendarViewReducer.holidays,
    selectedDate: state.calendarViewReducer.selectedDate,
    days: state.calendarViewReducer.days,
    firstDay: state.calendarViewReducer.firstDay,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHolidays: (month) => { dispatch(getHolidays(month)) },
    showNextWeek: () => { dispatch(showNextWeek()) },
    showLastWeek: () => { dispatch(showLastWeek()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)