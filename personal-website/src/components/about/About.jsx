import React from 'react'
import "./about.css"
import Image from "../../assets/profile-pic-about.jpg";
import Resume from "../../assets/resume/Zach_Resume.pdf"
const About = () => {

  const about_me = 'Hello my name is Zach St. Louis, and I am Staff Software Engineer @ IBM.  \
              I have experience troubleshooting and debugging complex technical issues as well as \
              strong collaboration and effective communication skills. Outside of work I enjoy golfing, \
              fishing, snowboarding and exercising!'
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image} alt="" className='about_img'/>

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description"> {about_me}
            </p>
              <a className='btn' href={Resume} download="Resume">Download CV</a>
          </div>
          <div className="about_skills grid">
            <div className='skills_data'>
              <div className='skills_titles'>
                <h3 className='skills_name'>Development</h3>
                <span className='skills_number'>90%</span>
              </div>
              <div className='skills_bar'>
                <span className='skills_percentage development'></span>
              </div>
            </div>

            <div className='skills_data'>
              <div className='skills_titles'>
                   <h3 className='skills_name'>Debugging</h3>
                <span className='skills_number'>80%</span>
              </div>
              <div className='skills_bar'>
                <span className='skills_percentage debugging'></span>
              </div>
            </div>

            <div className='skills_data'>
              <div className='skills_titles'>
                   <h3 className='skills_name'>Communication</h3>
                <span className='skills_number'>85%</span>
              </div>
              <div className='skills_bar'>
                <span className='skills_percentage communication'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About