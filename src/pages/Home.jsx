import React from 'react';
import Counter from './Components/Counter';
import Servicebox from './Components/Servicebox';
import Singleblog from './Components/Singleblog';
import Newsletter from './Components/Newsletter';

function Home() {

  return (
    <>
      <div className="offcanvas-overlay"></div>
      <div className="hero-display-section section-fluid-200">
        <div className="box-wrappr">
          <div className="hero-wrapper">
            <div className="hero-content">
              <span className="title-tag">Hit Digitally</span>
              <h2 className="title">We are <span>& creative</span> digital, enthusiastic</h2>
              <p>Hit Digitally is the rising digital marketing bureau that offers with the best
                compelling services to elevate any business.</p>
              <a href="/service" className="btn btn-lg btn-default icon-right">All
                Service’s <i className="icofont-double-right"></i></a>
            </div>
            <div className="hero-image">
              <img className="img-fluid" src="assets/images/hero/hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="count-display section-fluid-200 section-inner-padding-100 section-inner-gray-gradient-bg-reverse">
        <div className="box-wrapper">
          <div className="count-wrapper pos-relative">
            <div className="container-fluid">
              <div className="row align-items-center justify-contents-between">
                <div className="col-xl-5 offset-xl-0 col-md-10 offset-md-1 col-sm-12">
                  <div className="content text-lg-start text-center">
                    <h3 className="title">We’r <span>10,000</span> project
                      complete & <span>100%</span> client
                      satisfaction.</h3>
                  </div>
                </div>
                <div className="col">
                  <ul className="counter-items counter-items-style-1">
                    <Counter />
                  </ul>
                </div>
              </div>
            </div>
            <div className="dotline-animate">
              <span className="blue"></span>
              <span className="orange"></span>
              <span className="blue"></span>
            </div>
          </div>
        </div>
      </div>

      <Servicebox />


      <Singleblog />

      <Newsletter />
    </>
  )
}

export default Home;