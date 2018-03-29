import React, { Component } from 'react';
import {
  Grid,
  Row,
  PageHeader
} from 'react-bootstrap';

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
        <Row>
          <PageHeader>
            {this.state.area.name}
          </PageHeader>
        </Row>
        <Row>Overall: {this.state.area.overallScore}</Row>
        <Row>Parking: {this.state.area.parkingScore}</Row>
        <Row>Cleanliness: {this.state.area.cleanlinessScore}</Row>
        <Row>Safety: {this.state.area.safetyScore}</Row>
        <Row>Affordability: {this.state.area.affordabilityScore}</Row>
        <Row>
          Family-friendly? {(this.state.area.familyFriendliness) ? 'Yes' : 'No'}
        </Row>
      </Grid>
    )
  }
}
