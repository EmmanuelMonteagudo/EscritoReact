import React, { Component } from 'react';
import './padre.css';

class Padre extends Component {
  render() {
    return (
    <div className="Padre">
      {this.props.children}
    </div>
    );
  }
}

export default Padre;
