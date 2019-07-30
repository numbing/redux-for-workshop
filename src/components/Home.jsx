import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/fetching-data";

class Home extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>i am home</h1>
      </div>
    );
  }
}

const maoStateToProps = state => ({
  data: state
});

export default connect(
  maoStateToProps,
  { getData }
)(Home);
