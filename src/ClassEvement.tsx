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
    
    toString():string{
      return `${this.titre}, ${this.imagId}, ${this.date}`;
    }
    
}