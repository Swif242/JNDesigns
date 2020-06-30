import React from 'react'

function Contact() {
    return (
        <main id="container" className="container-fluid py-3">
        <div id="contact-card" className="card" >
            <div className="card-header" >
                Contact Me
            </div>
            <ul id="contact" className="list-group list-group-flush">
                <li id="phone" className="list-group-item">Phone: click to view </li>
                <li id="email" className="list-group-item">Email: click to view</li>
                <li id="resume" className="list-group-item"><a target="_blank" href="/images/Jeremy Nelson .pdf"
                        >Resume: click to view</a></li>
                <li id="github" className="list-group-item"><a target="_blank" href="https://github.com/Swif242"
                        >GitHub: click to view</a></li>
                <li id="linkedin" className="list-group-item"><a target="_blank"
                        href="https://www.linkedin.com/in/jeremy-nelson-a74404198/" >LinkedIn:
                        click to view</a></li>
            </ul>
        </div>

    </main>
    )
}

export default Contact
