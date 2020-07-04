import React from 'react'
import Jeremy from '../images/Jeremy.JPG'

export default function Home() {
	return (

		<div className="more-features-container section-container section-container-gray-bg">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 more-features section-description wow fadeIn">
						<h2><strong>About</strong> Me</h2>
						<div className="divider-1 wow fadeInUp"><span></span></div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-5 more-features-box wow fadeInLeft">
						<img src={Jeremy} alt="Jeremy" />
					</div>
					<div className="col-sm-7 more-features-box wow fadeInUp">

						<div className="more-features-box-text">
							<div className="more-features-box-text-icon">
								<i className="fa fa-user"></i>
							</div>
							<h3>Background</h3>
							<div className="more-features-box-text-description">
								<p classNameName="text-wrap" classNameName="card-text">
									My name is Jeremy, I was born and raised in Tucson, AZ. I
									am aspiring to be a full stack Web Developer. Theres something about taking a bunch of text
									on a screen that looks like gibberish to the average person and turning it into a functioning website or program,
									almost like magic! I am the kind of person that likes to build
									things with my hands and implement different ideas on how to build things from scratch or fix things when they
									break I like to figure out how things work. Majority of my background experience is in the automotive and trucking industry, I started out 
									as an automotive technician after growing up around race cars in a household that revovlved around anything with an engine and lots of power.
									Then decided I wanted to get paid to travel so i became an OTR (over the road) truck driver and after a few years of living in an 18 wheeler with
									my wife, truck stop to truck stop we wanted to come back home and settle down.
										
					 			</p>
							</div>
						</div>
						<div className="more-features-box-text">
							<div className="more-features-box-text-icon">
								<i className="fa fa-code"></i>
							</div>
							<h3>Coding Experience</h3>
							<div className="more-features-box-text-description">
								I graduated as a Full Stack Web Developer from the University of Arizona Coding Bootcamp, developing numurouse 
								simple yet complex web applications throught the course. Before attending the coding bootcamp i always had a passion for
								cool electronics and gadgets. I learned about computers when i was about 9yr on a windows 95 tinkering with settings and exploring system files, then 
								taking it apart to see what was inside, then when the first gen PSP came out my friends and i found a way to hack it and make it do things it wasn't meant 
								to do, after that I was hooked into the possibilities one could achieve through code.
	                    	</div>
						</div>
						<div className="more-features-box-text">
							<div className="more-features-box-text-icon">
								<i className="fa fa-cogs"></i>
							</div>
							<h3>Hobbies</h3>
							<div className="more-features-box-text-description">
								Some of my hobbies outside of coding include performance mechanics, carpentry, and cosplay armor like Iron man 
								suits, and spending time with my family.
	                    	</div>
						</div>
						{/* <div className="more-features-box-text">
							<div className="more-features-box-text-icon">
								<i className="fa fa-twitter"></i>
							</div>
							<h3>Minim veniam quis nostrud</h3>
							<div className="more-features-box-text-description">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
								Ut wisi enim ad minim veniam, quis nostrud.
	                    	</div>
						</div> */}

					</div>
				</div>
			</div>
		</div>















		// <div id="container">
		//     <div classNameName="row">
		//         <div classNameName="col-sm-3">


		//             <img src="./" classNameName="img-fluid" classNameName="rounded float-left" alt="picture of Jeremy"
		//                 height="450px" />
		//         </div>

		//         {/* bio section  */}
		//         <div classNameName="col-sm-9" >
		//             <p classNameName="text-wrap" classNameName="card-text"> 
		//             My name is Jeremy, I was born and raised in Tucson, AZ. I
		//             am aspiring to be a full stack Web Developer. Theres something about taking a bunch of text
		//             on
		//             a
		//             screen that looks like gibberish to the average person and turning it into a functioning website or program,
		//             almost like magic! I am the kind of person that likes to build
		//             things with my hands and implement different ideas on how to build things from scratch or fix things when they
		//             break I like to figure out how things work. Since I was a kid I enjoyed computers and gadgets, I would always
		//             try to tinker with the settings and see what changed. After I got bored with what the manufacture settings had
		//             to offer,
		//             a couple of my close friends and I wanted to see what else we can make different devices do, so we did a lot
		//             of
		//             digging
		//             and with some trial and error we were able to basically hack things like the old cellphones and old PSP first gens  , we made custom
		//             icons/themes and using the built in IR sensor turned it into a homemade universal remote control,<em>ya know just kid stuff</em>.
		//             </p>
		//             <p classNameName="text-wrap" classNameName="card-text">
		//                 Even though i've always had an interest in electronics my main passion growing up has always been in anything that has an
		//                 engine and a gas tank.
		//                 I taught
		//                 myself how to fix and build old dirt-bikes an ATV's, until I got older and started building and modifying my
		//                 own cars. The skills i've learned working
		//                 in the automotive industry are similar to the type of skills used in coding, such as debugging and diagnosing
		//                 problems
		//                 through either reverse engineering or rebuilding from scratch, and to me both are kinda like building a very
		//                 complex puzzle that you really need
		//                 to be able to visualize and experiment as you build.
		//             </p>
		//         </div>
		//     </div>
		// </div>
	)
}
