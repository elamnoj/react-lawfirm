import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div id="contact">
                                    <h4>Contact Us</h4>
                                    <hr className="white"/>
                                        <p>Directions/Parking</p>
                                        <p>Career Oppurtunities</p>

                                    <img src="../images/content-navlink-news.jpg" className="img-fluid" style={{ paddingBottom: "15px" }}  alt=""/>

                                            <p><b>News & Events</b></p>
                                            <p>Join our magnificent staff</p>
                        </div>
                    </div>
                    <div className="col-6">
                                <img src="../images/content-05-contact.jpg" className="img-fluid" style={{ paddingBottom: "30px" }}  alt=""/>
                            <p>The office hours are 8am-5pm Monday through Friday</p>
                            <p>689 East South Street</p>
                            <p>Suite 4210</p>
                            <p>Houston, Texas 09324</p>
                            <p></p>
                            <p>PH: 555.555.5555</p>
                            <p></p>
                            <p>FAX: 555.555.5555</p>
                            <p></p>
                            <p>Contact Rosemary Sage at <a href="mailto:">rosemary@lawfirm.com</a></p>
                    </div>
                            <div className="col-3">
                                <div className="where">
                                    <img src="../images/content-link-where.jpg" className="img-fluid" style= {{ paddingBottom: "15px" }} alt=""/>
                                    <h6 style={{ color: "#800020" }}><b>Where We Work</b></h6>
                                    <p style={{ color: "#800020" }}>Find out more about our work coverage area</p>

                                    <img src="../images/content-link-reputation.jpg" className="img-fluid" style={{ paddingBottom: "15px" }}  alt=""/>
                                            <h6>News & Events</h6>
                                            <p>Join our magnificent firm and do more stuff with us</p>
                                </div>
                            </div>


                        </div>

                    </div>

                </main>
            </div>
        )
    }
}
