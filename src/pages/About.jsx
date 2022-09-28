import React from 'react';
import Newsletter from './Components/Newsletter';
import Banner from './Components/Banner';

function About() {

  return null
  return (
    <>
    <Banner home={"Home"} title={"About"} liItem={"About"}/>
      <div className="content-display-section section-top-gap-150">
        <div className="box-wrapper custom-box-wrapper about-box-wrapper pos-relative">
          <div className="content-inner-img content-inner-img-left">
            <img className="img-fluid" src="assets/images/section-image/section-image-1.png" alt="" />
          </div>
          <div className="section-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12 pos-relative">
                  <div className="custom-section-content custom-section-content-about custom-section-content-right">
                    <div className="section-content section-content-gap-50 ">
                      <h3 className="section-title">We are all-in-one pragmatic Digital Marketing Agency.</h3>
                    </div>
                    <p>We vigorously serve our clients with engaging and leading full-time services for their continued expansion and offer the most durable digital marketing services on best plans.</p>

                    <ul className="default-iconic-item-2">
                      <li>
                        <div className="icon"><i className="icofont-check"></i></div>
                        <div className="content">
                          <h4 className="smalltitle">Mission & Vission</h4>
                          <p>The success of an agency lies behind the delight of its clients. A satisfied client boosts agency’s performance and magnifies it. Hit Digitally keenly conveys its clients with exceptional and reliable amenities. The commendations from its clients are the real-time evidence of our excellent work.</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><i className="icofont-check"></i></div>
                        <div className="content">
                          <h4 className="smalltitle">Our Focus</h4>
                          <p>We aim to establish your business.
                          So, let’s have a step ahead to create something great and awesome!!!</p>
                        </div>
                      </li>
                    </ul>

                    <a href="/Service" className="btn btn-lg btn-default icon-right">View Our Services <i
                      className="icofont-double-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  )
}

export default About;