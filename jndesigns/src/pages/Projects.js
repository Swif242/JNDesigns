import React from 'react'
import DayPlanner from '../images/Day-Planner.png';
import EmployeeDirectory from '../images/Employee-Directory.png';
import CashMap from '../images/CashMap.png';
import LaughyTasky from '../images/project-1.png';
import Spiral from '../images/Spiral.png';
import NoteTaker from '../images/Note-Taker.png';
import PasswordGen from '../images/Password-Generator.png';


function Projects() {
    return (
        <div id="projects" className="container">
            <div className="row">
                <div className="col-sm-12 more-features section-description wow fadeIn">
                    <h2 id="projectTitle"><strong>My</strong> Projects</h2>
                    <div className="divider-1 wow fadeInUp"><span></span></div>
                </div>
            </div>

            <div className="row">

                <div className="myProject card" >
                    <img src={Spiral} className="card-img-top CardImg" alt="Screen shot of spiral" />
                    <div className="card-body">
                        <h5 className="card-title">Spiral</h5>
                        <p className="card-text">
                            Scheduling application for students to help keep track of class/assignment dates and times. 
                            This application includes features to keep track of not only dates but also descriptions and user/university info.
                        </p>
                        <h7 className="card-title">Built With: </h7>
                        <p className="card-text">JavaScript, React.js, MaterialUI, Mongoose, Express</p>
                        <a href="https://spiral-planner.herokuapp.com/" className="btn btn-primary SiteLink">Spiral</a>
                        <a href="https://github.com/lvarnum/Spiral" className="btn btn-primary">Site Repo</a>
                    </div>
                </div>

                <div className="myProject card" >
                    <img src={LaughyTasky} className="card-img-top CardImg" alt="Screen shot of laughytasky" />
                    <div className="card-body">
                        <h5 className="card-title">LaughyTasky</h5>
                        <p className="card-text">
                            This is a task managing application that allows you to create and store
                            tasks. I myself know it can be difficult to stick to tasks so I thought it would be fun to get rewarded
                            after completing a task with either a funny joke or an inspirational quote as motivation to stay on
                            tasks.
                        </p>
                        <h7 className="card-title">Built With: </h7>
                        <p className="card-text">JavaScript, JQuery, Bulma CSS, Moment.js</p>
                        <a href="https://jpino7.github.io/TasksForLaughs/" className="btn btn-primary SiteLink">LaughyTasky</a>
                        <a href="https://github.com/jpino7/TasksForLaughs" className="btn btn-primary">Site Repo</a>
                    </div>
                </div>

                <div className="myProject card" >
                    <img src={CashMap} className="card-img-top CardImg" alt="Screen shot of cashmap" />
                    <div className="card-body">
                        <h5 className="card-title">CashMap</h5>
                        <p className="card-text">
                            This is an Expense tracking application that allows you to create and store
                            transactions. I know it can be difficult to to keep track of expenses and sometimes even harder to save
                            but when you can see where your money is going its easier to get better control of spending habits .
                        </p>
                        <h7 className="card-title">Built With: </h7>
                        <p className="card-text">JavaScript, JQuery, Bulma CSS, Express, Express Handlebars, Sequelize</p>
                        <a href="https://secure-river-88188.herokuapp.com/" className="btn btn-primary SiteLink">CashMap</a>
                        <a href="https://github.com/prabjitv/Tracking-Expenses-Project" className="btn btn-primary">Site Repo</a>
                    </div>
                </div>

                <div className="myProject card" >
                    <img src={EmployeeDirectory} className="card-img-top CardImg" alt="screen shot of employee Directory" />
                    <div className="card-body">
                        <h5 className="card-title">Employee-Directory</h5>
                        <p className="card-text">
                            This is a React application that allows an employee or manager to view
                            non-sensitive data about other employees. It would be particularly
                            helpful to be able to filter or sort employees by a particular criteria.
                        </p>
                        <h7 className="card-title">Built With: </h7>
                        <p className="card-text">JavaScript, Bootstrap, Axios, React</p>
                        <a href="https://condescending-aryabhata-9d77ad.netlify.app/" className="btn btn-primary SiteLink">Employee-Directory</a>
                        <a href="https://github.com/Swif242/Employee-Directory" className="btn btn-primary">Site Repo</a>
                    </div>
                </div>

                <div className="myProject card" >
                    <img src={NoteTaker} className="card-img-top CardImg" alt="screen shot of note taker" />
                    <div className="card-body">
                        <h5 className="card-title">Note-Taker</h5>
                        <p className="card-text">
                            An application that can be used to write, save, and delete notes.
                            This application uses an express backend to save and retrieve note data from a JSON file.
                        </p>
                        <h7 className="card-title">Built With: </h7>
                        <p className="card-text">JavaScript, Bootstrap, Express </p>
                        <a href="https://intense-caverns-64198.herokuapp.com/" className="btn btn-primary SiteLink">Note-Taker</a>
                        <a href="https://github.com/Swif242/Note-Taker" className="btn btn-primary">Site Repo</a>
                    </div>
                </div>

                <div className="myProject card" >
                    <img src={DayPlanner} className="card-img-top CardImg" alt="screen shot of day planner" />
                    <div className="card-body">
                        <h5 className="card-title">Day-Planner</h5>
                        <p className="card-text">
                            A simple calendar application that allows the user to save events for each
                            hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by
                            jQuery. Time-blocks change color based on past/ present /future times after the day is over you can use
                            the clean slate button to clear the storage for the next day. This app is also mobile responsive.
                        </p>
                        <h7 className="card-title">Built With: </h7>
                        <p className="card-text">JavaScript, Jquery, Bootstrap, MomentJs </p>
                        <a href="https://swif242.github.io/Work-Day-Planner/" className="btn btn-primary SiteLink">Day-Planner</a>
                        <a href="https://github.com/Swif242/Work-Day-Planner" className="btn btn-primary">Site Repo</a>
                    </div>
                </div>

                <div className="myProject card" >
                    <img src={PasswordGen} className="card-img-top CardImg" alt="screen shot of password generator" />
                    <div className="card-body">
                        <h5 className="card-title">Password-Generator</h5>
                        <p className="card-text">
                            Random password generator that when generate button is pressed the
                            User is prompted to specify how many characters to use between 8-128 characters.The user will then be
                            asked to confirm the type of characters to use before generating a random password to copy and paste for use
                            later.
                        </p>
                        <h7 className="card-title">Built With: </h7>
                        <p className="card-text">JavaScript, Bootstrap </p>
                        <a href="https://swif242.github.io/Random-Password-Generator-/" className="btn btn-primary SiteLink">Password-Generator</a>
                        <a href="https://github.com/Swif242/Random-Password-Generator-" className="btn btn-primary">Site Repo</a>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Projects
