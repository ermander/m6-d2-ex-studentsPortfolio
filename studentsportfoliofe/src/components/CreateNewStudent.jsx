import React, { Component } from 'react';
import { Modal, Button, Form } from "react-bootstrap"

class CreateNewStudent extends Component {
    state = {
        name: "",
        surname: "",
        email: "",
        country: "",
        dateOfBirth: ""
    }

    createStudent = async () => {
        const newStudent = {
            ...this.state
        }

        const studentResponse = await fetch("http://localhost:3002/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStudent)
        })
        if(studentResponse.ok){
            console.log("Everything is ok!")
        }
    }

    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Insert a new student! </Modal.Title>
                </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                            <Form.Control type="text"
                                onChange={(e) => this.setState({ name: e.currentTarget.value })}
                                value={this.state.name}
                                placeholder="Insert a name" />
                    </Form.Group>
                    <Form.Group controlId="surname">
                        <Form.Label>Surname</Form.Label>
                            <Form.Control type="text"
                                onChange={(e) => this.setState({ surname: e.currentTarget.value })}
                                value={this.state.surname}
                                placeholder="Insert a surname" />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                            <Form.Control type="email"
                                onChange={(e) => this.setState({ email: e.currentTarget.value })}
                                value={this.state.email}
                                placeholder="Insert a email" />
                    </Form.Group>
                    <Form.Group controlId="country">
                        <Form.Label>Country</Form.Label>
                            <Form.Control type="text"
                                onChange={(e) => this.setState({ country: e.currentTarget.value })}
                                value={this.state.country}
                                placeholder="Insert a country" />
                    </Form.Group>
                    <Form.Group controlId="dateOfBirth">
                        <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="text"
                                onChange={(e) => this.setState({ dateOfBirth: e.currentTarget.value })}
                                value={this.state.dateOfBirth}
                                placeholder="Insert a date of birth" />
                    </Form.Group>
                </Form>
            </Modal.Body>  
            <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.createStudent}>
                        Save Changes
                    </Button>
                </Modal.Footer>          
            </Modal>
            </>
        );
    }
}

export default CreateNewStudent;