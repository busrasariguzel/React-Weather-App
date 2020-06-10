import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";



export default class Signup extends Component {
    state = {
            canSubmit: true,
            formSetting: {
            username: {
                name: "username",
                placeholder: "Enter username",
                value: "",
                error: {
                message: "",
                noError: null,
                },
            },
            email: {
                name: "email",
                placeholder: "Enter email",
                value: "",
                error: {
                message: "",
                noError: null,
                },
            },
            password: {
                name: "password",
                placeholder: "Enter password",
                value: "",
                error: {
                message: "",
                noError: null,
                },
            },
            },
            validate: {
            usernameError: {
                noError: null,
                message: "",
            },
            emailError: {
                noError: null,
                message: "",
            },
            passwordError: {
                noError: null,
                message: "",
            },
            },
        };

    componentDidMount() {
            if (isAuthenticated()) {
                this.props.history.push("/");
            }
        }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

