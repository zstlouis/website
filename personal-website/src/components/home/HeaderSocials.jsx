import React from 'react'

const HeaderSocials = () => {

  const linkedInUrl = 'https://www.linkedin.com/in/zach-st-louis/'
  const githubUrl = 'https://github.com/zstlouis'
  return (
    <div className='home_socials'>
        <a href='' className='home_social-link' target='_blank'>
            <ul className="icon-social-linkedin" onClick={() => (window.open(linkedInUrl))}></ul>
        </a>
        <a href='' className='home_social-link' target='_blank'>
            <ul className="icon-social-github" onClick={() => (window.open(githubUrl))}></ul>
        </a>
    </div>
  )
}

export default HeaderSocials