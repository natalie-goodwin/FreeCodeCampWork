import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    /*call constructor with super
    and pass props to super */
    super(props);
    this.state = { email: "", password: "", message: "" };
  }

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        {/*Email starts */}

        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
          {/*bind value of email to the state; 
             event parameter supplied by browser as an
             event handler; accessing target.value that represents
             most recent updated value of textbox; must use this.setState 
             to update value into the state; 
           */}
        </div>
        {/*Email ends */}
        {/*Password starts*/}
        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          {/*bind value of password to the state */}
        </div>
        {/*Password ends */}
        <div className="text-right">
        {this.state.message}
          <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
            Login
          </button>
          {/*when user clicks button, executes 
           method of onLoginClick */}

           
        </div>
      </div>
    );
  } //end of render

  //executes when user clicks on Login
  onLoginClick = () => {
    console.log(this.state);
    if (
      this.state.email === "admin@test.com" &&
      this.state.password === "admin123"
    ) {
      //success
      this.setState({
        message: <span className="text-success">Successful login.</span>,
      });
    } else {
      //error
      this.setState({
        message: (
          <span className="text-danger">Invalid login. Please try again.</span>
        ),
      });
    }
  };
}
