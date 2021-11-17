import React, { Component, useState } from 'react';
import Login from './login';
import Register from './register';


export default function LoginRegister() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
        if(username != "" && password != ""){

        }
    }
        return ( 
           <div className="App">
				<div style={{ width: "100%", height: "50px" }}></div>
				<Login />
				<div style={{ width: "100%", height: "50px" }}></div>
				<Register />
			</div>
        );
}