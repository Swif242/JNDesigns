import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav class="navbar  navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                <img src="./images/JNdesigns.png" style={{ height: 45, borderRadius: 8 }} />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/" >Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/projects" >Projects</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/contact" >Contact</Link>
                    </li>
                </ul>
                <div id="date"></div>
            </div>
        </nav>

    )
}

export default NavBar
