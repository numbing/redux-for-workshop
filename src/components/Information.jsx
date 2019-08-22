import React, { Component } from "react";
import { connect } from "react-redux";

class Information extends Component {
  render() {
    if (!this.props.data) {
      return <div>Loading...</div>;
    }
    return (
      <div className="Information">
        {this.props.data.map(e => (
          <ul className="dataWrapper">
            <li key={e.name}>name: {e.name}</li>
            <li key={e.hair_color}>hair color: {e.hair_color}</li>
            <li key={e.eye_color}>eye color: {e.eye_color}</li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.dataReducer.data.results
});

export default connect(mapStateToProps)(Information);
