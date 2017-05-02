/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {

render () {
  var className = this.props.customClass ? this.props.customClass : "waves-effect waves-light btn button-width";
    return (
      <button className={className} onClick={this.props.onClick}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
