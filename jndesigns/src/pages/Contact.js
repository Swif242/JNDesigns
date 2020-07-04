import React from 'react'


function Contact() {
    return (

<div className="about-us-container section-container">
	        <div className="container">
	            <div className="row">
	                <div className="col-sm-12 about-us section-description wow fadeIn">
	                    <h2><strong>Contact</strong> Me</h2>
	                    <div className="divider-1 wow fadeInUp"><span></span></div>
	                </div>
	            </div>
	            <div className="row">
	                <div className="col-sm-4 about-us-box wow fadeInUp">
		                <div className="about-us-photo">
		                	<img src="assets/img/about/1.jpg" alt="" data-at2x="assets/img/about/1.jpg" />
		                </div>
	                    <h3>Resume</h3>
	                    <p>View my Resume here.</p>
	                    <div className="about-us-social">
		                	<a href="https://docs.google.com/document/d/1XP4_Jo1Zz9M9NRXlgwHiE2zBYbHEoc_dDfTuTt45_PA/edit?usp=sharing"><i className="fa fa-user-circle-o"></i></a>
		                </div>
	                </div>
	                <div className="col-sm-4 about-us-box wow fadeInDown">
		                <div className="about-us-photo">
		                	<img src="assets/img/about/2.jpg" alt="" data-at2x="assets/img/about/2.jpg" />
		                </div>
	                    <h3>LinkedIn</h3>
	                    <p>Visit my LinkedIn here</p>
	                    <div className="about-us-social">
		                	<a href="https://www.linkedin.com/in/jeremy-nelson-a74404198/"><i className="fa fa-linkedin-square"></i></a>
		                </div>
	                </div>
	                <div className="col-sm-4 about-us-box wow fadeInUp">
		                <div className="about-us-photo">
		                	<img src="assets/img/about/3.jpg" alt="" data-at2x="assets/img/about/3.jpg" />
		                </div>
	                    <h3>GitHub</h3>
	                    <p>Visit my GitHub here.</p>
	                    <div className="about-us-social">
		                	<a href="https://github.com/Swif242"><i className="fa fa-github"></i></a>
		                </div>
	                </div>
	            </div>
	        </div>
        </div>

    )
}

export default Contact
