import React, { Component } from 'react';
import Application from './Application';
import { Consumer } from '../context';

export default class Candidates extends Component {
  state = {
    applicationId: null,
    error: 'No Candidate Selected',
    name: '',
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          //Using conntext API
          const { candidates } = value;

          return (
            <div className="row">
              {/* To display all the candidates className='list-group-item' */}
              <div className="nav-sidebar">
                <ul className="candidate">
                  <li>
                    <span>Candidates</span>
                  </li>
                  {candidates.map((candidate) => (
                    <li
                      onClick={() =>
                        candidate.applicationId
                          ? this.setState({
                              applicationId: candidate.applicationId,
                              name: candidate.name,
                            })
                          : this.setState({
                              applicationId: null,
                              error:
                                'Candidate does not have an active application',
                            })
                      }
                    >
                      {candidate.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Displayimg candidate application */}
              <div className="candidate-application col-md-9">
                {this.state.applicationId !== null ? (
                  <Application
                    key={this.state.applicationId}
                    id={this.state.applicationId}
                    name={this.state.name}
                  />
                ) : (
                  <div className="alert alert-success">{this.state.error}</div>
                )}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
