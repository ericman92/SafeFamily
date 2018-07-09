import React from 'react';
import Login from './users/LoginUser';
import SignUp from './users/RegisterUser';
import './Styling/Home.css';
import { Grid, Row, Col, Modal, Button } from 'react-bootstrap';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);

        this.state = {
            show: false,
            show2: false
        };
    }
    // Handles to display/hide Login *******************//
    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }
    //  Handles to display/hide Signup ***************//
    handleClose2() {
        this.setState({ show2: false });
    }
    handleShow2() {
        this.setState({ show2: true });
    }
    //  *******************************************   //

    render() {

        return (
            <Grid className='homepg'>
                <Row>
                    <Col xs={9} md={6} lg={3} lgOffset={3} >
                        <Button className="button" bsStyle="primary" bsSize="large" onClick={this.handleShow}> Login </Button>
                        <Modal show={this.state.show} onHide={this.handleClose} >
                            <Modal.Body className='login'>
                                <Login />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>

                    <Col xs={9} md={5} lg={5} mdOffset={1} lgOffset={1}>
                        <Button className="button" bsStyle="primary" bsSize="large" onClick={this.handleShow2}> Sign Up </Button>
                        <Modal show={this.state.show2} onHide={this.handleClose2} bsSize='large'>
                            <Modal.Body className='signup'>
                                <form>
                                    <SignUp />
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleClose2}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;