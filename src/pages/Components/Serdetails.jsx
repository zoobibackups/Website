import React from 'react';
import Process from './Ourprocess';
import { useLocation } from 'react-router-dom'

function Serdetails() {
    const location = useLocation()
    const props = location.state
    return (
        <>
            <div className="service-details-section section-top-gap-150">
                <div className="box-wrapper">
                    <div className="service-details-wrapper">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="custome-container-with-sidebar d-flex flex-column-reverse flex-lg-row">
                                        <div className="container-width-80">
                                            <div className="default-text-content">
                                                <div className="default-content-hero-image">
                                                    <img className="img-fluid" src={props.Serviceimg} alt="" />
                                                </div>
                                                <h2 className="subtitle">{props.mainhding}</h2>
                                                <p>{props.pagepara}</p>
                                                <p><strong>  {props.subtitle} </strong></p>
                                                <p> {props.Spara} </p>
                                                <p> {props.Spara2} </p>
                                                <ul>
                                                    <li> {props.firstli} </li>
                                                    <li> {props.secongli} </li>
                                                    <li> {props.thirdli} </li>
                                                </ul>
                                                <ul className="default-iconic-item">
                                                    <Process />
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
        </>
    )
}
export default Serdetails;