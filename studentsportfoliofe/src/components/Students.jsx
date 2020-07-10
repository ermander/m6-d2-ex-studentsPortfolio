import {Image, Button, Spinner, Row, Col} from "react-bootstrap"
import React, { Component } from 'react';
import "../stylesheets/jumbotron.css"
import EditStudent from "./EditStudent"
import DeleteStudent from "./DeleteStudent"

class Students extends Component {
    state = {
        showEditModal: false,
        id: ""
    }

    render() {
        console.log(this.props.students)
        return (
            <>
            {this.props.isLoading && (
                <div className="container d-flex justify-content-center my-5 ">
                Fetching students...
                <div>
                  <Spinner color="success" />
                </div>
              </div>
            )}
            {!this.props.isLoading && this.props.errMess === undefined && (
                this.props.students.students.map(
                    (student) => {
                        return (                            
                            <>
                            <Row key={student._id} className="my-2">
                                <Col xs={4}>
                                <Image className="profileImage" src="https://wallpaperset.com/w/full/2/5/b/512475.jpg" />
                                </Col>
                                <Col xs={6} className="description">
                                    <h2>{student.name} {student.surname}</h2>
                                    <h3>{student.country}</h3>
                                    <h4>{student.email}</h4>
                                    <h5>{student._id}</h5>
                                    <p>Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p>
                                </Col>    
                                <Col xs={2}>
                                    <Button 
                                        variant="primary" 
                                        className=" buttons mx-3 d-flex my-5 justify-content-end" 
                                        onClick={() => this.setState({ 
                                            showEditModal: true,
                                            id: student._id
                                            })}>                                            
                                        Edit
                                    </Button> 
                                    <Button 
                                        className="buttons d-flex my-5 justify-content-end" 
                                        variant="danger">
                                        Delete
                                    </Button>
                                    <EditStudent
                                        id={student._id}
                                        name={student.name}
                                        surname={student.surname}
                                        email={student.email}
                                        country={student.country}
                                        dateOfBirth={student.dateOfBirth}
                                        show={this.state.showEditModal}
                                        onClose={() => this.setState({ showEditModal: false })}
                                        onUpdatedStudent={() => this.setState({ 
                                        showEditModal: false })}
                                    />
                                    <DeleteStudent />
                                </Col>                                  
                            </Row> 
                            </>
                        )
                    }
                )
            )}
            </>
            
        )
    }
}

export default Students;          