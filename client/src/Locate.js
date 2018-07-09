import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Map from './Map';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Styling/Locate.css';

class Locate extends React.Component {
    constructor() {
        super();
        this.state = {
            lastLat: '',
            lastLong: '',
            people: [],
            loggedIn: true,
            message:''
        }
    }

    componentWillMount(){
        const { account } = this.props.location.state;
        const { people } = this.state;
        axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDfDCR3URYOdpQd7swUX09_4Xqw7dVNVCk')
        .then(res => {
            console.log(res.data.location)
            this.setState({
                lastLat: res.data.location.lat,
                lastLong: res.data.location.lng
            })
            return (res.data)
        })
        .then((data) => {
            console.log( data)
            axios.post('/users/update', {
                lastLat: data.location.lng,                
                lastLong: data.location.lat,
                username: account.usernameInput
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios.get('/users/displayGroup')
            .then(res => {
                console.log("DATA OBJECT ", res.data.data)
                    this.setState({
                        people : res.data.data
                    })
                    console.log(people.data)
                })
            })
        }

    displayInfo=(person)=> {
        const {people} = this.state
        console.log(person)
        this.setState({
            message: person
        })
    }

    render() {
        const {lastLat, lastLong, people} = this.state;
        const {account} = this.props.location.state;
        // console.log(this.props.location.state);
        if(!account.loggedIn){
            <Redirect to = '/home' />
        }
        else{
        return (
            <Grid className = 'mappg'>
                <Row>
                    <Col xs={9} md={6} lg={6} className='map'>
                        <Map />
                    </Col>   

                    <Col xs={9} md={6} lg={6}className='group'>
                        <Row>
                            <Col className='group'>
                                <h3> Group Members </h3>
                                {people.map((person) => {
                                    return (
                                        <div>
                                            <li onClick={() => {this.displayInfo(person)}} value={person.username}> {person.username} </li>
                                        </div>
                                    )
                                })} 
                            </Col>
                        </Row>
                        <Row>    
                            <Col className='memberinfo'>
                                <h3> Information </h3>
                                    First Name: {this.state.message.firstname}{" "}
                                    <br></br>
                                    Last Name: {this.state.message.lastname}{" "}
                                    <br></br>
                                    Age: {this.state.message.age}{" "}
                                    <br></br>                                    
                                    Phone: {this.state.message.phone}{" "}
                                    <br></br>                                    
                                    Email: {this.state.message.email}{" "}
                                    <br></br>                                    
                                    Last Known Coordinates:
                                    <br></br>       
                                    {this.state.message.lastlong} , {this.state.message.lastlat}{" "}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
}

export default Locate
