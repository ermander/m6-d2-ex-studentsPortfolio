import React, { Component } from 'react';
import {Navbar, Nav, Button, Form, Container} from "react-bootstrap"
import CreateNewStudent from "../components/CreateNewStudent"

class NavBar extends Component {
    state={
        students: [],
        openModal: false
    }

    render() {
        return (
            <Container>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Students Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="/uploadstudent">Another link</Nav.Link>
                </Nav>
                <Form inline>
                <Button variant="outline-success" onClick={()=>this.setState({ openModal: true })}>Add New Student</Button>
                <CreateNewStudent 
                show={this.state.openModal}
                onClose={() => this.setState({ openModal: false })}
                onNewStudent={(student) => this.setState({ 
                    openModal: false,
                    students: this.state.students.concat(student) })} />
                </Form>
            </Navbar.Collapse>
            </Navbar>
            </Container>
        );
    }

    componentDidMount = async () => {
        const studentsResponse = await fetch("http://localhost:3002/students")
        const students = await studentsResponse.json()
        this.setState({
            students: students
        })
    }
}

export default NavBar;