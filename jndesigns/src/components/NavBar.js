import React from 'react';
import { Link } from "react-router-dom";


function NavBar() {
    return (

        // <nav className="navbar navbar-inverse navbar-fixed-top navbar-no-bg" role="navigation">
        //     <div className="container">
        //         <div className="navbar-header">
        //             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
        //                 <span className="sr-only">Toggle navigation</span>
        //                 <span className="icon-bar"></span>
        //                 <span className="icon-bar"></span>
        //                 <span className="icon-bar"></span>
        //             </button>
        //             <Link className="navbar-brand" to="/">JNDesigns</Link>
        //         </div>
        //          {/* Collect the nav links, forms, and other content for toggling  */}
        // 		<div className="collapse navbar-collapse" id="top-navbar-1">
        //             <ul className="nav navbar-nav navbar-right">
        //                 <li><Link className="scroll-link" to="/">Home</Link></li>
        //                 <li><Link className="scroll-link" to="/about">About Me</Link></li>
        //                 <li><Link className="scroll-link" to="/projects">Projects</Link></li>
        //                 <li><Link className="scroll-link" to="contact">Contact</Link></li>
        //                 {/* <li><Link className="scroll-link" href="#about-us">About</Link></li> */}
        //             </ul>
        //         </div>
        //     </div>
        // </nav>



        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                {/* <img src={Logo} alt="Logo" style={{ height: 45, borderRadius: 8 }} /> */}
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects" >Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" >Contact</Link>
                    </li>
                </ul>
                {/* <div id="date"></div> */}
            </div>
        </nav>

    )
}

export default NavBar
