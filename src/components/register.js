import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { register } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      phone: "",
      password: "",
      successful: false,
    };
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.props
    .dispatch(
        register(this.state.username, this.state.password, this.state.phone)
    )
    .then(() => {
        this.setState({
        successful: true,
        });
    })
    .catch(() => {
        this.setState({
        successful: false,
        });
    });
  }

  render() {
    const { message } = this.props;

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
                            onChange={(e) => {this.username.username = e.target.value}}
                            type="text"
                            placeholder="Enter your name"
                        />
                    </Form.Group>
                    <Form.Group controlId="lPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            onChange={(e) => {this.username.password = e.target.value}}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Group>
                    <Form.Group controlId="lPhone">
                        <Form.Label>PhoneNumber</Form.Label>
                        <Form.Control
                            name="phonenumber"
                            onChange={(e) => {this.username.phone = e.target.value}}
                            type="text"
                            placeholder="1234567890"
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
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);












// import React, { Component, useState } from 'react';

// import { connect } from 'react-redux';
// import { register } from '../actions/auth';

// class Login extends Component {
    

//     const handleSubmit = event => {
//        register(username, password, phoneNumber)
//     }

//     return ( 
//         <div className="register">
//         <Card style={{ width: '32rem', margin: 'auto' }}>
//             <Card.Header as="h3">Register</Card.Header>
//             <Card.Body>
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group controlId="lName">
//                         <Form.Label>Username</Form.Label>
//                         <Form.Control
//                             name="username"
//                             onChange={(e) => {setUsername(e.target.value)}}
//                             type="text"
//                             placeholder="Enter your name"
//                         />
//                     </Form.Group>
//                     <Form.Group controlId="lPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                             name="password"
//                             onChange={(e) => {setPassword(e.target.value)}}
//                             type="password"
//                             placeholder="Password"
//                         />
//                     </Form.Group>
//                     <Form.Group controlId="lPhone">
//                         <Form.Label>PhoneNumber</Form.Label>
//                         <Form.Control
//                             name="phonenumber"
//                             onChange={(e) => {setPhone(e.target.value)}}
//                             type="text"
//                             placeholder="1234567890"
//                         />
//                     </Form.Group>
//                     <Button variant="primary" type="submit">
//                         Register
//                     </Button>
//                 </Form>
//             </Card.Body>
//         </Card>
//     </div>
//     );
// }