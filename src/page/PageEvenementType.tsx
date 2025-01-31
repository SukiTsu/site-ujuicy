import React from "react"
import { Evenement } from "../ClassEvement"
import managerEvent, { DateFilterType } from "../GetData"
import ContainerEvenement from "../component/ContainerEvenement"
import NavBarre from "../component/NavBarre"

interface Props{
    getEvenement:string
}

const PageEvenementType:React.FC<Props> =({ getEvenement }) => {

    let listEvenement: Evenement[] = []
    
    listEvenement = managerEvent.getEvenementPasse(getEvenement)
   
    let htmlEvenet = []

    if (listEvenement.length == 0){
        htmlEvenet.push("Aucun évènement sont passée");
    }else{
        listEvenement.map(event =>{
            htmlEvenet.push(<ContainerEvenement key={event.titre} evenement={event}/>)
        })
    }

    return(
        <>
            <NavBarre strTitre={`Les évènements ${getEvenement == DateFilterType.PAST ? "passés" : "futures"}`}/>
            <div className="content">
                <h1>Voici nos {getEvenement == DateFilterType.PAST ? "évènements passés" : "prochains évènements"}</h1>
                {htmlEvenet}
            </div>
        </>
    )

}

export default PageEvenementType