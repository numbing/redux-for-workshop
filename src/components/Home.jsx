import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/fetching-data";
import Information from "./Information";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log("home", this.props);
    return (
      <div className="Home">
        <h1>
          all charechter of startwars counted and they are :
          {this.props.charechterCount}
        </h1>

        <Information />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  charechterCount: state.dataReducer.data.count
});

export default connect(
  mapStateToProps,
  { getData }
)(Home);
