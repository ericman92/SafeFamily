import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from './Map';
import { Grid, Row, Col, Modal, Button } from 'react-bootstrap';
import axios from 'axios';


class Locate extends React.Component {
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
        return (
            <Grid className = 'mappg'>
                <Row>
                    <Col className='map'>
                        <Map />
                    </Col>                
                </Row>
                <Row>
                    <Col className='group'>
                    </Col>
                    <Col className=''>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Locate
