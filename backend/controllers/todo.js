const Hotel = require("../models/todo");

exports.getHotels = async(req,res,next) =>{
    const pageSize = +req.query.pagesize;
    const currPage = +req.query.page;
    const hotelQuery = Hotel.find();
    let fetchHotel;
    if (pageSize && currPage){
        hotelQuery.skip(pageSize * (currPage -1 )).limit(pageSize);
    }
    await hotelQuery
        .then((doc)=>{
            fetchHotel = doc;
            return Hotel.countDocuments();
        })
        .then((count)=>{
            res.status(200).json({
                message: "All Hotels fetched 200!",
                hotels: fetchHotel,
                maxHotels: count,
            });
        })
        .catch((err)=>{
            res.status(500).json({
                message: "Fetching hotels failed!"
            });
        });
};

exports.createHotel = async(req , res , next)=>{
    const hotel = new Hotel({
        name : req.body.name,
        address : req.body.address,
        country : req.body.country,
        subtitle : req.body.subtitle,
        description : req.body.description,
        images : req.body.images,
        services : req.body.services,
        exceptions : req.body.exceptions,
        rooms : req.body.rooms,
        feedback : req.body.feedback,
        informations : {
            pratiques : {
                address : req.body.informations.pratiques.address,
                arrival : req.body.informations.pratiques.arrival,
                departure : req.body.informations.pratiques.departure,
                rooms : req.body.informations.pratiques.rooms,
                equipments : req.body.informations.pratiques.equipments,
                animals : req.body.informations.pratiques.animals,
                publicSpace : req.body.informations.pratiques.publicSpace,
                inRoom : req.body.informations.pratiques.inRoom,
                transfer : req.body.informations.pratiques.transfer,
                kids : req.body.informations.pratiques.kids,
                smokers : req.body.informations.pratiques.smokers,
                smokersRoom : req.body.informations.pratiques.smokersRoom,
                services : req.body.informations.pratiques.services,
                inclus : req.body.informations.pratiques.inclus,
            },
            restaurants : {
                cut : req.body.informations.restaurants.cut,
                bar : req.body.informations.restaurants.bar,
                breakfeastContinental : req.body.informations.restaurants.breakfeastContinental,
                breakfeastAmericain : req.body.informations.restaurants.breakfeastAmericain,
            },
            spa:{
                services : req.body.informations.spa.services,
                loisirs : req.body.informations.spa.loisirs,
            }

        },
        stars : req.body.stars,
    });
    await hotel
        .save()
        .then((result)=>{
            res.status(201).json({
                message:"Hotel added sucessfully",
                hotel: {
                    ...result._doc,
                    id: result._id,
                },
            });
        })
        .catch((err)=>{
            res.status(500).json({
                message: "Fail to create hotel!",
                error : err,
            })
        })
}

exports.getHotelById = async(req, res , next)=>{
    await Hotel.findById(req.params.id)
        .then((hotel)=>{
            if(hotel){
                res.status(200).json(hotel);
            }
            else{
                res.status(404).json({message: "Hotel not Found!"})
            }
        })
        .catch((err)=>{
            res.status(500).json({
                message: "Fetching hotel failed",
            });
        });
}

exports.updateHotel = async(req , res , next)=>{
    /* const hotel = new Hotel({
        _id : req.params.id,
        name : req.body.name,
        address : req.body.address,
        country : req.body.country,
        subtitle : req.body.subtitle,
        description : req.body.description,
        images : req.body.images,
        services : req.body.services,
        exceptions : req.body.exceptions,
        rooms : req.body.rooms,
        feedback : req.body.feedback,
        informations : {
            pratiques : {
                address : req.body.informations.pratiques.address,
                arrival : req.body.informations.pratiques.arrival,
                departure : req.body.informations.pratiques.departure,
                rooms : req.body.informations.pratiques.rooms,
                equipments : req.body.informations.pratiques.equipments,
                animals : req.body.informations.pratiques.animals,
                publicSpace : req.body.informations.pratiques.publicSpace,
                inRoom : req.body.informations.pratiques.inRoom,
                transfer : req.body.informations.pratiques.transfer,
                kids : req.body.informations.pratiques.kids,
                smokers : req.body.informations.pratiques.smokers,
                smokersRoom : req.body.informations.pratiques.smokersRoom,
                services : req.body.informations.pratiques.services,
                inclus : req.body.informations.pratiques.inclus,
            },
            restaurants : {
                cut : req.body.informations.restaurants.cut,
                bar : req.body.informations.restaurants.bar,
                breakfeastContinental : req.body.informations.restaurants.breakfeastContinental,
                breakfeastAmericain : req.body.informations.restaurants.breakfeastAmericain,
            },
            spa:{
                services : req.body.informations.spa.services,
                loisirs : req.body.informations.spa.loisirs,
            }

        },
        stars : req.body.stars,
    }); */
    await Hotel.updateOne({_id: req.params.id}, req.body)
        .then((result)=>{
            res.status(200).json({message:"Update is successful!"});
        })
        .catch((err)=>{
            res.status(500).json({
                message: "Couldn't update hotel!",
                error : err,
            })
        })
}

exports.deleteHotel = async(req, res, next) =>{
    await Hotel.deleteOne({ _id: req.params.id })
    .then((resp) =>{
       res.status (200).json({ message: "Delete is successful!" });
    })
    .catch((error) =>{
        res.status (500).json({
            message: "Couldn't delete hotel!",
            err: error
        });
    });
};
