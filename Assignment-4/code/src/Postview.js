import React, { useState } from 'react';
import './Postview.css';


const Postview=()=> {
  const [post, setPost]=useState([]);

  return (
    <div className="site-container">
      <div className="page-header">
      <Navbar bg="primary" variant="dark">
        <container>
          <Navbar.Brand href="#">InstaClone</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Camera</Navbar.Text>
          </Navbar.Collapse>
        </container>
      </Navbar>
      <div className="post-container">
        <container>
          <Row>
            <Col MD={{span:6,offset:3}}>
              <Card.header>
                <label className="text-left">
                  <strong>Siva</strong>
                  <br></br>
                  London
                </label>
              </Card.header>
              <Card.Body className="text-center">
                <Card.Title>
                  <img src="https://images.unsplash.com/photo-1643902534396-96dd62c03e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8OVFWUkVIOUEzRFV8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" width="300px" height="300px" className="img"/>
                </Card.Title>
                <Card.Text>Kick start your career</Card.Text>
                <button>30 likes</button>
              </Card.Body>
              <Card.Footer className="text-muted">
                {new Date(109020293002).toLocaleDateString()}
              </Card.Footer>
            </Col>
          </Row>
        </container>
      </div>
      </div>
    </div>





















  );
}

export default Postview;
