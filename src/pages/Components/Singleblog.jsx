import React from 'react';
import Blogbox from './Blogbox';


function Singleblog() {
  return (
    <>
    <div className="blog-list-section section-top-gap-150">
            <div className="box-wrapper">
            <div className="section-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7">
                                <div className="section-content section-content-gap-80">
                                    <h6 className="section-tag tag-blue">Latest News</h6>
                                    <h3 className="section-title">Check popular startup related
                                        article from news feed.</h3>
                                    <span className="icon-seperator"><img
											src="assets/images/icons/section-seperator-shape.png" alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-list-wrapper" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="blog-list-items-full-width">
                                    <Blogbox />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default Singleblog;