import React, { Component } from 'react';
import {Button, Input} from 'reactstrap';
import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLoginSubmit = e => {
        const username = this.state.username;
        localStorage.setItem('user', username);
        window.location.reload();
    };

    render() {
        return (
            <div className="login">
                <h4>Welcome to Instagram</h4>
                <div>Please Login</div>
                <Input
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <br />
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <br />
                <Button onClick={this.handleLoginSubmit}>Log In</Button>
            </div>
        );
    }
}

export default Login;