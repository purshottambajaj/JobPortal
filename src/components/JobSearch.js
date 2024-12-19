import React from 'react'

const JobSearch = () => {
  return (
    <div>
           <main className="main-content">
                <section className="job-search">
                    <h2>BRINGING YOU THE PERFECT JOB!</h2>
                    <p>11,000+ JOBS to Apply</p>
                    <div className="search-container">
                        <input type="text" placeholder="Search Jobs Now" />
                        <button className="search-btn">Search</button>
                        <button className="view-jobs-btn">View Jobs</button>
                        <button className="register-free-btn">Register For FREE</button>
                    </div>
                </section>

                <section className="quick-job-search">
                    <h2>Quick Job Search</h2>
                    <div className="tags">
                        <a href="#">#Fresher</a>
                        <a href="#">#Work From Home</a>
                        <a href="#">#WFH</a>
                        <a href="#">#IT</a>
                        <a href="#">#HR</a>
                        <a href="#">#Back Office</a>
                        <a href="#">#BPO Jobs</a>
                        <a href="#">#ITES</a>
                        <a href="#">#Finance</a>
                        <a href="#">#Accounts</a>
                        <a href="#">#Medical</a>
                        <a href="#">#Pharma</a>
                        <a href="#">#Manager</a>
                        <a href="#">#Developer</a>
                        <a href="#">#Marketing</a>
                        <a href="#">#Engineering</a>
                        <a href="#">#Non Government Jobs</a>
                    </div>
                </section>
            </main>

    </div>
  )
}

export default JobSearch