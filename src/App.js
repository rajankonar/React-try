import React, { Component } from 'react';

import './App.css';
import './assets/css/style.css';


import Layout from './layout/layout';
import Footer from './layout/footer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
