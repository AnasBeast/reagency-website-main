const hideMobileNav = () => {
    document.getElementById('mobileNavbar').classList.remove('active');
    document.getElementById('overlay').style.opacity = "0";

    setTimeout(() => {
        document.getElementById('mobileNavbar').style.display = "none";
        document.getElementById('overlay').style.display = "none";
        document.querySelector('body').classList.remove('hidden');
    }, 400);
}

const showMobileNav = () => {
    document.getElementById('overlay').style.display = "block";
    document.getElementById('mobileNavbar').style.display = "flex";
    
    setTimeout(() => {
        document.getElementById('overlay').style.opacity = "0.7";
        document.getElementById('mobileNavbar').classList.add('active');
    }, 1);
    document.querySelector('body').classList.add('hidden');
}



var hotels = [
    {   
        id : 1,
        name:"45 Park Lane" ,
        address:"45 PARK LANE, MAYFAIR, LONDRES, ROYAUME-UNI",
        country : "Royaume-Uni",
        subtitle : "Influences Art Deco face à Hyde Park",
        description:"45 Park Lane a été conçu par Thierry Despont dans un style contemporain avec des influences Art déco. Avec seulement 46 chambres et suites, chaque chambre dispose d'une vue sur Hyde Park." ,
        images : ["./src/img/hotels/hotel-2.png"],
        services : [
            "SPA",
            "PISCINE INTÉRIEURE",
            "CENTRE DE FITNESS",
            "GASTRONOMIQUE"
        ],
        exceptions : [
            "Chaque chambre et suite a une vue donnant sur Hyde Park.",
            "Découvrez l'une des suites Penthouse sur le toit avec une terrasse tout autour et une vue imprenable sur Londres.",
            "Savourez un repas au premier restaurant londonien, CUT de Wolfgang Puck."
        ],
        rooms : [
            {
                name : "Deluxe Room",
                description : "36 m2, Vue: Hyde Park - Localisation : chaque étage -Baignoire et douche dans routes les chambers",
                img : "https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg"
            },
            {
                name : "Park View Studio",
                description : "65 m2, Vue: Vues spectaculaires sur Hyde Park - Localisation: Etages supérieurs - Baignoire et douche dans toutes les chambres",
                img : "https://www.travelandleisure.com/thmb/OiDnPGo3k9QLRT9__TPhFZcr7PU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rosewood-carlyle-presidential-suite-LUXESUITE0122-0046808a88924e57922d78c7f1d9ca60.jpg"
            }
        ],
        feedback : [
            {
                name : "Steve J.- Royaume-Uni",
                rate : "8/10",
                date : "CLIENT DEPUIS SEPTEMBRE 2011, ULTIMATE",
                note : "Hôtel très bien - la technologie était un peu difficile mais il fallait plus d'une nuit et un diplôme en technologie !!"
            },
            {
                name : "Anita G. - États-Unis d'Amérique",
                rate : "10/10",
                date : "CLIENT DEPUIS MAI 2015, CONNAISSEUR",
                note : "C'est un hôtel parfait car il est totalement axé sur les clients à tous les niveaux de contact. Le ménage est impeccable."
            }
        ],
        informations : {
            pratiques : {
                address : "45 Park Lane, Mayfair, Londres",
                arrival:"15:00",
                departure : "midi",
                rooms: "46 chambres et suites",
                equipments: "Connecteur iPod, TV à écran plat, coffre-fort dans la chambre, mini-bar, cafetière / théière, produits de salle de bains Noble Isle",
                animals: "Chiens non admis",
                publicSpace : "gratuit",
                inRoom : "gratuit",
                transfer : "soumis à supplément",
                inclus : ["Internet offert"],
                kids : "Enfants bienvenus",
                smokers: "Espaces publics non-fumeurs",
                smokersRoom : "non disponibles",
                services : ["Hôtel climatisé","Service de blanchisserie","Service de conciergerie"]

            },
            restaurants : {
                cut : "Restaurant gastronomique: cuisine steak house, Petit déjeuner, Afternoon tea",
                bar : "Bar",
                breakfeastContinental : "disponible",
                breakfeastAmericain  : "disponible"
            },
            spa: {
                services : ["Massages","Hammam"],
                loisirs : ["Piscine intérieure","Centre de fitness"]
            }
        },
        stars : "5" 
    },
    {   
        id : 2,
        name:"137 Pillars House" ,
        address:"2 Soi 1 Nawatgate Road, Watgate, Chiang Mai, Thaïlande",
        subtitle : "Son histoire remonte à la fin des années 1800. L’hôtel 137 Pillars House est l’une des adresses les plus exclusives de Chiang Mai. Cet établissement en teck magnifiquement restauré, aménagé dans le pur style colonial, donne sur la rive orientale de la rivière Ping.",
        description:"Avec ses quelque 30 suites érigées autour de l’ancienne résidence de Louis Leonowens, le 137 Pillars House est le boutique-hôtel par excellence… En guise de hall d’accueil, un pavillon posé sur l’eau, décoré de photos relatant l’histoire de la propriété. Un mur de verdure haut de trois étages surplombe une piscine à débordement de 25 mètres. L’omniprésence du bois, qui donne au lieu une atmosphère feutrée et élégante, renvoie d’emblée à l’époque des premiers colons, qui ont démarré, sur les berges de cette rivière, le commerce du teck… Des réminiscences particulièrement présentes dans les deux restaurants de l’hôtel, aménagés dans la propriété d’origine. Pour savourer la cuisine traditionnelle thaïlandaise et asiatique, vous avez le choix entre dîner en plein air ou en salle. Le restaurant Palette est plus intimiste et gastronomique, tandis que le bar de l'hôtel, qui porte le nom d'un ancien résident Écossais, a des allures de Club de gentlemen britanniques, avec sa carte à whisky et son design traditionnel. Le spa de l’hôtel, s’inspirant des Sept piliers du bien-être, propose des soins pour nourrir le corps et apaiser l’esprit." ,
        images : ["./src/img/hotels/hotel-3.png"],
        services : [
            "SPA",
            "PISCINE INTÉRIEURE",
            "CENTRE DE FITNESS",
        ],
        exceptions : [
            "L’omniprésence du bois, un clin d’œil à l’architecture du XIXe siècle.",
            "Les suites d’inspiration coloniale, avec leur haut plafond, leur grande terrasse et leurs fauteuils à bascule.",
            "Son emplacement : il est situé au coeur du charmant quartier de Wat Gate, à deux pas des galeries marchandes, des boutiques et des bars."
        ],
        rooms : [
            {
                name : "Louis Leonowens Pool Suite",
                description : "135 m2, Vue: Jardin / Piscine - Localisation: Bâtiment principal, rez-de-chaussée - Baignoire et douche dans toutes les chambres, Balcon ou Terrasse dans toutes les chambres, Piscine privée",
                img : "https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg"
            },
            {
                name : "Rajah Brooke Suite",
                description : "70 m2, Vue: Jardin - Localisation: Bâtiment principal, rez-de-chaussée et étage supérieur - Baignoire et douche dans toutes les chambres, Balcon ou Terrasse dans toutes les chambres",
                img : "https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen.jpg"
            },
            {
                name : "East Borneo Suite",
                description : "75 m2, Vue: Jardin - Localisation: Bâtiment principal, rez-de-chaussée et étage supérieur - Baignoire et douche dans toutes les chambres, Balcon ou Terrasse dans toutes les chambres",
                img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3Lrsy0QECmq4xjW3S2Noy6mq37YT0ByBUkvv0ictJP9sm67TOJbfmbPCs3w61PBq0qc&usqp=CAU"
            }
        ],
        feedback : [
            
        ],
        informations : {
            pratiques : {
                address : "2 Soi 1 Nawatgate Road, Watgate, Chiang Mai, Thaïlande",
                arrival:"15:00",
                departure : "midi",
                rooms: "30 chambres et suites",
                equipments: "TV à écran plat, coffre-fort dans la chambre, mini-bar, cafetière / théière, journal quotidien gratuit",
                animals: "Chiens non admis",
                publicSpace : "gratuit",
                inRoom : "gratuit",
                transfer : "soumis à supplément",
                inclus : ["Boisson de bienvenue offerte","Boisson de bienvenue offerte","Petit déjeuner buffet pour deux, chaque jour","Service de majordome"],
                kids : "Enfants bienvenus",
                smokers: "Espaces publics non-fumeurs",
                smokersRoom : "disponibles",
                services : ["Hôtel climatisé","Service de blanchisserie","Service de conciergerie"]

            },
            restaurants : {
                cut : "",
                bar : "",
                breakfeastContinental : "inclus",
                breakfeastAmericain  : "inclus"
            },
            spa: {
                services : ["Massages","Hammam","Sauna"],
                loisirs : ["Piscine extérieure","Centre de fitness"]
            }
        },
        stars : "5" 
    },
]
hotels.forEach((hotel)=>{
    var content =`<div class="content"> <div class="landing" style="background-image : url(${hotel.images[0]})"> <img id="logo" src="src/img/logo-blanc.png" alt="Logo">  <div id="text">
    <div id="stars">
        <img src="src/img/star.png" alt="Star">
        <img src="src/img/star.png" alt="Star">
        <img src="src/img/star.png" alt="Star">
        <img src="src/img/star.png" alt="Star">
        <img src="src/img/star.png" alt="Star">
    </div>

    <h1>45 Park Lane</h1>
    <h3>45 PARK LANE, MAYFAIR, LONDRES, ROYAUME-UNI  </h3>
</div>`  +'</div></div>'
    var content2 = 
    `<footer>
    <div id="upper">
        <img src="src/img/logo-blanc.png" alt="Regency Logo">

        <ul>
            <h3>EN SAVOIR PLUS</h3>

            <a href="qui-sommes-nous.html"><li>QUI SOMMES-NOUS</li></a>
            <a href=""><li>DESTINATIONS</li></a>
            <a href="collection-hotels.html"><li>COLLECTION D'HOTELS</li></a>
            <a href=""><li>CONCIERGERIE</li></a>
        </ul>

        <ul>
            <h3>LAISSER-NOUS VOS AIDER</h3>

            <a href=""><li>NOUS CONTACTER</li></a>
            <a href=""><li>AIDE</li></a>
            <a href=""><li>CONDITIONS GENERALES D'UTILISATION</li></a>
            <a href=""><li>POLITIQUE DE CONFIDENTIALITE</li></a>
        </ul>

        <ul>
            <h3>ACCREDITATIONS</h3>

            <a href=""><li>CERTIFICAT ARC</li></a>
            <a href=""><li>CERTIFICAT CLIA</li></a>
            <a href=""><li>CERTIFICAT IATA</li></a>
            <a href=""><li>CERTIFICAT CST</li></a>
        </ul>
    </div>

    <div id="lower">
        <div id="phone">
            <img src="src/img/phone.png" alt="Phone">
            <h3>+44 20 3519 2700</h3>
        </div>

        <img id="logo" src="src/img/IATA-white.png" alt="IATA LOGO">

        <div id="socials">
            <a href=""><img src="src/img/instagram.png" alt="Instagram"></a>
            <a href=""><img src="src/img/Youtube.png" alt="Youtube"></a>
            <a href=""><img src="src/img/facebook.png" alt="Facebook"></a>
        </div>
    </div>
    </footer>`
    
})

