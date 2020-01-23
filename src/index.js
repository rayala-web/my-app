import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import CardApp from './cards';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import SignUp from './signup';
import NotFound from './notfound';
import Family from './family';
import StarMatch from './star';
//#region

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

  class App extends React.Component {
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

/*
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

const routing = (
  <Router>
  <div>
    <ul>
      <li>
      <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/star'>Star</Link>
      </li>
      <li>
      <Link to='/signup'>Sign Up</Link>
      </li>
      <li>
      <Link to='/cards'>Cards</Link>
      </li>
      <li>
        <Link to='/parent'>Parentandchild</Link>
      </li>
    </ul> 
  <Switch>
  <Route exact path='/' component={App} />
  <Route path='/star' component={StarMatch} />
  <Route path='/cards' component={CardApp} />
  <Route path='/signup' component={SignUp} />
  <Route path='/parent' component={Family}/>
  <Route path='*' component={NotFound} />

  </Switch>
  </div>
</Router> 
)

ReactDOM.render(
  routing,
  document.getElementById('root'),
);
