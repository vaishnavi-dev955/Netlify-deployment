import React from 'react'

import './MobileView.css'

import Typewriter from 'typewriter-effect'

const MobileAboutView = () =>{
    return(
        <div className="mobile-about-main-container">
            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg"
            alt="Profile pic1" className="mobile-about-image"/>
            <h1 className="about-me-mobile-heading">About Me</h1>
            <p className="mobile-about-para">
            <Typewriter
                options={{
                    strings: ['passionate about web development, implementing and launching new projects Strong in design and integration with intuitive problem-solving skills.Proficient in PYTHON, JAVASCRIPT, and SQL. Ability to translate business requirements into technical solutions.Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.'],
                    autoStart: true,
                    loop: true,
                    }}
                />
            
            </p>
        </div>
    )

}

export default MobileAboutView