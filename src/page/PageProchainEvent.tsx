import "../assets/style/stylePageNextEvent.css"
import AnimatedOnScroll from "../component/AnimatedScroll";
import ContainerNextEvent from "../component/ContainerEventNext";
import Footer from "../component/Footer";
import NavBarre from "../component/NavBarre";

const PageProchainEvent = () => {

    const shows = [
        {
          id: 1,
          title: "Prestation en collaboration avec l'AMF Cosplay",
          date: "15 & 16 Mars 2025",
          location: "Paris Nord Villepinte",
          description: "On se retrouve avec l'AMF Cosplay pour notre deuxième prestation à la Paris Manga",
          image: "./paris_manga.jpg",
        },
      ];

  return (
    <>
    <NavBarre strTitre="Nos prochaines show"/>
    <div className="next-shows-container">
      <h2>Nos Prochains Spectacles</h2>
      <div className="shows-grid">
        {shows.map((show) => (
          <AnimatedOnScroll repeat={false} time={0.1} children={<ContainerNextEvent title={show.title} location={show.location} src={show.image} date={show.date} content={show.description}/> }/>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PageProchainEvent;
