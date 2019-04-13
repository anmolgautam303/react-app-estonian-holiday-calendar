import React, { Component } from 'react';
import moment from 'moment';
import Select from 'react-select';

import './index.css';

const options = [
  { label: 'Tue', value: 0 },
  { label: 'Wed', value: 1 },
  { label: 'Thu', value: 2 },
  { label: 'Fri', value: 3 },
  { label: 'Sat', value: 4 },
  { label: 'Sun', value: 5 },
  { label: 'Mon', value: 6 },
];

class App extends Component {
  state = {
    firstDay: 0,
    currentMonth: '01'
  }

  componentDidMount() {
    this.props.getHolidays(this.state.currentMonth);
  }

  renderWeek() {
    let week = [];
    const { firstDay } = this.state;

    // check if endpoints needs to be called
    if(moment(this.props.selectedDate).endOf('month').diff(moment(this.props.selectedDate), 'days') < 7) {
      const nextMonth = "0" + (parseInt(moment(this.props.selectedDate).format('MM')) + 1);
      if(this.state.currentMonth < nextMonth){
        this.setState({ currentMonth: nextMonth })
        this.props.getHolidays(nextMonth);
      }
    }
    
    // render the whole week
    for(let i = (0 + firstDay); i < (7 + firstDay); i++) {
      let new_date = moment(this.props.selectedDate, 'DD/MM/YYYY').add(i, 'days');

      let holidaysThisMonth = this.props.holidays.filter(holiday => 
        holiday.day === new_date.format('DD/MM/YYYY').substr(0,2) 
        && holiday.month === new_date.format('MM'));

      week.push(
        <div key={i} className="col box">
          <div className="days">
            <h2>{this.props.days[new_date.day()]}</h2>
            <h2>{new_date.format('DD/MM/YYYY')}</h2>
          </div>
      
          <div className="holiday-list">
            {
              holidaysThisMonth.map((holiday) => {
                return <div key={holiday.id}><h3 className={holiday.type === 'folk'? 'folk' : null}>{holiday.name}</h3></div>
              })
            }
          </div>
        </div>
      );
    }

    return week;
  }

  handleChange = (selectedOption) => {
    this.setState({ firstDay: selectedOption.value });
  }

  render() {    
    return (
      <div className="App">
        <header className="App-header">          
          <div className="container-fluid">
            <div className="buttons-container">
              <button
                disabled={moment(this.props.selectedDate).isBefore('2019-01-07')}
                type="button" 
                className="btn btn-primary custom-button" 
                onClick={() => this.props.showLastWeek()}
              >
                {'< Previous week'}
              </button>
              <button 
                type="button" 
                className="btn btn-primary custom-button" 
                onClick={() => this.props.showNextWeek()}
              >
                {'Next week >'}
              </button>
            </div>

            <div className="select-container">
              <Select
                value={options[this.state.firstDay]}
                onChange={this.handleChange}
                options={options}
              />
            </div>

            <div className="calendar-container">
              { this.renderWeek() }
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
