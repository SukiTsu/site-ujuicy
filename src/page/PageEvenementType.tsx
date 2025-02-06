import "../assets/style/stylePagePrestation.css"
import "../assets/style/styleIndex.css"
import NavBarre from "../component/NavBarre";

const PageEvents = ({}) => {

    const pastEvents = [
        {
          id: 1,
          title: "Notre première prestation, à la Paris Manga !",
          date: "12 Juillet 2023",
          description: "En collaboration avec l'AMF Cosplay, nous avons eu l'opportunité d'avoir une petite scène",
          video: "./public/video_bk.mp4",
          poster: "./public/suki.jpg"
        },
      ];

  return (
    <>
    <NavBarre strTitre="Nos prestations passé"/>
    <div className="past-events-container">
      <h2>Nos Prestations Passées</h2>
      <div className="events-grid">
        {pastEvents.map(event => (
            <div className="event-card">
                <video autoPlay muted loop>
                    <source src="./public/video_bk.mp4" type="video/mp4" className="event-video"></source>
                </video>
            <div className="event-info">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PageEvents;
