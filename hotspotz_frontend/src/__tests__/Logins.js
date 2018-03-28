import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/Login';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Login />, div)
})

it('renders create a login form', ()=> {
  const app = mount(<Login />)
  expect(app.find('.card').text()).toEqual('Login')
})
