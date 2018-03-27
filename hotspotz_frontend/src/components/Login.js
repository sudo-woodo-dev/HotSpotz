import React, { Component } from 'react';


export default class Login extends Component {
  constructor() {
    super()
    this.state={
      username: '',
      password: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.Auth.login(this.state.username,this.state.password)
    .then(res => {
      this.props.history.replace('/profile')
      alert('You are logged in!');
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}
          >
            <input
              className="form-item"
              placeholder="Username"
              name="username"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.username}
            />
            <input
              className="form-item"
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.password}
            />
            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
