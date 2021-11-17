import React, { Component, useState } from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
        if (this.state.username != "" && this.state.password != ""){
           cookies.set("userToken", true);
           return(<Redirect push to="/vote"/>
           )
        }
    }
        return ( 
            <div className="login">
            <Card style={{ width: '32rem',margin: 'auto' }}>
                <Card.Header as="h3">Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="lName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                name="username"
                                onChange={(e) => {setUsername(e.target.value)}}
                                type="text"
                                placeholder="Enter your name"
                            />
                        </Form.Group>
                        <Form.Group controlId="lPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                onChange={(e) => {setPassword(e.target.value)}}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
        );
}