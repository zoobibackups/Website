import React, { useState } from 'react';
import { TabsData } from './Tabs';
import Modal from './Modal';
import Button from 'react-bootstrap/Button';



function Example() {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            
            <div class="modal" tabIndex="-1" show={show} onHide={handleClose}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close" onClick={handleClose}></button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleClose}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}





const TabsContent = () => {
    // const [openModal, setOpenModal] = useState(false);
    const [items, setItems] = useState(TabsData);
    const filteritem = (cateItem) => {
        const updatedItems = TabsData.filter((curElem) => {
            return curElem.category === cateItem;
        });

        setItems(updatedItems);
    }

    return (
        <>
            
            <div className="project-section section-top-gap-150">
                <div className="box-wrapper">
                    <div className="project-filter-wrapper section-fluid-170">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="projects-gallery-filter-nav">
                                        <button className="btn active" onClick={() => setItems(TabsData)}>All</button>
                                        <button className="btn" onClick={() => filteritem('Logo')} >Logo</button>
                                        <button className="btn" onClick={() => filteritem('App')}>Mobile Apps</button>
                                        <button className="btn" onClick={() => filteritem('Social')}>Social Media</button>
                                        <button className="btn" onClick={() => filteritem('Web')}>Website</button>
                                        {/* <button onClick={ () => {setOpenModal(true);}}>Modal</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-item-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="project-items mb-n25">
                                        <div className="row">
                                            {
                                                items.map((elem) => {
                                                    const { id, tabImage, tabLinks } = elem;

                                                    return (
                                                        

                                                        <div className="col-xl-4 col-md-6 mb-25 filter-item shopify" key={id}>
                                                            <a href="" 
                                                                // onClick={handleShow} 
                                                                className="project-single-item">
                                                                <div className="image img-responsive"><img src={tabImage} alt="" /></div>
                                                                <div className="content">
                                                                    <div className="inner">
                                                                        <div className="text">
                                                                            <h4 className="title" >Read More</h4>
                                                                            <span className="catagory">Portfolio, Project</span>
                                                                        </div>
                                                                        <div className="icon"><img className="img-fluid" src="assets/images/icons/right-arrow-white.png" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            {/* {show && <Modal closeModal = { handleClose} />} */}
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <a href="portfolio-list.html" className="btn btn-lg btn-default btn-section-bottom">Other’s
                                            Project</a>
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

export default TabsContent;