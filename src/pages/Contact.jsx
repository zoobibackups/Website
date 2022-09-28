import React from 'react';
import Banner from './Components/Banner';

function Contact() {

    const [formData, updateFormData] = React.useState();

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        // ... submit to API or something
    };

    // return null

    return (
        <>

            <Banner home={"Home"} title={"Contact us"} liItem={"Contact us"} />

            <div className="form-section section-inner-padding-150">
                <div className="box-wrapper">
                    <div className="section-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2">
                                    <div className="section-content section-content-gap-80 text-center">
                                        <h6 className="section-tag tag-orange">Contact</h6>
                                        <h3 className="section-title">Contact Us</h3>
                                        <span className="icon-seperator"><img src="assets/images/icons/section-seperator-shape.png" alt="" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10 offset-xl-1 col-12">
                                    <form id="contact-form" className="default-form" action="https://whizthemes.com/mail-php/jaber/contact.php" method="post">
                                        <div className="row">
                                            <div className="col-lg-6 mb-20">
                                                <div className="default-form-single-item">
                                                    <input name="name" type="text" placeholder="Name" onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-20">
                                                <div className="default-form-single-item">
                                                    <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-20">
                                                <div className="default-form-single-item">
                                                    <input name="tel" type="tel" placeholder="Phone No." onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-20">
                                                <div className="default-form-single-item">
                                                    <input name="subject" type="text" placeholder="Subject" onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="default-form-single-item">
                                                    <textarea name="message" placeholder="Write a message..." onChange={handleChange} rows="10"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 text-center">
                                                <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-default icon-right submit-btn">Submit Now <i className="icofont-double-right"></i></button>
                                            </div>
                                            <p className="form-messege"></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map-section">
                <div className="box-wrapper">
                    <div className="map-wrapper">

                        <div className="gmap-box">
                            <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2503.734762341127!2d-0.17854998442926714!3d51.13180029591682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSuite%208F%2CKelvin%20House%2C%20Kelvin%20Way%2C%20Crawley%20West%20Sussex%2C%20United%20Kingdom%20RH10%209WE!5e0!3m2!1sen!2s!4v1663166112329!5m2!1sen!2s"></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;