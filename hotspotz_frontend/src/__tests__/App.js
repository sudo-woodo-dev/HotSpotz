import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("renders create a login form", ()=>{
//   const app = mount(<Login />)
//   expect(app.find('.subtitle').text()).toEqual('Add a Cat')
// })
