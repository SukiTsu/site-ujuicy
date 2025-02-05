import "../assets/style/component/styleCard.css"

interface Props{
    src:string;
    titre:string;
    content:string;
}

const Card:React.FC<Props> =({src,titre,content}) => {

    return (
        <div className="card">
            <div className="card-image">
                <img src={src} alt={src} />
            </div>
            <div className="card-content">
                <h3>{titre}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
  };

export default Card;
