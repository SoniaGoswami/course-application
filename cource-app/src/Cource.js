import React from "react";
import { Container, Card, CardBody, CardTitle, CardText, Button, CardSubtitle } from 'reactstrap';
const cource=({cource})=>
{
    const buttonStyle={
        marginLeft: '30px'
    }
      return(
        <Card>
            <CardBody>
                <CardSubtitle className="fornt-weight-bold">{cource.title}</CardSubtitle>
                <CardText>{cource.description}</CardText>
                <Container className="text-center">
                    <Button color="danger">Delete</Button>
                    <Button color="warning" style={buttonStyle}>Update</Button>
                </Container>
            </CardBody>
        </Card>
      )
}
export default cource;