import React, { Component } from "react";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputGroup from "../Shared/InputGroup";
import ButtonGroup from "../Shared/ButtonGroup";

import { login } from "../Helpers/AuthHelpers";
import { Consumer } from "../Context/Context";
import { isAuthenticated } from "../Helpers/AuthHelpers";

import "./Signin.css";

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

  componentDidMount() {
    if (isAuthenticated()) {
      this.props.history.push("/");
    }
  }

  checkInputValidation = (errorState, inputName, inputValue) => {
    switch (inputName) {
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
        let validatedPassword;
        validatedPassword = !validator.isEmpty(inputValue);

        if (!validatedPassword) {
          errorState.passwordError.noError = validatedPassword;
          errorState.passwordError.message = "Password cannot be empty";
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
  onChange = (event) => {
    let inputForm = {
      ...this.state.formSetting,
    };

    inputForm[event.target.name].value = event.target.value;
    let isValidatedCheck = this.checkInputValidation(
      this.state.validate,
      event.target.name,
      event.target.value
    );

    inputForm["email"].error = isValidatedCheck.emailError;
    inputForm["password"].error = isValidatedCheck.passwordError;

    if (
      inputForm["email"].error.noError === false ||
      inputForm["password"].error.noError === false
    ) {
      this.setState({
        ...this.state,
        canSubmit: true,
      });
      return;
    }

    if (
      inputForm["email"].error.noError === true &&
      inputForm["password"].error.noError === true
    ) {
      this.setState({
        ...this.state,
        canSubmit: false,
      });
      return;
    } else {
      this.setState({
        ...this.state,
        formSetting: inputForm,
      });
      return;
    }
  };
  onSubmit = async (event, dispatch) => {
    event.preventDefault();

    const { email, password } = this.state.formSetting;

    //send to the backend
    try {
      let success = await login({
        email: email.value,
        password: password.value,
      });

      let inputForm = {
        ...this.state.formSetting,
      };

      inputForm["email"].value = "";
      inputForm["password"].value = "";

      dispatch({
        type: "SUCCESS_SIGNED_IN",
        payload: success.user,
      });

      this.setState({
        formSetting: inputForm,
      });

      this.props.history.push("/expense");
    } catch (e) {
      toast.error(e.message, {
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

  render() {
    const { canSubmit, formSetting } = this.state;

    let inputArray = [];

    for (let key in formSetting) {
      inputArray.push({
        formSetting: formSetting[key],
      });
    }

    return (
      <Consumer>
        {({ dispatch }) => {
          return (
            <div className="signup-container">
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />

              <div>Sign in</div>
              <form
                className="signup-form"
                onSubmit={(e) => this.onSubmit(e, dispatch)}
              >
                {inputArray.map((element) => {
                  const {
                    formSetting: { name, placeholder, value, error },
                  } = element;

                  return (
                    <InputGroup
                      key={name}
                      name={name}
                      placeholder={placeholder}
                      onChange={this.onChange}
                      value={value}
                      error={error}
                      type={name}
                    />
                  );
                })}

                <ButtonGroup
                  buttonStyle="form-button"
                  title="sign in"
                  disabled={canSubmit}
                />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}



