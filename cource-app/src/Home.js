import React, { useEffect } from "react";
import { Container, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
const Home=()=>{
    useEffect(()=>{
    document.title="Home"
    }, []);
    const cardStyle={
        backgroundColor: '#87CEEB', // Set your desired background color here
        color: 'white',            // Set text color for better contrast
        padding: '10px',           // Optional: Add padding for better aesthetics
        borderRadius: '20px',
    }

    const buttonStyle = {
        width: 'fit-content',      // Set button width to fit its content
        margin: '20px'
    };
    return(
        <div>
               <Card style={cardStyle}>
                <h1>Learn RactJS</h1>
                <p>ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components.</p>
               <div>
               <Button color="primary" outline style={buttonStyle}>Start Using</Button>
               </div>
               </Card >
               <Container>
              
               </Container>
        </div>
    )
}
export default Home;