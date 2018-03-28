import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/Profile.css';

const Profile = () => (
  <Grid>
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <Row>
          <img id="avatar" src="http://via.placeholder.com/200x200" alt="Avatar" />
        </Row>
      </Col>
      <Col xs={12} md={8}>
        <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
      </Col>
    </Row>
  </Grid>
);

export default Profile;
