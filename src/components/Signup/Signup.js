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

    onChangePassword = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
            });
        
            if (this.state.password.length >= 8) {
                this.setState({
                error: null,
            });
        
            let validatedPassword = validator.matches(
                this.state.password,
                "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                );

            if (!validatedPassword) {
                this.setState({
                    error:
                        "Your pasword must contain 1 uppercase, 1 lowercase, number, and a special character",
                    });
                } else {
                this.setState({
                    error: null,
                });
            }
            } else {
                toast.error("Password must be at least 8 characters", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            };
        
        onChangeEmail = (e) => {
            let isEmail = validator.isEmail(this.state.email);
        
            this.setState({
                [e.target.name]: e.target.value,
            });
        
            if (!isEmail) {
                toast.error("Please enter a valid email", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                this.setState({
                emailError: null,
                });
            }
        };
        
        checkInputValidation = (errorState, inputName, inputValue) => {
            switch (inputName) {
                case "username":
        
                let validatedUsername;
                validatedUsername = validator.matches(
                    inputValue,
                    /^[a-zA-Z0-9]{1,20}$/
                );
        
                if (!validatedUsername) {
                    errorState.usernameError.noError = validatedUsername;
                    errorState.usernameError.message =
                        "Cannot contain special characters and minimum of 2 and maximum of 20 characters";
                    return errorState;
                } else {
                    errorState.usernameError.noError = validatedUsername;
                    errorState.usernameError.message = "";
                    return errorState;
                }
        
                case "email":
                    let validatedEmail;
        
                    validatedEmail = validator.isEmail(inputValue);
        
                if (!validatedEmail) {
                    errorState.emailError.noError = validatedEmail;
                    errorState.emailError.message = "It must be an email";
        
                    return errorState;
                } else {
                    errorState.emailError.noError = validatedEmail;
                    errorState.emailError.message = "";
                    return errorState;
                }
                case "password":
                let validatedPassword = true;
    
                if (!validatedPassword) {
                    errorState.passwordError.noError = validatedPassword;
                    errorState.passwordError.message =
                    "Minimum eight characters, at least one letter, one number and one special character";
                    return errorState;
                } else {
                    errorState.passwordError.noError = validatedPassword;
                    errorState.passwordError.message = "";
                    return errorState;
                }
        
                default:
                return errorState;
            }
        };
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

