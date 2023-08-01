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

// const backendURL = "https://reagency-website-main-production.up.railway.app"
// const backendURL ="http://localhost:8080"
const backendURL = "https://regencytravelback.com.regencytravel.com"

var hotelsTest = [
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
        description : "Que ce soit pour ses cités intemporelles telles que Paris et Venise ou ses destinations hors des sentiers battus, comme le Monténégro et la vallée du Douro, l'Europe est toujours synonyme de vacances réussies. Et nous sommes impatients de partager avec vous nos hôtels préférés sur l’ensemble du continent, des châteaux médiévaux de la campagne irlandaise aux stations de ski ultra-exclusives des Alpes suisses.",
        destinations : `<a href="hotels-search.html?country=Allemagne">ALLEMAGNE</a> · <a href="hotels-search.html?country=Autriche">AUTRICHE</a> · <a href="hotels-search.html?country=Belgique">BELGIQUE</a> · <a href="hotels-search.html?country=Danemark">DANEMARK</a> · <a href="hotels-search.html?country=Espagne">ESPAGNE</a> · <a href="hotels-search.html?country=France">FRANCE</a> · <a href="hotels-search.html?country=Grece">GRÈCE</a> · <a href="hotels-search.html?country=Hongrie">HONGRIE</a> · <a href="hotels-search.html?country=Irlande">IRLANDE</a> · <a href="hotels-search.html?country=Italie">ITALIE</a> · <a href="hotels-search.html?country=Monaco">MONACO</a> · <a href="hotels-search.html?country=Montenegro">MONTÉNÉGRO</a> · <a href="hotels-search.html?country=Pays%20Bas">PAYS-BAS</a> · <a href="hotels-search.html?country=Pologne">POLOGNE</a> · <a href="hotels-search.html?country=Portugal">PORTUGAL</a> · <a href="hotels-search.html?country=Republique%20tcheque">RÉPUBLIQUE TCHÈQUE</a> · <a href="hotels-search.html?country=Royaume-Uni">ROYAUME-UNI</a> · <a href="hotels-search.html?country=Russie">RUSSIE</a> · <a href="hotels-search.html?country=Suede">SUÈDE</a> · <a href="hotels-search.html?country=Suisse">SUISSE</a> · <a href="hotels-search.html?country=Turquie">TURQUIE</a>`,
        top: "L’Europe ne manque pas de magnifiques hôtels, mais il en existe qui laisseraient même les voyageurs les plus blasés un peu émerveillés. Il y a bien sûr le Ritz Paris, où Coco Chanel et Marcel Proust ont résidé des années. Ensuite, il y a les chics boutiques-hôtels de Santorin, où les vues sur la mer Égée sont des plus exquises.",
        image : "./src/img/europe.jpg",
        slide:`<a href="hotels-search.html?country=Arabie%20saoudite">Arabie Saoudite</a> - <a href="hotels-search.html?country=Emirats%20arabes%20unis">Emirats arabes unis</a> - <a href="hotels-search.html?country=Dubai">Dubai</a> - <a href="hotels-search.html?country=Oman">Oman</a> - <a href="hotels-search.html?country=Qatar">Qatar</a>`,
        address : "Moyen Orient",
        slidebg : "./src/img/qatar2.png",
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
        description : "L'Afrique, avec sa diversité culturelle et ses paysages époustouflants, offre une expérience de voyage unique et enrichissante. Que vous soyez attiré par les merveilles naturelles de la réserve de Masai Mara au Kenya, les plages immaculées de Zanzibar en Tanzanie ou les majestueuses pyramides d'Égypte, l'Afrique a tant à offrir aux amateurs de luxe. Nous sommes ravis de vous présenter nos choix d'hôtels de luxe à travers le continent africain, des lodges de safari exclusifs en Afrique du Sud aux riads luxueux nichés au cœur des médinas historiques du Maroc. Plongez dans une expérience inoubliable, mêlant hospitalité raffinée, services de classe mondiale et découverte des richesses culturelles de l'Afrique.",
        destinations : `<a href="hotels-search.html?country=Afrique%20du%20sud">AFRIQUE DU SUD</a> · <a href="hotels-search.html?country=Maroc">MAROC</a> · <a href="hotels-search.html?country=Rwanda">RWANDA</a> · <a href="hotels-search.html?country=Zombie">ZOMBIE</a>`,
        top: "L'Afrique regorge de superbes hôtels qui sauront émerveiller même les voyageurs les plus exigeants. Parmi eux, on trouve l'emblématique Royal Mansour à Marrakech, au Maroc, un véritable palais où l'opulence et le raffinement se rencontrent dans un cadre enchanteur. Ensuite, il y a les luxueux lodges de safari en Afrique de l'Est, tels que le Singita Grumeti en Tanzanie, offrant une expérience unique de proximité avec la faune sauvage africaine dans un cadre spectaculaire.",
        image : "./src/img/afrique.jpg",
        slide:`<a href="hotels-search.html?country=Allemagne">Allemagne</a> - <a href="hotels-search.html?country=Belgique">Belgique</a> - <a href="hotels-search.html?country=France">France</a> - <a href="hotels-search.html?country=Portugal">Portugal</a>`,
        address : "Europe",
        slidebg : "./src/img/londres.png",
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
        continent : "Asie",
        description : "L'Asie, berceau de civilisations millénaires, est une destination fascinante où l'ancien et le moderne se mêlent harmonieusement. Des palais impériaux du Japon aux temples sacrés de l'Inde, en passant par les plages de sable blanc de la Thaïlande et les gratte-ciel étincelants de Hong Kong, l'Asie est un véritable paradis pour les amateurs de voyages luxueux. Nous sommes enchantés de vous présenter notre sélection d'hôtels de luxe à travers le continent asiatique, des complexes balnéaires somptueux des Maldives aux retraites zen du Bhoutan. Découvrez des hébergements d'exception, où l'hospitalité légendaire de l'Asie rencontre le confort haut de gamme, offrant une expérience inégalée pour les voyageurs en quête d'exclusivité et d'émerveillement.",
        destinations : `<a href="hotels-search.html?country=Combodge">COMBODGE</a> · <a href="hotels-search.html?country=Chine">CHINE</a> · <a href="hotels-search.html?country=Hong%20kong">HONG KONG</a> · <a href="hotels-search.html?country=Inde">INDE</a> · <a href="hotels-search.html?country=Indonesie">INDONESIE</a> · <a href="hotels-search.html?country=Japon">JAPON</a> · <a href="hotels-search.html?country=Laos">LAOS</a> · <a href="hotels-search.html?country=Malaisie">MALAISIE</a> · <a href="hotels-search.html?country=Myanmar">MYANMAR</a> · <a href="hotels-search.html?country=Philippines">PHILIPPINES</a> · <a href="hotels-search.html?country=Singapour">SINGAPOUR</a> · <a href="hotels-search.html?country=Sri%20lanka">SRI LANKA</a> · <a href="hotels-search.html?country=Thailande">THAILANDE</a> · <a href="hotels-search.html?country=Vietnam">VIETNAM</a>`,
        top: "L'Asie regorge de somptueux hôtels qui émerveilleront même les voyageurs les plus exigeants. Parmi eux, on retrouve l'emblématique Marina Bay Sands à Singapour, une merveille architecturale offrant une vue imprenable sur la ville depuis sa piscine à débordement située au sommet des tours. ",
        image : "./src/img/asie.jpg",
        slide:`<a href="hotels-search.html?country=Australie">Australie</a> - <a href="hotels-search.html?country=Polynesie%20francaise">Polynésie de française</a>`,
        address : "Océanie",
        slidebg : "./src/img/oceanie.jpg",
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
        continent : "Ocean Indien",
        description : "L'Océan Indien, avec ses îles tropicales et ses eaux cristallines, est un véritable havre de paix pour les voyageurs en quête d'évasion et de luxe. Que vous rêviez de vous détendre sur les plages de sable blanc des Maldives, d'explorer les époustouflants récifs coralliens de l'île Maurice ou de vous perdre dans les forêts luxuriantes de La Réunion, l'Océan Indien regorge de trésors naturels à découvrir. Nous sommes enchantés de vous présenter notre sélection d'hôtels de luxe dans cette région idyllique, des resorts privés exclusifs des Seychelles aux villas sur pilotis des Maldives. Laissez-vous séduire par des expériences hors du commun, alliant détente, raffinement et paysages à couper le souffle, et vivez des moments inoubliables au cœur de l'Océan Indien.",
        destinations : `<a href="hotels-search.html?country=Maldives">Maldives</a> · <a href="hotels-search.html?country=Maurice">Maurice</a> · <a href="hotels-search.html?country=Seychelles">Seychelles</a>`,
        top: "L'océan Indien abrite de somptueux hôtels qui invitent les voyageurs à plonger dans un véritable paradis tropical. Parmi eux, on retrouve le légendaire Four Seasons Resort Maldives at Kuda Huraa, où vous pourrez vous détendre dans des villas luxueuses surplombant les eaux turquoises des Maldives. ",
        image : "./src/img/maldives.png",
        slide:`<a href="hotels-search.html?country=Arabie%20saoudite">Arabie Saoudite</a> - <a href="hotels-search.html?country=Emirats%20arabes%20unis">Emirats arabes unis</a> - <a href="hotels-search.html?country=Dubai">Dubai</a> - <a href="hotels-search.html?country=Oman">Oman</a> - <a href="hotels-search.html?country=Qatar">Qatar</a>`,
        address : "Moyen Orient",
        slidebg : "./src/img/qatar2.png",
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
        continent : "Oceanie",
        description : "L'Océanie, un véritable paradis sur terre, est un continent qui offre une myriade de merveilles naturelles et d'expériences luxueuses. Que vous soyez attiré par les plages de sable blanc de Tahiti, les paysages spectaculaires de l'Australie ou les îles vierges de la Polynésie française, l'Océanie regorge de trésors à découvrir. Nous sommes ravis de vous présenter notre sélection d'hôtels de luxe à travers cette région exotique, des lodges de luxe nichés au cœur de la nature néo-zélandaise aux resorts en bord de mer de l'Australie. Plongez dans une expérience extraordinaire, alliant confort, exclusivité et hospitalité chaleureuse, et laissez-vous séduire par la beauté époustouflante de l'Océanie. Que vous soyez en quête d'aventure, de détente ou de découvertes culturelles, l'Océanie saura vous offrir des moments inoubliables et une escapade luxueuse dont vous vous souviendrez longtemps.",
        destinations : `<a href="hotels-search.html?country=Maldives">AUSTRALIE</a> · <a href="hotels-search.html?country=Polynesie%20francaise">POLYNESIE FRANCAISE</a>`,
        top: "L'Océan Pacifique regorge de magnifiques hôtels qui séduisent les voyageurs en quête de paradis tropical. Parmi eux, on retrouve l'emblématique St. Regis Bora Bora Resort en Polynésie française, où des bungalows sur pilotis vous offrent une expérience de luxe ultime, avec des eaux cristallines et des récifs coralliens colorés à votre porte.",
        image : "./src/img/oceanie.jpg",
        slide:`<a href="hotels-search.html?country=Allemagne">Allemagne</a> - <a href="hotels-search.html?country=Belgique">Belgique</a> - <a href="hotels-search.html?country=France">France</a> - <a href="hotels-search.html?country=Portugal">Portugal</a>`,
        address : "Europe",
        slidebg : "./src/img/londres.png",
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
        continent : "Caraibes",
        description : "Les Caraïbes, un véritable paradis tropical, évoquent des images de plages de sable blanc, d'eaux turquoises et de douces brises tropicales. Que vous souhaitiez vous détendre sur les magnifiques rivages des Bahamas, explorer les récifs coralliens de la Barbade ou vous immerger dans la riche histoire de Cuba, les Caraïbes offrent une expérience de voyage luxueuse et envoûtante. Nous sommes enchantés de vous présenter notre sélection d'hôtels de luxe à travers cette région enchanteresse, des complexes hôteliers haut de gamme des îles Vierges britanniques aux villas privées de la Barbade. Laissez-vous séduire par des hébergements exceptionnels alliant élégance, confort et services haut de gamme, et découvrez la véritable essence du luxe caraïbéen. Que vous recherchiez des vacances reposantes, des activités aquatiques excitantes ou une expérience gastronomique raffinée, les Caraïbes sont prêtes à vous offrir une escapade inoubliable dans un cadre idyllique.",
        destinations : `<a href="hotels-search.html?country=Anguilla">ANGUILLA</a> · <a href="hotels-search.html?country=Iles%20turks%20et%20caiques">ILES TURKS ET CAIQUES</a> · <a href="hotels-search.html?country=Porto%20rico">PORTO RICO</a> · <a href="hotels-search.html?country=Republique%20dominicaine">REPUBLIQUE DOMINICAINE</a> · <a href="hotels-search.html?country=Saint%20barthelemy">SAINT-BARTHELEMY</a> · <a href="hotels-search.html?country=St-vincent%20et%20grenadines">ST VINCENT ET GRENADINES</a>`,
        top: "Les Caraïbes regorgent de magnifiques hôtels qui séduisent les voyageurs du monde entier grâce à leur charme tropical et leur atmosphère enchanteresse. Parmi eux, on trouve le célèbre Sandy Lane à la Barbade, un paradis luxueux niché sur une plage de sable blanc immaculée et entouré de jardins tropicaux luxuriants. ",
        image : "./src/img/caraibes.jpg",
        slide:`<a href="hotels-search.html?country=Allemagne">Allemagne</a> - <a href="hotels-search.html?country=Belgique">Belgique</a> - <a href="hotels-search.html?country=France">France</a> - <a href="hotels-search.html?country=Portugal">Portugal</a>`,
        address : "Europe",
        slidebg : "./src/img/londres.png",
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
        continent : "Amerique centrale",
        description : "L'Amérique centrale, une région dynamique et culturellement riche, offre une multitude d'expériences luxueuses pour les voyageurs avides de découvertes. Que vous souhaitiez explorer les anciennes cités mayas du Guatemala, vous détendre sur les plages immaculées du Belize ou vous aventurer dans les forêts tropicales du Costa Rica, l'Amérique centrale regorge de trésors naturels et culturels à explorer. Nous sommes ravis de vous présenter notre sélection d'hôtels de luxe à travers cette région captivante, des lodges écologiques au cœur de la jungle aux complexes balnéaires luxueux en bord de mer. Immergez-vous dans une expérience de voyage exclusive, alliant confort, authenticité et hospitalité chaleureuse, et découvrez la diversité des paysages, des traditions et des saveurs de l'Amérique centrale. Que vous soyez passionné par l'aventure, la détente ou l'exploration culturelle, l'Amérique centrale vous promet des moments inoubliables et une escapade luxueuse dans un cadre enchanteur.",
        destinations : `<a href="hotels-search.html?country=Costa%20rica">COSTA RICA</a>`,
        top: "L'Amérique centrale regorge de magnifiques hôtels qui promettent de charmer les voyageurs les plus exigeants et de leur offrir des expériences luxueuses. Parmi eux, on trouve le légendaire Hotel El Convento à San Juan, Porto Rico, qui allie histoire et élégance dans un cadre enchanteur.",
        image : "./src/img/caraibes.jpg",
        slide:`<a href="hotels-search.html?country=Laos">Laos</a> - <a href="hotels-search.html?country=Japon">Japon</a> - <a href="hotels-search.html?country=Malaisie">Malaisie</a> - <a href="hotels-search.html?country=Sri%20lanka">Sri Lanka</a>`,
        address : "Asie",
        slidebg : "./src/img/asie.jpg",
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
        continent : "Amerique du Nord",
        description : "L'Amérique du Nord, un continent aux multiples visages, offre une pléthore d'expériences luxueuses pour les voyageurs en quête de découvertes et de confort. Que vous soyez attiré par les gratte-ciel étincelants de New York, les paysages grandioses des Rocheuses canadiennes ou les plages ensoleillées de la Californie, l'Amérique du Nord regorge de destinations emblématiques et de trésors cachés. Nous sommes enchantés de vous présenter notre sélection d'hôtels de luxe à travers ce vaste territoire, des hôtels de renommée mondiale au cœur des grandes villes aux lodges isolés dans les régions sauvages. Plongez dans une expérience raffinée où le confort, l'exclusivité et le service impeccable se combinent pour créer des souvenirs inoubliables. Que vous cherchiez à vivre une vie urbaine trépidante, à vous reconnecter avec la nature ou à vous détendre dans des stations balnéaires de renom, l'Amérique du Nord vous offre une escapade luxueuse qui répondra à toutes vos attentes.",
        destinations : `<a href="hotels-search.html?country=Canada">CANADA</a> · <a href="hotels-search.html?country=Etats-Unis">ETATS-UNIS</a> · <a href="hotels-search.html?country=Mexique">MEXIQUE</a>`,
        top: "L'Amérique du Nord regorge de magnifiques hôtels qui séduisent les voyageurs les plus exigeants et leur offrent des expériences luxueuses. Parmi eux, on trouve l'emblématique The Plaza à New York, un symbole intemporel du glamour et du raffinement, où des personnalités du monde entier ont séjourné.",
        image : "./src/img/canada.jpg",
        slide:`<a href="hotels-search.html?country=Arabie%20saoudite">Arabie Saoudite</a> - <a href="hotels-search.html?country=Emirats%20arabes%20unis">Emirats arabes unis</a> - <a href="hotels-search.html?country=Dubai">Dubai</a> - <a href="hotels-search.html?country=Oman">Oman</a> - <a href="hotels-search.html?country=Qatar">Qatar</a>`,
        address : "Moyen Orient",
        slidebg : "./src/img/qatar2.png",
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
        continent : "Amerique du Sud",
        description : "L'Amérique du Sud, un continent vibrant et diversifié, est une destination captivante pour les voyageurs en quête d'expériences luxueuses et d'aventures uniques. Que vous souhaitiez explorer les merveilles naturelles de la forêt amazonienne au Brésil, découvrir les sites historiques de la civilisation inca au Pérou ou vous détendre sur les plages paradisiaques de la côte caribéenne de la Colombie, l'Amérique du Sud regorge de trésors à découvrir. Nous sommes ravis de vous présenter notre sélection d'hôtels de luxe à travers ce continent envoûtant, des haciendas traditionnelles en Équateur aux resorts de luxe en Patagonie. Plongez dans une expérience de voyage exclusive, alliant confort, élégance et hospitalité chaleureuse, et laissez-vous séduire par la beauté époustouflante des paysages, la richesse culturelle et la passion vibrante de l'Amérique du Sud. Que vous soyez attiré par l'aventure, la gastronomie ou l'exploration des sites historiques, l'Amérique du Sud est prête à vous offrir une escapade luxueuse qui comblera tous vos désirs. Que vous cherchiez à vivre une vie urbaine trépidante, à vous reconnecter avec la nature ou à vous détendre dans des stations balnéaires de renom, l'Amérique du Nord vous offre une escapade luxueuse qui répondra à toutes vos attentes.",
        destinations : `<a href="hotels-search.html?country=Argentine">ARGENTINE</a> · <a href="hotels-search.html?country=Bresil">BRESIL</a> · <a href="hotels-search.html?country=Colombie">COLOMBIE</a> · <a href="hotels-search.html?country=Perou">PEROU</a>`,
        top: "L'Amérique du Sud regorge de joyaux hôteliers qui charment les voyageurs les plus exigeants et leur offrent des expériences inoubliables. Parmi eux, on retrouve l'emblématique Copacabana Palace à Rio de Janeiro, qui allie glamour et sophistication au cœur de la vibrante Cidade Maravilhosa.",
        image : "./src/img/colombie.jpg",
        slide:`<a href="hotels-search.html?country=Australie">Australie</a> - <a href="hotels-search.html?country=Polynesie%20francaise">Polynésie de française</a>`,
        address : "Océanie",
        slidebg : "./src/img/oceanie.jpg",
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
        continent : "Moyen Orient",
        description : "Hôtels de luxe au Moyen-Orient Le Moyen-Orient est une destination fascinante qui offre une combinaison unique de richesse culturelle, d'histoire ancienne et de modernité luxueuse. Des villes dynamiques comme Dubaï et Abu Dhabi aux oasis tranquilles d'Oman et aux paysages désertiques du Qatar, la région regorge d'hôtels de luxe qui vous garantissent une expérience mémorable. Imprégnez-vous du glamour incomparable de l'emblématique Burj Al Arab à Dubaï, où le luxe et l'extravagance atteignent des sommets. Découvrez l'élégance intemporelle du Qasr Al Sarab Desert Resort by Anantara, niché au cœur des dunes dorées du désert de Liwa. Ou laissez-vous charmer par l'atmosphère mystique du Alila Jabal Akhdar à Oman, perché sur les montagnes escarpées du Hajjar occidental. Que vous cherchiez à vous immerger dans la modernité dynamique ou à vous évader dans des oasis sereines, le Moyen-Orient vous promet des moments de pure indulgence et d'aventure exotique.",
        destinations : `<a href="hotels-search.html?country=Arabie%20saoudite">ARABIE SAOUDITE</a> · <a href="hotels-search.html?country=Emirats%20arabes%20unis">EMIRATES ARABES UNIS</a> · <a href="hotels-search.html?country=Dubai">DUBAI</a> · <a href="hotels-search.html?country=Oman">OMAN</a> · <a href="hotels-search.html?country=Qatar">QATAR</a>`,
        top: "Le Moyen-Orient regorge de joyaux hôteliers qui séduisent les voyageurs les plus exigeants grâce à leur opulence et leur hospitalité légendaires. Parmi eux, on trouve le luxueux Burj Al Arab à Dubaï, une icône architecturale en forme de voile qui surplombe la mer d'Arabie et offre des intérieurs somptueux et des vues à couper le souffle.",
        image : "./src/img/qatar.jpg",
        slide:`<a href="hotels-search.html?country=Allemagne">Allemagne</a> - <a href="hotels-search.html?country=Belgique">Belgique</a> - <a href="hotels-search.html?country=France">France</a> - <a href="hotels-search.html?country=Portugal">Portugal</a>`,
        address : "Europe",
        slidebg : "./src/img/londres.png",
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
]
