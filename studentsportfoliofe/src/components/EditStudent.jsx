import React, { Component } from 'react';
import { Modal, Button, Form } from "react-bootstrap"
class EditStudent extends Component {
    state = {
        id: this.props.id,
        name: "",
        surname: "",
        email: "",
        country: "",
        dateOfBirth: "",
        currentStudentInfo: {}
    }

    getCurrentStudentInfo = async () => {
        try {
            console.log(this.state.id)
            const response = await fetch("http://localhost/3002/students/" + this.state.id)
            const responseJson = await response.json()
            this.setState({currentStudentInfo: responseJson})
            console.log(this.state.currentStudentInfo)
        }catch(err){
            console.log(err)
        }
    }

    componentDidMount(){
        this.getCurrentStudentInfo()
    }
    
    editStudent = async () => {
        const updatedStudent = { ...this.state }

        const studentResponse = await fetch("http://localhost/3002/students/" + this.props.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedStudent)
        })
        const student = await studentResponse.json()
        console.log(student)
    }
    render() {
        
        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title> Update the student infos </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="name">
                    <Form.Label>Name - {this.state.currentStudentInfo.name}</Form.Label>
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
        );
    }
}

export default EditStudent;