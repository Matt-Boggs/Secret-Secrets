import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "../components/Grid";
import API from "../utils/API";
import "./main.css"


const Main = ()=>{
    const [users, setUsers] = useState([])
    const [secrets, setSecrets] = useState([])
    
    useEffect(()=>{
        loadUsers();
        loadSecrets()
    },[]);

    const loadUsers = ()=>{
        API.getUsers()
        .then(res =>{
            setUsers(res.data)
        }).catch(err=>console.log(err))
    };
    
    const loadSecrets = ()=>{
        API.getSecrets()
        .then(res =>{
            // console.log(res.data)
            setSecrets(res.data)
        }).catch(err=>console.log(err))
    }
        // ===========COLLAPSIBLE CODE =======================
    // var coll = document.getElementsByClassName("collapsible");
    // var i;

    // for (i = 0; i < coll.length; i++) {
    //     coll[i].addEventListener("click", function() {
    //         this.classList.toggle("active");
    //         var content = this.nextElementSibling;
    //         if (content.style.display === "block") {
    //         content.style.display = "none";
    //         } else {
    //         content.style.display = "block";
    //         }
    //     });
    // }
        // ===========COLLAPSIBLE CODE =======================

    return (
        <Container fluid>
            <Row>
                <Col size="md-3">
                    <div className="userList">
                    <Row>
                        {users.map(user => (
                            <div className="userBtnContainer col-12" key={user._id}>
                                <Link to={"/users/" + user._id}>
                                    <button className="userBtn btn-danger">
                                        {user.name}
                                        
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </Row>
                    </div>
                </Col>
                <Col size = "md-9">
                    <Row>
                        {/* <Col size="12">
                            <button className="collapsible"><h1>Info</h1></button>
                            <div className="content">
                                <span>lorem ipsum</span>
                            </div>    
                        </Col> */}
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

export default Main