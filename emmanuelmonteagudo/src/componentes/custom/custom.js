import React, { Component } from 'react';
import './custom.css';

class Custom extends Component {
  render() {
    return (
    <div className="Custom">
      {this.props.children}
    </div>
    );
  }
}

export default Custom;
