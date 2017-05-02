/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import EvaluateString from './evaluateExpression';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.textChanged = (event) => this._textChanged(event);
    this.handleKeyPress = (event) => this._handleKeyPress(event);
    this.clear = (event) => this._clear(event);
    this.backspace = (event) => this._backspace(event);
    this.equal = (event) => this._equal(event);
    this.handleClick = (event) => this._handleClick(event);
  }

  _textChanged (event) {
    event.preventDefault();
    this.setState ({
      text: event.target.value
    });
  }

  _handleKeyPress(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if ( key < 40 || key > 57 ) {
        return false;
    } else {
    	return true;
    }
  }

  _backspace (event) {
    event.preventDefault();
    var currText = this.state.text;
    currText = currText.substring(0, currText.length-1);
    this.setState ({
      text: currText
    });
  }

  _clear (event) {
    event.preventDefault();
    this.setState ({
      text: ""
    });
  }

  _equal (event) {
    event.preventDefault();
    var result = 0;
    if (this.state.text) {
      result = EvaluateString.evaluate(this.state.text);
    }
    this.setState ({
      text: result.toString()
    });
  }

  _handleClick (event) {
    event.preventDefault();
    this.setState ({
      text: this.state.text + event.target.innerText
    });
  }

  render () {
      return (
        <div>
            <h1 className="page-header text-align-center">Calculator</h1>
            <div className="row float-center">
              <div className="col s8">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                  <input type="text"
                         id="input"
                         value={this.state.text}
                         onChange={this.textChanged}
                         onKeyPress={this.handleKeyPress} />
                    <div className="card-action margin-left-25">
                      <Button name="1" onClick={(event)=>this.handleClick(event)}/>
                      <Button name="2" onClick={(event)=>this.handleClick(event)}/>
                      <Button name="3" onClick={(event)=>this.handleClick(event)}/>
                      <Button name="+" onClick={(event)=>this.handleClick(event)}/>
                      <br/>
                      <Button name="4" onClick={(event)=>this.handleClick(event)}/>
                      <Button name="5" onClick={(event)=>this.handleClick(event)}/>
                      <Button name="6" onClick={(event)=>this.handleClick(event)}/>
                      <Button name="-" onClick={(event)=>this.handleClick(event)}/>
                      <br/>
                      <Button name="7" onClick={(event)=>this.handleClick(event)}/>
                      <Button name="8" onClick={(event)=>this.handleClick(event)}/>
                      <Button name="9" onClick={(event)=>this.handleClick(event)}/>
                      <Button name="*" onClick={(event)=>this.handleClick(event)}/>
                      <br/>
                      <Button name="C" onClick={(event)=>this.clear(event)}/>
                      <Button name="←" onClick={(event)=>this.backspace(event)}/>
                      <Button name="0" onClick={(event)=>this.handleClick(event)} />
                      <Button name="/" onClick={(event)=>this.handleClick(event)}/>
                      <br/>
                      <Button name="=" onClick={(event)=>this.equal(event)} customClass="waves-effect waves-light btn button-equal"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
}

export default Home;
