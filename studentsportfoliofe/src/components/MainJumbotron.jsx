import React, { Component } from 'react';
import {Container, Jumbotron, Image} from "react-bootstrap"
import "../stylesheets/jumbotron.css"

class MainJumbotron extends Component {
    render() {
        return (
            <Jumbotron className="jumbrotron" fluid>
                <Container className="jumbrotron">
                    <Image className="pinguImage" src="https://wallpaperset.com/w/full/2/5/b/512475.jpg" />
                </Container>
            </Jumbotron>
        );
    }
}

export default MainJumbotron;