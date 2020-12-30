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

    

    return (
        <Container fluid>
            <Row>
                <Col size="md-3">
                    <div className="userList">
                    <Row>
                        <ul>
                            {users.map(user => (
                                <li className="col-12" key={user._id}>
                                    {user.name}
                                </li>
                            ))}
                        </ul>
                    </Row>
                    </div>
                </Col>
                <Col size = "md-9">
                    <Row>
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