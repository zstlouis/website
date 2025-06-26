import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline_item">
      <i className={props.icon}></i>
      <h4 className="timeline_company">{props.company}</h4>

      <h3 className="timeline_title">{props.title}</h3>
      <span className="timeline_date">{props.year}</span>
      <p className="timeline_text">{props.desc}</p>
    </div>
  )
}

export default Card