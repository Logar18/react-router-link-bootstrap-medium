import React, { Component, useState } from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap";


export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
       event.preventDefault();
    }

    return ( 
        <div className="register">
        <Card style={{ width: '32rem', margin: 'auto' }}>
            <Card.Header as="h3">Register</Card.Header>
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
                        Register
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
    );
}