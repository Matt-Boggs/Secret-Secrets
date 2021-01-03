import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail() {
  const [user, setUser] = useState({})
  const [secrets, setSecrets] = useState([])

  const {id} = useParams()

  useEffect(() => {
    API.getUser(id)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
    API.getSecrets()
      .then(res => {
        let newArr = []
        // ===== ONLY SECRETS THAT HAVE THE USER ID IN THE ACCESS LIST WILL BE DISPLAYED
        res.data.forEach(secret => {
          if(secret.access.includes(id)){
            newArr.push(secret.secret)
          }
        });
        setSecrets(newArr)
      })
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {user.name}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          {secrets.map(secret => (
              <Col size="md-10 md-offset-1">
                <article>
                  
                  <h1>{secret}</h1>
                  
                </article>
              </Col>
          ))}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back home</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
