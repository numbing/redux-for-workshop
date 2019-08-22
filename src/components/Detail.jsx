import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/fetching-data";

class Detail extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    if (!this.props.data) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <h1>detail</h1>
        {this.props.data.map(e => {
          return <p>{e.name}</p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.dataReducer.data.results
});

export default connect(
  mapStateToProps,
  { getData }
)(Detail);
