import React, { Component } from 'react';

import './App.css';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Head from './view/head/Head';
import Body from './view/body/Body';
import Foot from './view/foot/Foot';
import {
  fetchPosts
} from './action';
import configureStore from './store/configureStore';
const store = configureStore();

class App extends Component {

  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
    // this.handleRefreshClick = this.handleRefreshClick.bind(this)
    console.log('constructor props: ' + props);
  }
  
  componentDidMount() {
    console.log('componentDidMount');

    // store.dispatch(fetchPosts('reactjs'));
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps: ' + nextProps);
  }

  render() {
    console.log('render: ');
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

// App.propTypes = {
//   selectedSubreddit: PropTypes.string.isRequired,
//   posts: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   dispatch: PropTypes.func.isRequired
// }

export default App;

