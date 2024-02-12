    import React from "react";
    import { ListGroup, ListGroupItem } from "reactstrap";
    import { Link } from "react-router-dom";
    const Menus=()=>{
        return(
        <ListGroup>
            <Link  className = "list-group-item list-group-item-action" to="/" >
                Home
            </Link>
            <Link  className = "list-group-item list-group-item-action" to="/add-cource" >
                Add Cources
            </Link>
            <Link className = "list-group-item list-group-item-action" to="/view-cources" >
                View Cources
            </Link>
            <Link className = "list-group-item list-group-item-action"  >
                About Us
            </Link>
            <Link className = "list-group-item list-group-item-action" >
                Contact
            </Link>
        </ListGroup>
        
        )
    }
    export default Menus;