import React, { useEffect, useRef } from "react";
import "../assets/style/styleImageAnimation.css"

type ZoomImageProps = {
  src: string;
  alt: string;
  title: string;
};

const ContainerImageAnimation: React.FC<ZoomImageProps> = ({ src, alt, title }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
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

  return (
    <div className="image-animation-container">
      <img ref={imageRef} src={src} alt={alt} className="zoom-image" />
      <div className="image-animation-overlay">
        <h3 className="image-animation-title">{title}</h3>
      </div>
      
    </div>
  );
};

export default ContainerImageAnimation;