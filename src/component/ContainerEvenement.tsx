import { useState } from "react";
import { Evenement } from "../ClassEvement";
import "../assets/style/styleContainerEvenement.css";

interface Props{
    evenement:Evenement
}

const ContainerEvenement:React.FC<Props> =({evenement}) => {
    const [selectedEvent, setSelectedEvent] = useState<Evenement | null>(null);

    return (
      <div className="container">
        
            <div key={evenement.titre} className="event-card" onClick={() => setSelectedEvent(evenement)}>
              
                <iframe src={`https://drive.google.com/file/d/${evenement.imagId}/preview`}></iframe>
              
            
              <h3>{evenement.titre}</h3>
              <p>Date : {evenement.dateToString()}</p>
            </div>

  
        {/* Modal */}
        {selectedEvent && (
          <div className="modal" onClick={() => setSelectedEvent(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => setSelectedEvent(null)}>&times;</span>
              <h2>{selectedEvent.titre}</h2>
              <iframe src={`https://drive.google.com/file/d/${evenement.imagId}/preview`}></iframe>
              {/*<img src={selectedEvent.imgSrc} alt={selectedEvent.titre} />*/}
              {/*<p><strong>Date :</strong> {selectedEvent.date.toDateString()}</p>*/}
              <p>{selectedEvent.contenu}</p>
              <p><strong>Durée :</strong> {selectedEvent.duree}</p>
              <p><strong>Prix :</strong> {selectedEvent.prix} €</p>
            </div>
          </div>
        )}
      </div>
    );
  };

export default ContainerEvenement;
