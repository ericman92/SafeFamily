import React from 'react';
import axios from 'axios'; //because Newton said so

class RegisterUser extends React.Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: "",
      fnameInput: "",
      lnameInput: "",
      
      emailInput: "",
      ageInput: "",
      passwordInput: "",
      message: ""
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
      .post("/users/new", {
        username: usernameInput,
        password: passwordInput
      })
      .then((res) => {
        console.log("Register Success")        
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Register Success"
        })
      })
      .catch((err) => {
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Something went wrong."
        })
      })
  }

  render() {
    const { usernameInput, passwordInput, message } = this.state

    return (
      <div>
        <h1>Register</h1>

        Username:
        <input type="text" value={usernameInput} onChange={this.handleUsernameChange}/>
        <br></br>
        Password:
        <input type="password" value={passwordInput} onChange={this.handlePasswordChange}/>

        <button onClick={this.submitForm}>Register</button>

        {message}
      </div>
    )
  }
}

export default RegisterUser;
