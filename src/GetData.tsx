async function GetData() {
    try {

        const id = 'AKfycbxlfIKECBPHFIrt9cNKuwMaJAggjPG9i0Uvjh4IqU-iFMmEDNZnoCG_zONfWDPFa6sU';
        const action = '?path=Sheet1&action=read';
        const url = `https://script.googleusercontent.com/macros/echo?user_content_key=Nks50otlUAyA6SBYK8jRJ31VD58vC8F8trmqeSQGV4L_4WP2HtpdeFTulCqquWGnyJcDT43s1gZRoFC2vwpZ1QZwdGQEzkg6OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa3qjVQpSicVK3gejPyCM_NO_dwixJ1wN6zm2ODlHk_nyMXMc-YLvaBMrHFroOpTb2FvSh3Bt-okgK4SvnGbJ3Xnuvqqa1N7M6uX2KnvcqMMGFZR6btdKBkCY8-paDNctvg&lib=Mh0BC_mB0DxWCjUh8vy5ahKUZ1UBdVY1k`;
        const response = await fetch(url);
            //console.log("shearch: ", token)
            if (!response.ok) {
            if (response.status === 400) {
                throw new Error(`Erreur 400: Ressource non trouvée à l'URL}`);
            } else {
                throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
            }
            }
            const datatmp = await response.json();
            const data = datatmp.data;
            const error = data.debugInfo
            
            

            for (let i = 0; i < data.length; i++) {
                
                const tmpTitre = data.titre;
                const tmpImage = data.image;
                const tmpContenu = data.contenu;
                const tmpDate = data.date;
                const tmpDuree = data.duree;
                
                
                
            }


    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        
      }
    return
}

export default GetData;