import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './index.css';
//#region
/*
class Square extends React.Component {
    render() {
      return (
        <button className="square">
        </button>
      );
    }
  }

  class Board extends React.Component {
    renderSquare(k) {
      return <Square value ={k} />;
    }

    render() {
      const status = 'Next player: X';

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>

      );
    }
  }

  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div></div>
            <ol></ol>
          </div>
        </div>


      );
    }
  }


  // ========================================

  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  */
//#endregion

class Button extends React.Component {

  render() {
    //const handleClick = () => this.props.onClick();
    return (
      <button >
        {this.props.textValue}
      </button>
    )
  }
}

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

class App extends React.Component {

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

/*
class Card extends React.Component {
  render() {
    return (
      <div className="github_profile">
        <img src={this.props.image}></img>
        <div className="info">
          <div className="name">name here...</div>
          <div className="company">company here..</div>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <div class="header">{this.props.title}</div>
        <Card image="https://placehold.it/75"/>
        
      </div>
    )
  }
}
*/
ReactDOM.render(
  <App title="The Github Cards App" />,
  document.getElementById('root'),
);
