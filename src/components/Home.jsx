import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/fetching-data";

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
      <div>
        <h1>
          all charechter of startwars counted and they are :
          {this.props.charechterCount}
        </h1>
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
