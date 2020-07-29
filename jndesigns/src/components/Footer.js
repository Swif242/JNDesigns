import React from 'react'

function Footer() {
  return (

    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 footer-social">
            <a href="https://docs.google.com/document/d/1XP4_Jo1Zz9M9NRXlgwHiE2zBYbHEoc_dDfTuTt45_PA/edit?usp=sharing"><i className="fa fa-user-circle-o"></i></a>
            <a href="https://www.linkedin.com/in/jeremy-nelson-a74404198/"><i className="fa fa-linkedin-square"></i></a>
            <a href="https://github.com/Swif242"><i className="fa fa-github"></i></a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 footer-copyright">
            &copy; Portfolio by <strong>Jeremy Nelson</strong>.
            <p>Email: <strong><a href="mailto:JRNels242@Gmail.com">JRNels242@Gmail.com</a></strong>.</p>
          </div>
        </div>
      </div>
    </footer >

  )
}

export default Footer
