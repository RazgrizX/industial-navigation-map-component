import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAction } from './actions/loadData';
import NavigationMap from './components/navigationMap';
import LogBox from './components/logBox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.pushAlert = this.pushAlert.bind(this);
  }

  pushAlert(alertText) {
    let now = new Date();
    let alert = {text: alertText, time: now};
    if(this.state.alerts) {
      this.setState({alerts: [...this.state.alerts, alert]});
    }
    this.setState({alerts: alert});
  }

  componentDidMount() {
    console.log("tick");
    this.interval = setInterval(() => this.props.loadAction(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div className="container">
            <NavigationMap pushAlert={this.pushAlert}/>
            <div className="sidebar">
              <div class="timebox">
                <p>{this.props.navigationData.coordinates && this.props.navigationData.coordinates.date}</p>
              </div>
              <LogBox/>
            </div>
          </div>
        </header>
      </div>
      );
  }
}

const mapStateToProps = state => ({
  navigationData: state.navigationData
})

const mapDispatchToProps = dispatch => ({
 loadAction: () => dispatch(loadAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
