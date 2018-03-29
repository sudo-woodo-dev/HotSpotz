import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Area extends Component {
  constructor() {
    super();
    this.state = {
      area: {
        name: 'Fake Area',
        overallScore: '2.75',
        parkingScore: '3',
        cleanlinessScore: '2',
        safetyScore: '3',
        affordabilityScore: '3',
        familyFriendliness: true
      },
      comments: [
        {
          photo: 'http://via.placeholder.com/400x200',
          text: 'Disgusting, will never return'
        },
        {
          photo: 'http://via.placeholder.com/400x200',
          text: 'Smells like apple pie'
        },
        {
          photo: 'http://via.placeholder.com/400x200',
          text: 'Too many birds flying around'
        }
      ]
    };
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
          </Col>
          <Col xs={6} md={4}>
            <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
          </Col>
        </Row>
      </Grid>
    )
  }
}
