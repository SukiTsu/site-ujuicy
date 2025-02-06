import React from "react"
import "../assets/style/component/styleNextEvent.css"

interface Props{
    title:string
    src:string
    date:string
    location:string
    content:string
}

const ContainerNextEvent:React.FC<Props> = ({title,src,date,location,content}) => {
    return (
    <>
        <div key={title} className="show-card">
            <img src={src} alt={title} className="show-image" />
            <div className="show-info">
              <h3>{title}</h3>
              <p className="show-date">📅 {date}</p>
              <p className="show-location">📍 {location}</p>
              <p className="show-description">{content}</p>
            </div>
          </div>
    </>
    )
}

export default ContainerNextEvent