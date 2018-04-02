import React, { Component } from 'react'
import AuthService from '../services/AuthService'
//TODO Implement when connecting frontend to the backend //

export default function withAuth(WrappedComponent) {
  const Auth = new AuthService()
  return class AuthWrapped extends Component {
    constructor() {
      super();
      this.state = {
        id: null
      }
    }

    componentWillMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace('/login')
      }
      else {
        try {
          const id = Auth.getUserId()
          this.setState({
            id: id
          })
        }
        catch(err){
          Auth.logout()
          this.props.history.replace('/login')
        }
      }
    }

    render() {
      if (this.state.id) {
        return (
          <WrappedComponent history={this.props.history} id={this.state.id} />
        )
      }
      else {
        return null
      }
    }
  }
}
