import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";




import Navbar from "./components/Navbar/Navbar";

const Home = React.lazy(() => import("./components/Home/Home"));
const Signin = React.lazy(() => import("./components/Signin/Signin"));
const Signup = React.lazy(() => import("./components/Signup/Signup"));


export default class MainRouter extends Component {
  render() {
    return (
      <>
        {({ dispatch }) => {
          return (
            <>
              <Navbar
              //  dispatch={dispatch} 
               />

              <Switch>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/" component={Home} />

               

                <Route render={() => <h1>Not found</h1>} />
              </Switch>
            </>
          );
        }}
      </>
    );
  }
}