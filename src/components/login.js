import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import { Form, Button, Card, Alert } from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;
    dispatch(login(this.state.username, this.state.password))
    .then(() => {
        history.push("/profile");
        window.location.reload();
    })
    .catch(() => {
        this.setState({
        loading: false
        });
    });
  }

  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/profile" />;
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
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Login);




// import React, { Component, useState } from 'react';
// import { Form, Button, Card, Alert } from "react-bootstrap";
// import { Redirect } from 'react-router-dom';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

// export default function Login() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = event => {
//         if (this.state.username != "" && this.state.password != ""){
//            cookies.set("userToken", true);
//            return(<Redirect push to="/vote"/>
//            )
//         }
//     }
//         return ( 
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
//         );
// }