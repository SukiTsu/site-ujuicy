import "../assets/style/styleContainerButtonImage.css";

interface Props{
    src:string;
    img:string;
    lien:string;
}

const ContainerButtonImage:React.FC<Props> =({src,img,lien}) => {

    return (
        <>
        
            <div className="container-button">
            <a href={lien}>
                    <div key={src} className="card-button">
                        <img src={img}/>
                        <h3>{src}</h3>
                    </div>
                </a> 
            </div>
        
      </>
    );
  };

export default ContainerButtonImage;
