import React, { Component } from 'react';

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
      }
    };
  }

  render() {
    return (
      <p>Hey</p>
    )
  }
}
