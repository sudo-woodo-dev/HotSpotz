import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/Profile.css';

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        name: 'Fake Name',
        username: 'fakeUsername',
        avatar: 'http://via.placeholder.com/200x200'
      }
    };
  }
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <Row>
              <img id="avatar" src={this.state.user.avatar} alt="Avatar" />
            </Row>
            <Row id="name">
              <p>{this.state.user.name}</p>
            </Row>
            <Row id="username">
              <p>{this.state.user.username}</p>
            </Row>
          </Col>
          <Col xs={12} md={8}>
            <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
          </Col>
        </Row>
      </Grid>
    )
  }
}
