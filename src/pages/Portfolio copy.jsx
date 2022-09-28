import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from './Components/Banner';

function Portfolio() {  
 
return null


  return (
    <>
        <div class="breadcrumb-section">
            <div class="box-wrapper">
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <div class="row text-center">
                            <div class="col-12">
                                <h2 class="breadcrumb-title">All Projects</h2>
                                <ul class="breadcrumb-nav">
                                    <li><Link to="index.html">Home</Link></li>
                                    <li>Projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="project-section section-top-gap-150">
            <div class="box-wrapper">
                <div class="project-filter-wrapper section-fluid-170">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="projects-gallery-filter-nav">
                                    <button class="btn active" data-filter="*" onClick={ () => filterItems('All') }>All Work</button>
                                    <button class="btn" data-filter=".html" onClick={ () => filterItems('Branding') }>Logo</button>
                                    <button class="btn" data-filter=".wordpress" onClick={ () => filterItems('Apps') }>Mobile Apps</button>
                                    <button class="btn" data-filter=".shopify" onClick={ () => filterItems('social') }>Social Media</button>
                                    <button class="btn" data-filter=".seo" onClick={ () => filterItems('website') }>Websites</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-item-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="project-items mb-n25">
                                    <div class="row">
                                        
                                        <div class="col-xl-6 col-md-6 mb-25 filter-item html">
                                            <Link to="portfolio-details.html" class="project-single-item">
                                                <div class="image img-responsive"><img src="assets/images/projects/project-wide-1.jpg" alt="" /></div>
                                                <div class="content">
                                                    <div class="inner">
                                                        <div class="text">
                                                            <h4 class="title">Brand Identity</h4>
                                                            <span class="catagory">Brand, Product</span>
                                                        </div>
                                                        <div class="icon"><img class="img-fluid" src="assets/images/icons/right-arrow-white.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        <div class="col-xl-6 col-md-6 mb-25 filter-item wordpress">
                                            <Link to="portfolio-details.html" class="project-single-item">
                                                <div class="image img-responsive"><img src="assets/images/projects/project-wide-2.jpg" alt="" /></div>
                                                <div class="content">
                                                    <div class="inner">
                                                        <div class="text">
                                                            <h4 class="title">Brand Identity</h4>
                                                            <span class="catagory">Brand, Product</span>
                                                        </div>
                                                        <div class="icon"><img class="img-fluid" src="assets/images/icons/right-arrow-white.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        <div class="col-xl-4 col-md-6 mb-25 filter-item shopify">
                                            <Link to="portfolio-details.html" class="project-single-item">
                                                <div class="image img-responsive"><img src="assets/images/projects/project-square-1.jpg" alt="" /></div>
                                                <div class="content">
                                                    <div class="inner">
                                                        <div class="text">
                                                            <h4 class="title">Brand Identity</h4>
                                                            <span class="catagory">Brand, Product</span>
                                                        </div>
                                                        <div class="icon"><img class="img-fluid" src="assets/images/icons/right-arrow-white.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        <div class="col-xl-4 col-md-6 mb-25 filter-item seo">
                                            <Link to="portfolio-details.html" class="project-single-item">
                                                <div class="image img-responsive"><img src="assets/images/projects/project-square-2.jpg" alt="" /></div>
                                                <div class="content">
                                                    <div class="inner">
                                                        <div class="text">
                                                            <h4 class="title">Brand Identity</h4>
                                                            <span class="catagory">Brand, Product</span>
                                                        </div>
                                                        <div class="icon"><img class="img-fluid" src="assets/images/icons/right-arrow-white.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                     
                                        <div class="col-xl-4 col-md-6 mb-25 filter-item html">
                                            <Link to="portfolio-details.html" class="project-single-item">
                                                <div class="image img-responsive"><img src="assets/images/projects/project-square-3.jpg" alt="" /></div>
                                                <div class="content">
                                                    <div class="inner">
                                                        <div class="text">
                                                            <h4 class="title">Brand Identity</h4>
                                                            <span class="catagory">Brand, Product</span>
                                                        </div>
                                                        <div class="icon"><img class="img-fluid" src="assets/images/icons/right-arrow-white.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        <div class="col-xl-6 col-md-6 mb-25 filter-item wordpress">
                                            <Link to="portfolio-details.html" class="project-single-item">
                                                <div class="image img-responsive"><img src="assets/images/projects/project-wide-3.jpg" alt="" /></div>
                                                <div class="content">
                                                    <div class="inner">
                                                        <div class="text">
                                                            <h4 class="title">Brand Identity</h4>
                                                            <span class="catagory">Brand, Product</span>
                                                        </div>
                                                        <div class="icon"><img class="img-fluid" src="assets/images/icons/right-arrow-white.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                       
                                        <div class="col-xl-6 col-md-6 mb-25 filter-item shopify">
                                            <Link to="portfolio-details.html" class="project-single-item">
                                                <div class="image img-responsive"><img src="assets/images/projects/project-wide-2.jpg" alt="" /></div>
                                                <div class="content">
                                                    <div class="inner">
                                                        <div class="text">
                                                            <h4 class="title">Brand Identity</h4>
                                                            <span class="catagory">Brand, Product</span>
                                                        </div>
                                                        <div class="icon"><img class="img-fluid" src="assets/images/icons/right-arrow-white.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <Link to="portfolio-list.html" class="btn btn-lg btn-default btn-section-bottom">Other’s
                                        Project</Link>
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
export default Portfolio;