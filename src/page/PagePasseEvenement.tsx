import "../assets/style/stylePagePrestation.css"
import "../assets/style/component/stylePasseEvenement.css"
import "../assets/style/styleIndex.css"
import NavBarre from "../component/NavBarre";
import Footer from "../component/Footer";

const PagePastEvents = ({}) => {

    const pastEvents = [
        {
          title: "Notre première prestation, à la Paris Manga !",
          date: "12 Juillet 2023",
          description: "En collaboration avec l'AMF Cosplay, nous avons eu l'opportunité d'avoir une petite scène",
          video: "/video_bk.mp4"
        },
      ];

  return (
    <>
    <NavBarre strTitre="Nos prestations passé"/>
    <div className="past-events-container">
      <h2>Nos Prestations Passées</h2>
      <div className="events-grid">
        {pastEvents.map(event => (
          
            <div className="event-card" key={event.title}>
                <video autoPlay muted loop className="event-video">
                    <source src={event.video} type="video/mp4"></source>
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
    <Footer />
    </>
  );
};

export default PagePastEvents;