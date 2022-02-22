import React from 'react';

//Importing FullCalendar Module
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

//Importing axios service
import axios from 'axios';

class Calender extends React.Component {
  //initialize array variable
  constructor() {

    //super is used to access the variables
    super();
    this.state = {
       data: []
    }
 }
 componentDidMount() {

 //API request
 axios.get("http://localhost/therichpost/public/api/sample-restful-apis").then(response => {
  
  //getting and setting api data into variable
  this.setState({ data : response.data });
 
})
}
  
//Final output
render() {
  return (
    <div className="App">
      
      
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events = {[this.state.data]}
        />
    </div>
  );
  
}

}
export default Calender;