import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Styling/Landing.css';
import { Grid, Row, Col } from 'react-bootstrap';

class Landing extends Component {
    state = {
        response: ''
    };

    render() {
        return (
            <Grid className="landingpg">
                <Row>
                    <Col className='Enter' xs={18} md={12} lg={12} mdOffset-6>
                        <Link to="/home" className="App-title"> <h1>Welcome to Safe Family</h1></Link>
                    </Col>
                </Row>
                {/* <p className="App-intro">{this.state.response}</p> */}
            </Grid>
        );
    }
}

export default Landing;