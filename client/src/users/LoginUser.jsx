import React from 'react';
import axios from 'axios';
import { Route , Redirect } from 'react-router';

class LoginUser extends React.Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: "",
      message: "",
      loggedIn: false
    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      usernameInput: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      passwordInput: e.target.value
    })
  }

  submitForm = () => {
    const { usernameInput, passwordInput } = this.state;

    axios
      .post("/users/login", {
        username: usernameInput,
        password: passwordInput
      })
      .then((res) => {
        console.log('hi eric', res.data)
        this.setState({
          loggedIn: true,
          message: "Login Success"
        })

      })
      .catch((err) => {
        console.log('is the error?' + err)
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Username / Password Incorrect."
        })
      })
  }

  logout = () => {
    axios.post('/users/logout')
         .then((res) => {
           this.props.removeUser();
           this.props.toggleLogin();
           this.setState({
             usernameInput: "",
             passwordInput: "",
             message: res.data
           })
         })
         .catch((res) => {
           this.setState({
             message: "Please log in first."
           })
         })
  }

  render() {
    const { usernameInput, passwordInput, message } = this.state

    if (!this.state.loggedIn) {
      return (
        <div>
          <a style={{color: "red"}} onClick={this.logout}> Log Out </a>

          <br></br>

          <h1>Log In</h1>

          Username:
          <input type="text" value={usernameInput} onChange={this.handleUsernameChange}/>

          Password:
          <input type="password" value={passwordInput} onChange={this.handlePasswordChange}/>

          <button onClick={this.submitForm}>Login</button>

          {message}
        </div>
      )
    } else {
      return (
        <Redirect to="/map" />
      )}
  }
}

export default LoginUser
