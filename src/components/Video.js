import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Comment from './Comments';
import { Consumer } from '../context';

export default class Video extends Component {
  state = {
    showComment: 0,
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { questions } = value;
          const { question } = questions.find(
            (q) => q.id === this.props.question
          );
          return (
            <div className="card-body col-md-4 mb-3">
              <div className=" video-testimonial-block">
                <div className="video">
                  <ReactPlayer url={this.props.src} controls />
                </div>
              </div>
              <div>
                <span className="question">
                  {' '}
                  <h4 className="question">{question}</h4>
                </span>

                {/* Comment Section */}
                <span className="comment-text">
                  {/* Shows a collapsible comment form */}
                  <i
                    className="fas fa-comments"
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      this.setState({
                        showComment: !this.state.showComment,
                      })
                    }
                  >
                    Leave a comment
                  </i>
                </span>
                <div>
                  {this.state.showComment ? (
                    <Comment
                      appId={this.props.appId}
                      questionId={this.props.question}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
