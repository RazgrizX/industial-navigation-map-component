import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return(
      <div className="logBox">
      {this.props.logs&&this.props.logs.alerts&&this.props.logs.alerts.length>0 && this.props.logs.alerts.map((alert)=>{
        console.log(alert.text);
        return (<p>{alert.time.toISOString() + " - " + alert.text}</p>)
      })}
      </div>)
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(LogBox);