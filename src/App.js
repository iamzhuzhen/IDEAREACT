import React, { Component } from 'react';

import './App.css';

import Head from './view/head/Head';
import Body from './view/body/Body';
import Foot from './view/foot/Foot';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div className="App">
          <Head/>
          <Body/>
          <Foot/> 
      </div>
      
    );
  }
}


function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    changeName () {
      dispatch({
        type: 'CHANGE_NAME',
        name: '葬爱'
      })
    },
    showDialog () {
      dispatch({
        type: 'SHOW_DIALOG'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

