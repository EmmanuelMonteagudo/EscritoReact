import React, { Component } from 'react';
import './App.css';
import Padre from './componentes/padre/padre.js';
import Hijo from './componentes/hijo/hijo.js';
import Custom from './componentes/custom/custom.js';

class App extends Component {
  render() {

    const l = [<Hijo/>];

    var borde = l.map (x => <Custom>{x}</Custom> )

    return (
      <Padre>
        {borde}
      </Padre>
    );
  }
}

export default App;
