import React from "react";

interface Props{
    src:string
    title:string
    content:string
    date:string
}

const Video:React.FC<Props> = ({src,title,content,date}) =>  {
    return (
        <>
        <div className="event-card">
            <video controls className="w-full max-w-3xl rounded-lg shadow-lg">
                <source src={src} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            <div className="event-info">
                <h3>{title}</h3>
                <p className="event-date">{date}</p>
                <p className="event-description">{content}</p>
            </div>
        </div></>
    );
  }

export default Video
  