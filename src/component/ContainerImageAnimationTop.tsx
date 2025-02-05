import React, { useEffect, useRef } from "react";
import "../assets/style/styleImageTop.css"
import "../assets/style/styleImageAnimation.css"

export enum TypeOfAnimation{
  TOP = "top",
  BIG = "big"
}

interface Props{
  src:string
  classNameDiv:string
  type:string
  overlay:string
  repeat:boolean
}

const AnimatedImageTop:React.FC<Props> = ({ src, classNameDiv, type, overlay="", repeat=false }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else if (repeat) {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1, // Déclenche lorsque 10% de l'image est visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  if (type == TypeOfAnimation.TOP){
    return (
      <div className={classNameDiv}>
          <img ref={imageRef} src={src} alt={src} className="animated-image" />
      </div>
    );
  }
  return (
    <div className="image-animation-container">
      <img ref={imageRef} src={src} alt={src} className="zoom-image" />
      <div className="image-animation-overlay">
        <h3 className="image-animation-title">{overlay}</h3>
      </div>
    </div>
  )
};

export default AnimatedImageTop;
