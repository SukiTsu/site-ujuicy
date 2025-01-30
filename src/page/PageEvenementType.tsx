import React from "react"
import { Evenement } from "../ClassEvement"
import managerEvent from "../GetData"
import ContainerEvenement from "../component/ContainerEvenement"

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
        <div>
            <a href="/">Retour</a>
            {htmlEvenet}
        </div>
    )

}

export default PageEvenementType