import { DateFilterType } from "../GetData"

const Home =({}) => {

    const id ="1fN2ZtjPIAVAAsC15VAxHZPcEJ-lb32oF";

    return(
        <>
            <h1>Page d'accueil</h1>
            <a href={`/evenement/${DateFilterType.PAST}`}>Voir les évènement passé</a>
            <a href={`/evenement/${DateFilterType.FUTURE}`}>Voir les évènement future</a>
            <img src="https://drive.google.com/uc?export=view&id=1fN2ZtjPIAVAAsC15VAxHZPcEJ-lb32oF"/>

        </>
    )

}

export default Home