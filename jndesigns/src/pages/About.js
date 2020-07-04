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
								<p className="text-wrap card-text" >
									My name is Jeremy, I was born and raised in Tucson, AZ. I
									am aspiring to be a full stack Web Developer. Theres something about taking a bunch of text
									on a screen that looks like gibberish to the average person and turning it into a functioning website or program,
									almost like magic! I am the kind of person that likes to build
									things with my hands and implement different ideas on how to build things from scratch or fix things when they
									break I like to figure out how things work. Majority of my background experience is in the automotive and trucking industry, I started out 
									as an automotive technician after growing up around race cars in a household that revolved around anything with an engine and lots of power.
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
								I graduated as a Full Stack Web Developer from the University of Arizona Coding Bootcamp, developing numerous 
								simple yet complex web applications throughout the course. Before attending the coding bootcamp i always had a passion for
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
								Some of my hobbies outside of coding include performance mechanics, carpentry, motorcycles
							    and spending time with my family.
	                    	</div>
						</div>

					</div>
				</div>
			</div>
		</div>

	)
}
