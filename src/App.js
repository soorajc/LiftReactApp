import React, { Component } from 'react';
import logo from './logo.svg';
import CircularProgressbar from 'react-circular-progressbar';
import './App.css';
import ReportCard from './Report.js';
import ErrorCard from './Error.js';

const datePattern = new RegExp(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g);
var testStartDate, testEndDate;

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
         name: '',
         value:'',
         startDate:'',
         endDate:'',
         errorText:'Fill the form and click on see report to get report',
         errorFlag: true
      }
   };

  handleChange = (field, e) => {
    if(field==="name"){
      var name = e.target.value;
      if(name.length!==0){
        this.setState({name: e.target.value, errorText:'Name looks fine no errors', errorFlag:false});
      }else{
        this.setState({name: e.target.value, errorText:"Error: Please enter your name", errorFlag:true});
      }
    }else if(field==="value"){
      var value = e.target.value;
      var numFlag = isNaN(value);
      if((value<=0) || (value>100 || numFlag)){
        this.setState({value: '', errorText: "Error: Please enter a value in range 1 to 100", errorFlag:true});
      }else{
        this.setState({value: e.target.value, errorText: "Value looks fine no errors", errorFlag:false});
      }
    }else if(field==="startDate"){
      var startDate = e.target.value;
      testStartDate = datePattern.test(startDate);
      if(testStartDate===true){
        this.setState({startDate: e.target.value, errorText:'Start Date looks fine no errors', errorFlag:false});
      }else{
        this.setState({startDate: e.target.value, errorText: "Error: Please enter the date in correct format", errorFlag:true});
      }
    }else if(field==="endDate"){
      var endDate = e.target.value;
      testEndDate = datePattern.test(endDate);
      if(testEndDate===true){
        this.setState({endDate: e.target.value, errorText:'End Date looks fine no errors', errorFlag:false});
      }else{
        this.setState({endDate: e.target.value, errorText: "Error: Please enter the date in correct format", errorFlag:true});
      }
    }
  }

  validateForm = () => {
    if(this.state.name.length===0){
        this.setState({errorText: "Error: Please enter the Name", errorFlag:true});
    }else if(this.state.value.length===0){
        this.setState({errorText: "Error: Please enter the Value", errorFlag:true});
    }else if(this.state.startDate.length===0){
        this.setState({errorText: "Error: Please enter the StartDate", errorFlag:true});
    }else if(this.state.endDate.length===0){
        this.setState({errorText: "Error: Please enter the EndDate", errorFlag:true});
    }
    this.dateValidator();
  }

  dateValidator = () => {
    if(testStartDate === false ){
      this.setState({errorText: "Error: Please fill the form in proper format", errorFlag:true});
    }else if(testEndDate === false){
      this.setState({errorText: "Error: Please fill the form in proper format", errorFlag:true});
    }
  }


  render() {
    return (
      <div className="container-fluid Form-container">
  	   <div className="row">
  		   <div className="col-md-4 col-md-offset-4">
         <ul className="nav nav-tabs">
            <li className="active"><a className="Tab-text" data-toggle="tab" href="#details">Enter Details</a></li>
            <li onClick={this.validateForm.bind(this)}><a className="Tab-text" data-toggle="tab" href="#menu1">See Report</a></li>
          </ul>
            <div className="tab-content">
    			    <form className="form-horizontal tab-pane fade in active Form-container" role="form" id="details">
    				      <div className="form-group">
          					<div className="col-sm-12">
          						<input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')}/>
          					</div>
    				      </div>
                  <div className="form-group">
          					<div className="col-sm-12">
          						<input type="text" className="form-control" placeholder="Enter a value in range 1 to 100" value={this.state.value} onChange={this.handleChange.bind(this, 'value')}/>
          					</div>
    				      </div>
                  <div className="form-group">
          					<div className="col-sm-12">
          						<input type="text" className="form-control" placeholder="Start Date dd/mm/yyyy format" value={this.state.startDate} onChange={this.handleChange.bind(this, 'startDate')}/>
          					</div>
    				      </div>
                  <div className="form-group">
          					<div className="col-sm-12">
          						<input type="text" className="form-control" placeholder="End Date dd/mm/yyyy format" value={this.state.endDate} onChange={this.handleChange.bind(this, 'endDate')}/>
          					</div>
    				      </div>
                  <p className={this.state.errorFlag?"alert alert-danger":"alert alert-success"}>{this.state.errorText}</p>
               </form>
               {
                 this.state.errorFlag ?
                 <ErrorCard/>
                 :
                 <ReportCard value={this.state.value} name={this.state.name} endDate={this.state.endDate} startDate={this.state.startDate}/>
               }
             </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
