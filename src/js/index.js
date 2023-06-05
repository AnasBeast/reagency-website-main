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
                description : "36 m2, Vue: Hyde Park - Localisation : chaque étage -Baignoire et douche dans routes les chambers"
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
        stars : "5" 
    },
    {   
        id : 2,
        name:"SECOND HOTEL" ,
        address:"45 PARK LANE, MAYFAIR, LONDRES, ROYAUME-UNI",
        subtitle : "Influences Art Deco face à Hyde Park",
        description:"45 Park Lane a été conçu par Thierry Despont dans un style contemporain avec des influences Art déco. Avec seulement 46 chambres et suites, chaque chambre dispose d'une vue sur Hyde Park." ,
        images : ["./src/img/hotels/hotel-9.jpg"],
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
                description : "36 m2, Vue: Hyde Park - Localisation : chaque étage -Baignoire et douche dans routes les chambers"
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
        stars : "5" 
    }
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

