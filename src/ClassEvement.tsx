const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
      const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
      ];

export class Evenement {
    titre:string
    imagId: string;
    contenu: string;
    date:Date;
    duree:string;
    prix:string;
    localisation:string;
    
  
    constructor(titre:string, imgSrc: string, contenu: string, date: Date, duree: string, prix:string, localisation:string) {

      // Récupère l'id de l'image
      const extractDriveImageId = (imgSrc: string): string => {
        const match = imgSrc.match(/\/d\/([^/]+)\//);
        return match ? match[1] : "";
      };

      this.titre = titre
      this.imagId = extractDriveImageId(imgSrc)
      this.contenu = contenu;
      this.date = date;
      this.duree = duree;
      this.prix = prix,
      this.localisation = localisation
    }

    dateToString = (): string => {
      
    
      const day = days[this.date.getDay()]; // Nom du jour
      const month = months[this.date.getMonth()]; // Nom du mois
      const dateNum = String(this.date.getDate()).padStart(2, "0"); // Jour (avec 0 devant si nécessaire)
      const year = this.date.getFullYear(); // Année
      const hours = String(this.date.getHours()).padStart(2, "0"); // Heures (avec 0 devant si nécessaire)
      const minutes = String(this.date.getMinutes()).padStart(2, "0"); // Minutes
    
      return `${dateNum} ${day} ${month} ${year}, à ${hours}h${minutes}`;
    };
    
    toString():string{
      return `${this.titre}, ${this.imagId}, ${this.date}`;
    }
    
}