import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PortfolioGrid extends Component {
  render(){
    return(
      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <Link className="portfolio-item d-block mx-auto" to="#portfolio-modal-1">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="src/img/portfolio/cabin.png" alt="" />
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link className="portfolio-item d-block mx-auto" to="#portfolio-modal-2">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="src/img/portfolio/cake.png" alt="" />
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link className="portfolio-item d-block mx-auto" to="#portfolio-modal-3">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="src/img/portfolio/circus.png" alt="" />
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link className="portfolio-item d-block mx-auto" to="#portfolio-modal-4">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="src/img/portfolio/game.png" alt="" />
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link className="portfolio-item d-block mx-auto" to="#portfolio-modal-5">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="src/img/portfolio/safe.png" alt="" />
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link className="portfolio-item d-block mx-auto" to="#portfolio-modal-6">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="src/img/portfolio/submarine.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    )
  }
}
