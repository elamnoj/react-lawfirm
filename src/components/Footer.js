import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <hr className="spacer"/>
                        <ul className="list-unstyled list-inline c1 text-center">
                            <li className="list-inline-item">
                                <Link to="/who-we-are" style={{ color: "black" }}>WHO WE ARE</Link>
                            </li>
                            <li className="list-inline-item left">
                                <Link to="/what-we-do"style={{ color: "black" }} >WHAT WE DO</Link>
                            </li>
                            <li className="list-inline-item left">
                                <Link to="/news" style={{ color: "black" }}>NEWS & EVENTS</Link>
                            </li>
                            <li className="list-inline-item left">
                                <Link to="/where"style={{ color: "black" }} >WHERE WE WORK</Link>
                            </li>
                            <li className="list-inline-item left under" id="u">
                                <Link to="/contact"style={{ color: "black" }} >CONTACT US</Link>
                            </li>
                        </ul>
                </div>
            </div>
        )
    }
}
