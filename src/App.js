import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Nav, Header, PortfolioGrid, About } from './components'

export default class App extends Component {
  render(){
    return(
      <div id="wrapper" className="clearfix">
        <HashRouter>
          <div>
            <Nav />
          </div>
        </HashRouter>
        <Header />
        <HashRouter>
          <div>
            <PortfolioGrid />
          </div>
        </HashRouter>
        <HashRouter>
          <div>
            <About />
          </div>
        </HashRouter>
      </div>
    );
  }
}
