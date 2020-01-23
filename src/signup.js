import axios from 'axios';
import React, { useState } from 'react';

class Submit extends React.Component {

    render() {
      //const handleClick = () => this.props.onClick();
      return (
        <input type="submit" value={this.props.textValue}>
        </input>
      )
    }
  }
  
  class Password extends React.Component {
    render() {
      return (
        <div>
          <lable>{this.props.label} </lable>
          <input type="password" name={this.props.id} ref={this.props.ref} />
        </div>
      );
    }
  }
  
  class Username extends React.Component {
    render() {
      return (
        <div>
          <lable>{this.props.label}</lable>
          <input type="text" name={this.props.id}></input>
        </div>
      )
    }
  }
  
  class SignUp extends React.Component {
  
    passwordInput = React.createRef();
    confirmPasswordInput = React.createRef();
  
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.passwordInput.current.value == this.confirmPasswordInput.current.value);
    }
  
    render() {
  
      return (
        /*<div>
          <Button onClickFunction={incrementCounter} increment={1} />
          <Button onClickFunction={incrementCounter} increment={5} />
          <Button onClickFunction={incrementCounter} increment={10} />
          <Button onClickFunction={incrementCounter} increment={100} />
           <Button onClickFunction={incrementCounter} increment={1000} />
          <Display message={counter}/>
        </div>*/
        
        <div>
          <form onSubmit={this.handleSubmit}>
          <Username id="txtUserName" label="User Name"></Username> <br />
          <div>
            <label>Password </label>
            <input type="password" name="txtConfirmPassword" ref={this.passwordInput} />
          </div><br/>
          <div>
          <label>Confirm Password </label>
          <input type="password" id="txtConfirmPassword" label="Confirm Password" ref={this.confirmPasswordInput}></input><br />
          </div><br/>
          <Submit textValue="Login"></Submit><br />
          </form>
        </div>
      );
    }
  }

  export default SignUp;