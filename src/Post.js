import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "./js/actions/index";
class Post extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.remoteArticles.map(item => (
          <li className="list-group-item" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    remoteArticles: state.remoteArticles.slice(0, 10)
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(Post);
