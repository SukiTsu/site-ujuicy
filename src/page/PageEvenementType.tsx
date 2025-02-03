import React, { useEffect, useState } from "react"
import { Evenement } from "../ClassEvement"
import managerEvent, { DateFilterType } from "../GetData"
import ContainerEvenement from "../component/ContainerEvenement"
import NavBarre from "../component/NavBarre"
import Loader from "../component/ContainerLoader"

interface Props{
    getEvenement:string
}

const PageEvenementType:React.FC<Props> =({ getEvenement }) => {

    let listEvenement: Evenement[] = []
    listEvenement = managerEvent.getEvenementPasse(getEvenement)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [allEvent, setAllEvent] = useState<JSX.Element[]>([]);

    async function generHmlt(){
        let tmpHtmlEvenet : JSX.Element[] = [];
        if (listEvenement.length == 0){
            if (!isLoading){
                tmpHtmlEvenet.push(<Loader />,<Loader />,<Loader />)
            }else{
            tmpHtmlEvenet.push(<p>Aucun évènement sont passée</p>);
            }
        }else{
            listEvenement.map(event =>{
                tmpHtmlEvenet.push(<ContainerEvenement key={event.titre} evenement={event}/>)
            })
        }
        return tmpHtmlEvenet
    }

    useEffect(() => {
        if (!isLoading){
            console.log("Les données ne sont pas chargées, tentative de fetch...");
            fetchData();
            setIsLoading(true)
        }
      }, []); // Exécution une seule fois au montage

      const fetchData = async () => {
        await managerEvent.fetchData();
        setAllEvent(await generHmlt())
        setIsLoading(false); // Une fois les données chargées
      };

    return(
        <>  
            <NavBarre strTitre={`Les évènements ${getEvenement == DateFilterType.PAST ? "passés" : "futures"}`}/>
            <div className="content">
                <h1>Voici nos {getEvenement == DateFilterType.PAST ? "évènements passés" : "prochains évènements"}</h1>
                <div className="events-grid">
                    {isLoading ? [<Loader />,<Loader />,<Loader />] : ""}
                    {allEvent}
                </div>
            </div>
        </>
    )

}

export default PageEvenementType