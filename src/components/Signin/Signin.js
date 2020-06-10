import React, { Component } from "react";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import InputGroup from "../shared/InputGroup";
// import ButtonGroup from "../shared/ButtonGroup";



export default class Signin extends Component {
    state = {
        canSubmit: true,
        formSetting: {
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

      componentDidMount(){
          if (isAuthenticated()){
              this.props.history.push("/")
          }
      }
    render() {
        const { canSubmit, formSetting} = this.state;
        let inputArray = [];
        for ( let key in formSetting){
            inputArray.push({
                formSetting: formSetting[key],
            });
        }
        return (
            <div>
                <ToastContainer>
                    <div> Sign In</div>
                    <form onSubmit={{e} => this.onSubmit(e, dispatch)}>
                </ToastContainer>
            </div>
        )
    }
}



