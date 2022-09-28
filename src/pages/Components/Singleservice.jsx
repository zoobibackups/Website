import React from 'react';
import { Link } from "react-router-dom";
import { ServiceDropdown } from '../../Layouts/Dropdowndata';

function Singleservice({ id, img, img2, item, description, heading, serlink }) {
    return (
        <>

            <div className="service-single-item service-single-item-style-2 swiper-slide">
                <div className="icon">
                    <img src={img} alt="" />
                    <img src={img2} alt="" />
                </div>
                <div className="content">
                    <h5 className="title"><Link to={serlink} state={item}>{heading}</Link>
                    </h5>
                    <p>{description}</p>
                    <Link className="text-btn" to={serlink} state={item} >View Details
                        <span className="arrow-icon">
                            <img src="assets/images/icons/right-arrow-blue.png" alt="" />
                            <img src="assets/images/icons/right-arrow-white.png" alt="" />
                        </span></Link>
                </div>
            </div>
        </>
    )
}

function Single() {

    const Service = ServiceDropdown.map((card, i) => {
        return (
            <Singleservice
                id={card.id}
                img={card.img}
                img2={card.img2}
                item={card}
                description={card.description}
                heading={card.heading}
                serlink={card.serlink}
            />
        )
    })

    return (
        <>
            {Service}
        </>
    )
}

export default Single;