import React, { Component } from 'react';
import { Consumer } from '../context';
import Video from './Video';

export default class Application extends Component {
  state = {
    app: {},
    showItemDetails: 0,
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { applications } = value;
          const app = applications.find((a) => a.id === this.props.id);
          const { videos } = app;
          return (
            <div className="row">
              {console.log(applications)}
              {videos.map((v) => (
                <Video
                  appId={app.id}
                  src={v.src}
                  question={v.questionId}
                  comment={v.comments}
                />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
