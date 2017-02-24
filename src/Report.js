import React, { Component } from 'react';
import logo from './logo.svg';
import CircularProgressbar from 'react-circular-progressbar';
import './App.css';


class ReportCard extends Component {
  render() {
    return (
             <div id="menu1" className="tab-pane fade">
                <div className="panel panel-primary">
                  <div className="panel-heading">Report Generator</div>
                    <div className="panel-body Panel-container">
                      <div>
                          <p className="Report-text"><span className="glyphicon glyphicon-user User-icon"></span>Name:  {this.props.name}</p>
                          <p className="Report-text"><span className="glyphicon glyphicon-calendar User-icon"></span>StartDate: {this.props.startDate}</p>
                          <p className="Report-text"><span className="glyphicon glyphicon-calendar User-icon"></span>EndDate: {this.props.endDate}</p>
                          <div className="col-md-4 col-md-offset-4 Graph-container">
                            <CircularProgressbar percentage={this.props.value}/>
                          </div>
                      </div>
                   </div>
                 </div>
              </div>
    );
  }
}

export default ReportCard;
