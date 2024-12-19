import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="navbar">
                <div className="logo">
                    <h1>job<span className="highlight">Ringer</span></h1>
                    <p>India's Job Portal</p>
                </div>
                <nav className="nav-links">
                    <a href="#">Jobs</a>
                    <a href="#">Active Employers</a>
                    <a href="#">Job Blogs</a>
                    <a href="#">Pricing</a>
                    <a href="#" className="btn jobseeker-login">Jobseeker Login</a>
                    <a href="#" className="btn employer-login">Employer Login</a>
                </nav>
            </header>

    </div>
  )
}

export default Header