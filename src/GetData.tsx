import { Evenement } from "./ClassEvement";

export enum DateFilterType {
    PAST = "past",
    FUTURE = "future"
}

export class ManagerEvent {
    listEvent: Evenement[] = [];


    /**
     * Récupère les évènement passé ou future
     * @param filterType élément de comparaison, past pour récupérer les évenements passé, future pour les avenirs
     * @returns 
     */
    getEvenementPasse( filterType:string ) : Evenement[]{

        const now = new Date(); // Date actuelle

        if (filterType !== DateFilterType.PAST && filterType !== DateFilterType.FUTURE) {
            filterType = DateFilterType.PAST;
        }

        return this.listEvent.filter(dateStr => {
            return this.listEvent.filter(evenement => {
                return filterType === DateFilterType.PAST ? evenement.date < now : evenement.date > now;
            });
        });
    
    }


    async fetchData() : Promise<string> {

        let trapError = "";
        try {
            console.log("shearch");
            const id = 'AKfycbxlfIKECBPHFIrt9cNKuwMaJAggjPG9i0Uvjh4IqU-iFMmEDNZnoCG_zONfWDPFa6sU';
            const action = '?path=Sheet1&action=read';
            const url = `https://script.google.com/macros/s/AKfycbxlfIKECBPHFIrt9cNKuwMaJAggjPG9i0Uvjh4IqU-iFMmEDNZnoCG_zONfWDPFa6sU/exec?path=Sheet1&action=read`;
            const response = await fetch(url);
                //console.log("shearch: ", token)
                if (!response.ok) {
                    if (response.status === 400) {
                        trapError = "Erreur 400: Ressource non trouvée à l'URL";
                        throw new Error(`Erreur 400: Ressource non trouvée à l'URL`);
                    } else {
                        trapError = `Erreur: ${response.status} - ${response.statusText}`;
                        throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
                    }
                }
                const datatmp = await response.json();
                const data = datatmp.data;
                //const error = data.debugInfo
                console.log(data);

                for (let i = 0; i < data.length; i++) {
                    
                    const tmpTitre = data[i].titre;
                    const tmpImage = data[i].image;
                    const tmpContenu = data[i].contenu;
                    const tmpDate = data[i].date;
                    const tmpDuree = data[i].duree;
                    const tmpPrix = data[i].prix;
                    const tmpLocalisation = data[i].tmpLocalisation;
                    
                    console.log(tmpTitre, tmpImage, tmpContenu, tmpDate, tmpDuree, tmpPrix, tmpLocalisation);

                    this.listEvent.push(new Evenement(tmpTitre, tmpImage, tmpContenu, tmpDate, tmpDuree, tmpPrix, tmpLocalisation))
                    //console.log(this.listEvent[this.listEvent.length-1].toString());
                }


        } catch (error) {
            trapError = 'Erreur lors de la récupération des données:', error;
            console.error('Erreur lors de la récupération des données:', error);
            
        }

        return trapError

    }
}


const managerEvent = new ManagerEvent();
export default managerEvent;