export class Evenement {
    title:string
    imgSrc: string;
    contenu: string;
    date:string;
    duree:string;
  
    constructor(title:string, imgSrc: string, contenu: string, date: string, duree: string) {
      this.title = title
      this.imgSrc = imgSrc
      this.contenu = contenu;
      this.date = date;
      this.duree = duree;
    }
    
  }