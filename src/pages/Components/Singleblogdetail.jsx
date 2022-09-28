import React from 'react';
import { useLocation } from 'react-router-dom'


const Singleblogdetail = () => {
    const location = useLocation()
    const props = location.state
    return (
        <>
            <div className="blog-section section-top-gap-150">
                <div className="box-wrapper">
                    <div className="blog-list-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="custome-container-with-sidebar d-flex flex-column-reverse flex-lg-row-reverse">
                                        <div className="container-width-70">
                                            <div className="blog-details-section">
                                                <div className="box-wrapper">
                                                    <div className="blog-details-wrapper">
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="blog-details-top text-center">
                                                                        <div className="post-meata">
                                                                            <span className="author">By<a href="#">Admin </a></span>
                                                                            <span>03 April, 2021</span>
                                                                            <span>10 min read</span>
                                                                        </div>
                                                                        <h2 className="title">{props.blogheading}</h2>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="blog-details-hero-image mb-20">
                                                                        <img className="img-fluid" src={props.blogimg} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="blog-details-content-wrapper default-text-content">
                                                                        <p> {props.firstpara} </p>
                                                                        <h4 className="subtitle"> {props.firsthding} </h4>

                                                                        <p> {props.secpara} </p>
                                                                        <h4 className="subtitle"> {props.sechding} </h4>

                                                                        <p> {props.thirdpara} </p>
                                                                        <h4 className="subtitle"> {props.thirdhding} </h4>

                                                                        <p> {props.fourthpara} </p>
                                                                        <h4 className="subtitle"> {props.fourthhding} </h4>

                                                                        <p> {props.fivthpara} </p>
                                                                        <h4 className="subtitle"> {props.fivthhding} </h4>

                                                                        <p> {props.sixthpara} </p>
                                                                        <h4 className="subtitle"> {props.sixthhding} </h4>
                                                                        <p> {props.seventhpara} </p>
                                                                    </div>
                                                                </div>

                                                                <div className="col-12">
                                                                    <div className="blog-share ">
                                                                        <div className="text">Share this article:</div>
                                                                        <ul className="social-link">
                                                                            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="icofont-facebook"></i></a></li>
                                                                            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="icofont-skype"></i></a></li>
                                                                            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="icofont-twitter"></i></a></li>
                                                                            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="icofont-linkedin"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Singleblogdetail;