// Write your Character component here

import React from "react";
import {CardHeader,Card,CardBody,CardText,Col} from "reactstrap";


const Characters = props => {
    // console.log(props.name)
    return(
     <Col xs="6" md="4" xl="3">
        <Card>
         <CardBody className = "card">
            <img src= {props.image} alt = "char"/>
            <CardHeader className= "name">{props.name}</CardHeader>
            <CardText>Origin: {props.origin.name}</CardText>
            <CardText>Status: {props.status}</CardText>
            <CardText>Species: {props.species}</CardText>
            <CardText>Gender: {props.gender}</CardText>
         </CardBody>
        </Card>
      </Col>
    )
}

// status
export default Characters