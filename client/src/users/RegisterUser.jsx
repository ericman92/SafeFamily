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
      phoneInput: "",

      ageInput: "",
      groupInput: "",
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

  handleFirstnameChange = (e) => {
    this.setState({
      fnameInput: e.target.value
    });
  }

  handleLastnameChange = (e) => {
    this.setState({
      lnameInput: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      emailInput: e.target.value
    });
  }

  handlePhoneChange = (e) => {
    this.setState({
      phoneInput: e.target.value
    })
  }

  handleAgeChange = (e) => {
    this.setState({
      ageInput: e.target.value
    });
  }

  handleGroupChange = (e) => {
    this.setState({
      groupInput: e.target.value
    })
  }

  submitForm = () => {
    const { usernameInput, passwordInput, fnameInput, lnameInput, emailInput, phoneInput, ageInput, groupInput } = this.state;

    axios
      .post("/users/new", {
        username: usernameInput,
        password: passwordInput,

        firstname: fnameInput,
        lastname: lnameInput,

        email: emailInput,
        phone: phoneInput,

        age: ageInput,
        group: groupInput,

      })
      .then((res) => {
        console.log("Register Success")        
        this.setState({
          username: usernameInput,
          password: passwordInput,

          firstname: fnameInput,
          lastname: lnameInput,

          email: emailInput,
          phone: passwordInput,

          age: ageInput,
          group: groupInput,
          message: "Register Success"
        })
      })
      .catch((err) => {
        this.setState({
          username: usernameInput,
          password: passwordInput,

          firstname: fnameInput,
          lastname: lnameInput,

          email: emailInput,
          phone: passwordInput,

          age: ageInput,
          group: groupInput,
          message: "Something went wrong."
        })
      })
  }

  render() {
    const { usernameInput, passwordInput, fnameInput, lnameInput, emailInput, phoneInput, ageInput, groupInput, message } = this.state

    return (
      <div>
        <h1>Register</h1>

        Username:
        <input type="text" value={usernameInput} onChange={this.handleUsernameChange}/>
        {" "}
        Password:
        <input type="password" value={passwordInput} onChange={this.handlePasswordChange}/>
        <br></br>
        First Name:
        <input type="text" value={fnameInput} onChange={this.handleFirstnameChange} />
        {" "}
        Last Name:
        <input type="text" value={lnameInput} onChange={this.handleLastnameChange} />
        <br></br>        
        Email:
        <input type="email" value={emailInput} onChange={this.handleEmailChange} />
        {" "}
        Phone:
        <input type="tel" value={phoneInput} onChange={this.handlePhoneChange} />
        <br></br>  
        Age:
        <input type="text" value={ageInput} onChange={this.handleAgeChange} />
        {" "}
        Group Invite:
        <input type="text" value={groupInput} onChange={this.handleGroupChange} />
        <br></br>  

        <button onClick={this.submitForm}>Register</button>

        {message}
      </div>
    )
  }
}

export default RegisterUser;
