import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "../components/Grid";
import API from "../utils/API";
import "./example.css"


const Example = ()=>{
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        loadUsers()
    },[]);

    const loadUsers = ()=>{
        API.getUsers()
        .then(res =>{
            setUsers(res.data)
        }).catch(err=>console.log(err))
    };

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        });
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-3">
                    <div className="userList">
                    <Row>
                        <ul>
                            {users.map(user => (
                                <div className="col-12" key={user._id}>
                                    <button className="collapsible" >
                                        {user.name}
                                    </button>
                                    <div className="content"><span> lorem ipsem</span></div>
                                </div>
                            ))}
                        </ul>
                    </Row>
                    </div>
                </Col>
                <Col size = "md-9">
                    <Row>
                        <Col size="12">
                            <button className="collapsible"><h1>Info</h1></button>
                            <div className="content">
                                <span>lorem ipsum</span>
                            </div>    
                        </Col>
                        <Col size="12">
                            <div className="card">
                                <h1 className="card-header">Info</h1>
                                <span className="card-body">lorem ipsum</span>
                            </div>
                        </Col>
                        <Col size="12">
                            <div className="card">
                                <h1 className="card-header">Info</h1>
                                <span className="card-body">lorem ipsum</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )


}

export default Example