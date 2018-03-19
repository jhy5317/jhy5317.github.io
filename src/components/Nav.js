import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render(){
    return(
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="#page-top">Start Bootstrap</Link>
          <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="#portfolio">Portfolio</Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="#about">About</Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}
