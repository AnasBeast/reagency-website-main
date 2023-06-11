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

const backendURL = "https://reagency-website-main-production.up.railway.app"
// const backendURL ="http://localhost:8080"

var hotels = [
    {   
        id : 1,
        name:"45 Park Lane" ,
        address:"45 PARK LANE, MAYFAIR, LONDRES, ROYAUME-UNI",
        country : "Royaume Uni",
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
            country : "Thailande",
            subtitle : "Son histoire remonte à la fin des années 1800. L’hôtel 137 Pillars House est l’une des adresses les plus exclusives de Chiang Mai. Cet établissement en teck magnifiquement restauré, aménagé dans le pur style colonial, donne sur la rive orientale de la rivière Ping.",
            description:"Avec ses quelque 30 suites érigées autour de l’ancienne résidence de Louis Leonowens, le 137 Pillars House est le boutique-hôtel par excellence… En guise de hall d’accueil, un pavillon posé sur l’eau, décoré de photos relatant l’histoire de la propriété. Un mur de verdure haut de trois étages surplombe une piscine à débordement de 25 mètres. L’omniprésence du bois, qui donne au lieu une atmosphère feutrée et élégante, renvoie d’emblée à l’époque des premiers colons, qui ont démarré, sur les berges de cette rivière, le commerce du teck… Des réminiscences particulièrement présentes dans les deux restaurants de l’hôtel, aménagés dans la propriété d’origine. Pour savourer la cuisine traditionnelle thaïlandaise et asiatique, vous avez le choix entre dîner en plein air ou en salle. Le restaurant Palette est plus intimiste et gastronomique, tandis que le bar de l'hôtel, qui porte le nom d'un ancien résident Écossais, a des allures de Club de gentlemen britanniques, avec sa carte à whisky et son design traditionnel. Le spa de l’hôtel, s’inspirant des Sept piliers du bien-être, propose des soins pour nourrir le corps et apaiser l’esprit." ,
            images : ["./src/img/hotels/hotel-3.png"],
            services : [
                "SPA",
                "PISCINE INTÉRIEURE",
                "CENTRE DE FITNESS"
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
                    cut : "non disponible",
                    bar : "non disponible",
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
    {   
        id : 3,
        name:"Abadía Retuerta LeDomaine" ,
        address:"Monastery of Santa María de Retuerta, Retuerta, Espagne",
        country : "Espagne",
        subtitle : "À deux heures de route au nord de Madrid, sur 500 hectares de vignobles dans la vallée du Duero, se trouve un hôtel intimiste de seulement 30 chambres établi dans une ancienne abbaye d’influence baroque romane. Il s'agit du majestueux Abadia Retuerta Le Domaine.",
        description:"Le domaine viticole et cette ancienne abbaye romane du XIIe siècle méticuleusement restaurés, Abadia Retuerta, tout près du village de Sardón de Duero, est un cadre tant majestueux qu'unique pour une escapade. L'esthétique est médiévale, avec des plafonds voûtés, d'épais murs de pierre et un cloître silencieux, mais les espaces sont lumineux et aérés, grâce à un mobilier moderne. L'hôtel ne compte que 27 chambres et 3 suites, installées dans l'ancienne hôtellerie du monastère et offrant une vue imprenable sur les vignobles. Sur le plan culinaire, l'hôtel abrite le restaurant Refectorio, doté d'une étoile Michelin, la Vinoteca, un restaurant décontracté, le Calicata Terroir, bar immergé dans la nature et sur les rives du fleuve Douro, et le Cloister Garden, où le petit déjeuner est servi. L'hôtel abrite également un magnifique spa situé sous terre dans l'ancienne écurie. C'est un espace unique dédié au bien-être, tout comme l'ensemble des expériences organisées autour du vin, de la gastronomie, de la nature et de l'art sur le domaine." ,
        images : ["./src/img/hotels/hotel-4.png"],
        services : [
            "SPA",
            "PISCINE INTÉRIEURE",
            "PISCINE EXTÉRIEURE",
            "CENTRE DE FITNESS",
            "GASTRONOMIQUE",
        ],
        exceptions : [
            "L'hôtel est situé dans une abbaye dont l'histoire remonte à 1146.",
            "L'emplacement au milieu des vignobles et des établissements vinicoles de Ribera del Duero.",
            "Refectorio, installé dans le réfectoire original de l'abbaye et fier détenteur d'une étoile Michelin depuis 2014."
        ],
        rooms : [
            {
                name : "Classic Double Room",
                description : "30 m2, Vue: Vignoble Abadia Retuerta - Localisation: Hôtellerie ou Écurie - Baignoire et douche dans toutes les chambres",
                img : "https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg"
            },
            {
                name : "Classic Double Room with Terrace",
                description : "30 m2, Vue: Vignoble Abadia Retuerta - Localisation: Hôtellerie ou Écurie - Baignoire et douche dans toutes les chambres, Balcon ou Terrasse dans toutes les chambres",
                img : "https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen.jpg"
            },
            {
                name : "Double Superior Twin Room",
                description : "32 m2, Vue: Vignoble Abadia Retuerta - Localisation: Hôtellerie ou Écurie - Baignoire et douche dans toutes les chambres",
                img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3Lrsy0QECmq4xjW3S2Noy6mq37YT0ByBUkvv0ictJP9sm67TOJbfmbPCs3w61PBq0qc&usqp=CAU"
            },
            {
                name : "Superior Double Room",
                description : "32 m2, Vue: Vignoble Abadia Retuerta - Localisation: Hôtellerie ou Écurie - Baignoire et douche dans toutes les chambres",
                img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3Lrsy0QECmq4xjW3S2Noy6mq37YT0ByBUkvv0ictJP9sm67TOJbfmbPCs3w61PBq0qc&usqp=CAU"
            }
        ],
        feedback : [
            {
                name : "Michael H.- États-Unis d'Amérique",
                rate : "10/10",
                date : "CLIENT DEPUIS AOÛT 2022, ULTIMATE",
                note : "Mohamed, Rosa, and Momen were awesome and made our visit spectacular! The Spa was wonderful and the food too. Looking forward to drinking some of the wine we purchased and reading the book I purchased about the History of our adventure there. Loved it!!"
            },
            {
                name : "Tomas C.- Espagne",
                rate : "10/10",
                date : "CLIENT DEPUIS MAI 2015, CONNAISSEUR",
                note : "Amazing experience. Great installations and the personnel is very attentive. Also food is very good and the wines are great."
            },
            {
                name : "Frederic S.- Suisse",
                rate : "10/10",
                date : "CLIENT DEPUIS MAI 2015, CONNAISSEUR",
                note : "The experience was unique. Historic location renovated with fantastic taste and filled with art, amazing spa, stunning Michelin star restaurant,… the list goes on. Service was pristine and all experiences I booked (including winery tour) were highly enjoyable"
            },
            {
                name : "Juan H.- Espagne",
                rate : "10/10",
                date : "CLIENT DEPUIS FÉVRIER 2020, PRIVILÈGE",
                note : "Excellent service and quiet place to stay. You can notice that staff is always trying to help."
            }
        ],
        informations : {
            pratiques : {
                address : "Monastery of Santa María de Retuerta, Retuerta, Espagne",
                arrival:"15:00",
                departure : "midi",
                rooms: "30 chambres et suites",
                equipments: "Connecteur iPod, TV à écran plat, coffre-fort dans la chambre, mini-bar, cafetière / théière, produits de salle de bains Natura Bissé / Anne Semonin",
                animals: "Chiens non admis",
                publicSpace : "gratuit",
                inRoom : "gratuit",
                transfer : "soumis à supplément",
                inclus : ["Bouteille de vin offerte dans la chambre","Internet offert","Cadeau de bienvenue offert","Eau minérale offerte à l'arrivée","Petit-déjeuner à la carte pour 2 personnes par jour","Accès gratuit au Santuario Wellness & Spa","Minibar gratuit dans la chambre","Service de majordome 24h/24","Visite guidée privée du Cloister Building","Salle de fitness gratuite 24h/24","Accès gratuit à la salle de yoga et aux vélos électriques (sous réserve de disponibilité)"],
                kids : "Enfants bienvenus",
                smokers: "Espaces publics non-fumeurs",
                smokersRoom : "non disponibles",
                services : ["Hôtel climatisé","Service de blanchisserie","Service de conciergerie"]

            },
            restaurants : {
                cut : "non disponible",
                bar : "non disponible",
                breakfeastContinental : "inclus",
                breakfeastAmericain  : "non inclus"
            },
            spa: {
                services : ["Massages","Hammam","Sauna","Jacuzzi"],
                loisirs : ["Piscine extérieure","Piscine intérieure","Centre de fitness"]
            }
        },
        stars : "5" 
    },
    {   
        id : 4,
        name:"Acqualina Resort and Residences on the Beach" ,
        address:"17875 Collins Avenue, Sunny Isles Beach, Miami, Etats-Unis",
        country: "Etats-Unis",
        subtitle : "Au bord de la plage ensoleillée des Sunny Isles, l'Acqualina Resort and Spa se tient à l’écart de l'agitation de Miami.",
        description:"L'établissement, ouvert sur l'Océan Atlantique, se situe à proximité des boutiques de luxe de Bal Harbour et des activités trépidantes de South Beach. Seule une mince bande de sable, parsemée de parasols d'un rouge éclatant, vous sépare des eaux de l'Atlantique. Coté gastronomie, l’établissement dispose de trois restaurants. Mais celui qu’il ne faudra pas manquer est Il Mulino, de Michele Mazza (oui, tout comme celui de New York)." ,
        images : ["./src/img/hotels/hotel-6.png"],
        services : [
            "SPA",
            "PISCINE EXTÉRIEURE",
            "CENTRE DE FITNESS",
            "CLUB ENFANTS",
            "GASTRONOMIQUE",
        ],
        exceptions : [
            "Essayez le spa Espa de 1800 m2 en bord de mer qui établit de nouveaux standards de design, d'innovation, de luxe et vous proposera des expériences inoubliables.",
            "Excellent pour les familles: le programme de biologie marine pour enfants, Acquamarine",
            "Avec vues uniques sur l'océan Atlantique, les quatre piscines sont chacune une oasis étincelante de fraîcheur."
        ],
        rooms : [
            {
                name : "Intracoastal Room",
                description : "56 m2, Vue: Canaux et Collins Avenue - Localisation: Etages 5-17 - Jacuzzi, baignoire et douche dans toutes les chambres, Balcon ou Terrasse dans toutes les chambres",
                img : "https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg"
            },
            {
                name : "Deluxe Intracoastal Room",
                description : "56 m2, Vue: Canaux et Collins Avenue - Localisation: Etages 18-28 - Jacuzzi, baignoire et douche dans toutes les chambres, Balcon ou Terrasse dans toutes les chambres",
                img : "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/03/trump-hotel-chicago-illinois-usa.jpg"
            },
            {
                name : "Oceanfront Room",
                description : "57 m2, Vue: Bord de mer direct - Localisation: Etages 18-21 - Baignoire et douche dans toutes les chambres, Balcon ou Terrasse dans toutes les chambres",
                img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3Lrsy0QECmq4xjW3S2Noy6mq37YT0ByBUkvv0ictJP9sm67TOJbfmbPCs3w61PBq0qc&usqp=CAU"
            },
            {
                name : "Classic Suite",
                description : "94 m2, Vue: Bord de mer direct - Localisation: Etages 18-21 - Baignoire et douche dans toutes les chambres, Balcon ou Terrasse dans toutes les chambres",
                img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3Lrsy0QECmq4xjW3S2Noy6mq37YT0ByBUkvv0ictJP9sm67TOJbfmbPCs3w61PBq0qc&usqp=CAU"
            }
        ],
        feedback : [
            {
                name : "Albert L.- Belgique",
                rate : "10/10",
                date : "CLIENT DEPUIS AOÛT 2018, PRIVILÈGE",
                note : "Tout fut parfait sauf le restaurant pas digne de cet hôtel Le Spa est superbe de très bons soins et une grande gentillesse"
            },

        ],
        informations : {
            pratiques : {
                address : "17875 Collins Avenue, Sunny Isles Beach, Miami, Etats-Unis",
                arrival:"16:00",
                departure : "midi",
                rooms: "98 chambres et suites",
                equipments: "Connecteur iPod, TV à écran plat, coffre-fort dans la chambre, mini-bar, cafetière / théière, journal quotidien gratuit, produits de salle de bains ESPA",
                animals: "Petits chiens admis",
                publicSpace : "gratuit",
                inRoom : "gratuit",
                transfer : "soumis à supplément",
                inclus : ["Boisson de bienvenue offerte","Internet offert","Cadeau de bienvenue offert","Eau minérale offerte à l'arrivée","40 USD de crédit chaque jour à valoir sur un soin du visage ou du corps","Accès gratuit aux activités du programme","AcquaMarine pour les 5-12 ans"],
                kids : "Enfants bienvenus",
                smokers: "Espaces publics non-fumeurs",
                smokersRoom : "non disponibles",
                services : ["Hôtel climatisé","Service de blanchisserie","Service de conciergerie"]

            },
            restaurants : {
                cut : "non disponible",
                bar : "non disponible",
                breakfeastContinental : "non inclus",
                breakfeastAmericain  : "non inclus"
            },
            spa: {
                services : ["Massages","Hammam","Sauna","Jacuzzi"],
                loisirs : ["Golf à proximité","Sports nautiques non motorisés","Plage publique à proximité"]
            }
        },
        stars : "5" 
    },
]

var continents = [
    { 
        continent : "Europe",
        hotelId : "648114ceaf84905a70ac8a5d",
        description : "Que ce soit pour ses cités intemporelles telles que Paris et Venise ou ses destinations hors des sentiers battus, comme le Monténégro et la vallée du Douro, l'Europe est toujours synonyme de vacances réussies. Et nous sommes impatients de partager avec vous nos hôtels préférés sur l’ensemble du continent, des châteaux médiévaux de la campagne irlandaise aux stations de ski ultra-exclusives des Alpes suisses.",
        destinations : "ALLEMAGNE · AUTRICHE · BELGIQUE DANEMARK · ESPAGNE · FRANCE · GRÈCE  HONGRIE · IRLANDE · ITALIE · MONACO · MONTÉNÉGRO PAYS-BAS · POLOGNE · PORTUGAL · RÉPUBLIQUE TCHÈQUE ROYAUME-UNI · RUSSIE · SUÈDE · SUISSE · TURQUIE",
        top: "L’Europe ne manque pas de magnifiques hôtels, mais il en existe qui laisseraient même les voyageurs les plus blasés un peu émerveillés. Il y a bien sûr le Ritz Paris, où Coco Chanel et Marcel Proust ont résidé des années. Ensuite, il y a les chics boutiques-hôtels de Santorin, où les vues sur la mer Égée sont des plus exquises.",
        hotels:[
            {
                name:"Ham Yard Hotel",
                region: "Londres",
                thumbnail : "./src/img/ham-thumb.png"
            },
            {
                name:"Hotel Arts Barcelona",
                region: "Bercelona",
                thumbnail : "./src/img/arts-thumb.png"
            },
            {
                name:"Hôtel Plaza Athénée",
                region: "Paris",
                thumbnail : "./src/img/plaza-thumb.png"
            },
            {
                name:"Ritz Paris",
                region: "Paris",
                thumbnail : "./src/img/ritz-thumb.png"
            },
        ]
    },
    { 
        continent : "Afrique",
        hotelId : 1,
        description : "Que ce soit pour ses cités intemporelles telles que Paris et Venise ou ses destinations hors des sentiers battus, comme le Monténégro et la vallée du Douro, l'Europe est toujours synonyme de vacances réussies. Et nous sommes impatients de partager avec vous nos hôtels préférés sur l’ensemble du continent, des châteaux médiévaux de la campagne irlandaise aux stations de ski ultra-exclusives des Alpes suisses.",
        destinations : "ALLEMAGNE · AUTRICHE · BELGIQUE DANEMARK · ESPAGNE · FRANCE · GRÈCE  HONGRIE · IRLANDE · ITALIE · MONACO · MONTÉNÉGRO PAYS-BAS · POLOGNE · PORTUGAL · RÉPUBLIQUE TCHÈQUE ROYAUME-UNI · RUSSIE · SUÈDE · SUISSE · TURQUIE",
        top: "L’Europe ne manque pas de magnifiques hôtels, mais il en existe qui laisseraient même les voyageurs les plus blasés un peu émerveillés. Il y a bien sûr le Ritz Paris, où Coco Chanel et Marcel Proust ont résidé des années. Ensuite, il y a les chics boutiques-hôtels de Santorin, où les vues sur la mer Égée sont des plus exquises.",
        hotels:[
            {
                name:"Ham Yard Hotel",
                region: "Londres",
                thumbnail : "./src/img/ham-thumb.png"
            },
            {
                name:"Hotel Arts Barcelona",
                region: "Bercelona",
                thumbnail : "./src/img/arts-thumb.png"
            },
            {
                name:"Hôtel Plaza Athénée",
                region: "Paris",
                thumbnail : "./src/img/plaza-thumb.png"
            },
            {
                name:"Ritz Paris",
                region: "Paris",
                thumbnail : "./src/img/ritz-thumb.png"
            },
        ]
    }
]
var hotelsData
async function hotelsGrab() {
    await fetch(`${backendURL}/api/todos`)
        .then((response) => response.json())
        .then(({hotels}) => {hotelsData = hotels})

}
hotelsGrab()