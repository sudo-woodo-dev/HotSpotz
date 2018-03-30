import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Area from './Area';

describe('<Area />', () => {
  let component;

  beforeEach(() => {
    component = mount(<Area />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Area />, div);
  });

  it("renders the areas's name", () => {
    const name = component.find('PageHeader#area-name');
    expect(name.length).toBe(1);
  });

  it("renders the areas's overall score", () => {
    const overallScore = component.find('Row#overall-score');
    expect(overallScore.length).toBe(1);
  });

  it("renders the areas's parking score", () => {
    const parkingScore = component.find('Row#parking-score');
    expect(parkingScore.length).toBe(1);
  });

  it("renders the areas's cleanliness score", () => {
    const cleanlinessScore = component.find('Row#cleanliness-score');
    expect(cleanlinessScore.length).toBe(1);
  });

  it("renders the areas's safety score", () => {
    const safetyScore = component.find('Row#safety-score');
    expect(safetyScore.length).toBe(1);
  });

  it("renders the areas's affordability score", () => {
    const affordabilityScore = component.find('Row#affordability-score');
    expect(affordabilityScore.length).toBe(1);
  });

  it("renders the areas's family friendliness score", () => {
    const familyFriendliness = component.find('Row#family-friendliness');
    expect(familyFriendliness.length).toBe(1);
  });
});
