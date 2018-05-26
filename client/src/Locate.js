import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Styling/Landing.css';
import { Grid, Row, Col } from 'react-bootstrap';

class Locate extends Component {
    state = {
        response: ''
    };


    render() {
        return (
            <Grid className="App">
                <Row>
                    <Col xs={18} md={12} lg={12}>
                        <Link to="/home" className="App-title"> <h1>Welcome to SafeFamily</h1></Link>
                    </Col>
                </Row>
                {/* <p className="App-intro">{this.state.response}</p> */}
            </Grid>
        );
    }
}

export default Locate;