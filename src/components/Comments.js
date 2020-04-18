import React, { Component } from 'react';
import { Consumer } from '../context';
import axios from 'axios';
const baseURL ='http://localhost:3001'

export default class Comments extends Component {
  state = {
    comment: '',
    applcation: {},
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (application, e) => {
    e.preventDefault();

    const { comment } = this.state;
    const { videos } = application;
    //Updating the Comments field
    videos.filter((v) =>
      v.questionId === this.props.questionId ? (v.comments = comment) : null
    );

    axios
      .put(
        `${baseURL}/applications/${this.props.appId}`,
        application
      )
      .then((res) => console.log(res));

    this.setState({ comment: '' });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { applications } = value;
          const application = applications.find(
            (a) => a.id === this.props.appId
          );

          return (
            <form
              className="comment-form"
              onSubmit={this.onSubmit.bind(this, application)}
            >
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="comment"
                  placeholder="Comment.."
                  value={this.state.comment}
                  onChange={this.onChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-block btn-warning mb-3"
                value="Add"
              />
            </form>
          );
        }}
      </Consumer>
    );
  }
}
