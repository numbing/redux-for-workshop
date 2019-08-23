import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions/fetching-data";

class Weather extends Component {
  componentDidMount() {
    this.props.getWeather();
  }
  render() {
    if (!this.props.data) {
      return <div>loading...</div>;
    }
    return (
      <div className="Weather">
        <ul className="dataWrapper">
          <h1>Weather in Berlin</h1>
          <li>minimum temprature: {this.props.data.temp_min}</li>
          <li>maximum temprature: {this.props.data.temp_max}</li>
          <li>humidity: {this.props.data.humidity}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.weatherReducer.weather.main
});

export default connect(
  mapStateToProps,
  { getWeather }
)(Weather);
