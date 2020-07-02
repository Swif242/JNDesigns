import React from 'react'
import { Link } from "react-router-dom";

export default function Landing() {
    return (


        //  Home 
        <div className="top-content">
        	
            <div className="inner-bg">
                <div className="container">
                	
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 text">
                            <h1 className="wow fadeInLeftBig">Jeremy <strong>Nelson</strong></h1>
                            <div className="description wow fadeInLeftBig">
                            	<p>
	                            	I am a full stack web developer
                            	</p>
                            </div>
                            <div className="top-big-link wow fadeInUp">
                            	<Link className="btn btn-link-1" to="/projects">Projects</Link>
                            	<Link className="btn btn-link-2 scroll-link" to="/about">About Me</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>








        // <section id="landingPage" classNameName=" h-100 " >
        //     <div  classNameName="row h-100 justify-content-center align-items-center">
        //         <div classNameName="col">
        //             <h1 classNameName="display-4">Hello, Im Jeremy!</h1>
        //             <p classNameName="lead"> A Full Stack Developer.</p>
        //             <hr classNameName="my-4" />
        //         </div>
        //     </div>
        // </section>
    )
}
