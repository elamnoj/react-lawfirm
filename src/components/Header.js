import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


export const Header = (props) => {
   
        const { currentUser } = useAuth();

        // const handleLogin = () => {
        //     props.signIn();
        // }

        // const handleLogout = () => {
        //     props.signOut();
        // }

        return (
            <div>
                <header>
                    <div className="col-md 8 offset-md-0">
                   
            
                                <li id="login">
                                    <Link onClick={props.signIn} to="" className="btn btn-dark">Login</Link>
                                </li>
                                
                                <li id="login">
                                <Link onClick={props.SignOut} type="button" to="" className="btn btn-dark">Logout</Link>
                                </li>
                     
                            <br/><br/><br/><br/>
                            <Link to="/"><img src="https://picsum.photos/85/75" alt="logo" Align="left" HSPACE="10"/>
                            <div className="serif">
                                <h2 className="b">NIELSEN, ZEHE</h2>
                                <h2 className="a"> ANTAS, P.C.</h2>
                            </div></Link>
                            <br/> <br/>
                            <hr className="spacer"/>
                                <ul id= "nav" className="list-unstyled list-inline f1" >
                                    <li className="list-inline-item" style={{ color: "black" }} id="u">
                                        <NavLink to="/who-we-are" style={{ color: "black" }} >WHO WE ARE</NavLink>
                                    </li>
                                    <li className="list-inline-item left" id="u">
                                        <Link to="/what-we-do" style={{ color: "black" }}>WHAT WE DO</Link>
                                    </li>
                                    <li className="list-inline-item left" id="u">
                                        <Link to="/news" style={{ color: "black" }}>NEWS & EVENTS</Link>
                                    </li>
                                    <li className="list-inline-item left"id="u">
                                        <NavLink to="/where" style={{ color: "black" }}>WHERE WE WORK</NavLink>
                                    </li>
                                    <li className="list-inline-item left under" id="u">
                                        <Link to="/contact" style={{ color: "black" }} >CONTACT US</Link>
                                    </li>
                                </ul>
                                <hr className="spacer"/>
                    </div>
                </header>
            </div>
        )
    }
