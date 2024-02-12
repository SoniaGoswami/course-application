import React, { Fragment,useEffect } from "react";
import { Form, FormGroup, Label, Input, Container, Button} from "reactstrap";

const AddCource=()=>{
    useEffect(()=>{
        document.title="AddCource"
        }, []);
    const buttonStyle={
        marginLeft: '20px'
    }
    return(
        <Fragment>
            <h1>Fill Cource Detail</h1>
            <Form>
                <FormGroup>
                    <Label for="userId">Cource Id</Label>
                    <Input type="text" placeholder="Enter here" name="id" id="userId" />
                </FormGroup>
                <FormGroup>
                    <Label for>Cource Title</Label>
                    <Input type="text" placeholder="Enter title here" id ="title" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="description">Cource Description</Label>
                    
                    <Input type="text area" placeholder="Enter title here" id ="title" style={{height:"150px"}} />
                </FormGroup>
               <Container>
                <Button color="success">Add Cource</Button>
                <Button color="warning" style={buttonStyle}>Clear</Button>
               </Container>
            </Form>
        </Fragment>
    )
}

export default AddCource