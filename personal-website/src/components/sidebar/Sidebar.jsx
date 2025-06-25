import React from 'react'
import "./sidebar.css"
import Logo from "../../assets/logo-icon.jpg"

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav_logo">
      <img src={Logo} alt= 'logo' />
      </a>

      <nav className='nav'>
        <div className='nav_menu'>
          <ul className='nav_list'>
            <li className='nav_item'>
              <a href="#home" className="nav_link">
                <i className="icon-home"></i>
                  <span className="nav_item-tip">Home</span>
                </a>
          
            </li>
            <li className='nav_item'>
              <a href="#about" className="nav_link">
                <i className="icon-user-following"></i>
                <span className="nav_item-tip">About</span>
              </a>
            </li>
             <li className='nav_item'>
              <a href="#resume" className="nav_link">
                <i className='icon-graduation'></i>
                <span className="nav_item-tip">Resume</span>
              </a>
            </li>
            <li className='nav_item'>
              <a href="#portfolio" className="nav_link">
                <i className="icon-briefcase"></i>
                <span className="nav_item-tip">Projects</span>
              </a>
            </li>
            <li className='nav_item'>
              <a href="#contact" className="nav_link">
                <i className="icon-envelope-letter"></i>
                <span className="nav_item-tip">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='nav_footer'>
        <span className="copyright">&copy; 2025</span>
      </div>
    </aside>
  )
}

export default Sidebar