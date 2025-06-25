import React from 'react'
import "./home.css"
import Me from "../../assets/me-avatar.jpg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
const Home = () => {
   return  (
        <section className="home container" id="home">
            <div className='intro'>
                <img src={Me} alt='' className='home_img'/>
                <h1 className='home_name'>Zach St. Louis</h1>
                <span className='home_education'>Staff Software Engineer</span>
                <HeaderSocials/>

                <a href="#contact" className="btn">Contact</a>

                <ScrollDown/>
            </div>
        </section>
    )
}

export default Home