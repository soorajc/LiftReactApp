import React, { Component } from 'react';
import './App.css';


class ErrorCard extends Component {
  render() {
    return (
      <div id="menu1" className="tab-pane fade">
        <p className="alert alert-danger"><span className="glyphicon glyphicon-warning-sign"></span> Unable to generate report. Please fill the form properly</p>
      </div>
    );
  }
}

export default ErrorCard;
