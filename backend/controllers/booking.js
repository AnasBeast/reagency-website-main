const Booking = require("../models/booking");

exports.getBookings = async(req,res,next) =>{
    const pageSize = +req.query.pagesize;
    const currPage = +req.query.page;
    const bookingQuery = Booking.find();
    let fetchBooking;
    if (pageSize && currPage){
        bookingQuery.skip(pageSize * (currPage -1 )).limit(pageSize);
    }
    await bookingQuery
        .then((doc)=>{
            fetchBooking = doc;
            return Booking.countDocuments();
        })
        .then((count)=>{
            res.status(200).json({
                message: "All Bookings fetched 200!",
                bookings: fetchBooking,
                maxBookings: count,
            });
        })
        .catch((err)=>{
            res.status(500).json({
                message: "Fetching bookings failed!"
            });
        });
};

exports.createBooking = async(req , res , next)=>{
    const booking = new Booking({
        prenom : req.body.prenom,
        nom : req.body.nom,
        pays : req.body.pays,
        email : req.body.email,
        number : req.body.number,
        message : req.body.message,
        hotel : req.body.hotel,
        room : req.body.room,
        adultes : req.body.adultes,
        enfants : req.body.enfants,
        duree : req.body.duree,
    });
    await booking
        .save()
        .then((result)=>{
            res.status(201).json({
                message:"Booking added sucessfully",
                hotel: {
                    ...result._doc,
                    id: result._id,
                },
            });
        })
        .catch((err)=>{
            res.status(500).json({
                message: "Fail to create Booking!",
                error : err,
            })
        })
}

exports.getHotelById = async(req, res , next)=>{
    await Booking.findById(req.params.id)
        .then((booking)=>{
            if(booking){
                res.status(200).json(booking);
            }
            else{
                res.status(404).json({message: "Booking not Found!"})
            }
        })
        .catch((err)=>{
            res.status(500).json({
                message: "Fetching booking failed",
            });
        });
}



exports.deleteBooking = async(req, res, next) =>{
    await Booking.deleteOne({ _id: req.params.id })
    .then((resp) =>{
       res.status (200).json({ message: "Delete is successful!" });
    })
    .catch((error) =>{
        res.status (500).json({
            message: "Couldn't delete booking!",
            err: error
        });
    });
};

exports.searchBookings = async(req,res,next) =>{
    const query = req.query.query
    await Booking.find({
        $or: [
            {
              nom: {
                $regex: ".*" + query + ".*",
                $options: "i",
              },
            },
            {
              prenom: {
                $regex: ".*" + query + ".*",
                $options: "i",
              },
            },
            {
                pays: {
                  $regex: ".*" + query + ".*",
                  $options: "i",
                },
            },
            {
                number: {
                  $regex: ".*" + query + ".*",
                  $options: "i",
                },
            },
            {
                email: {
                  $regex: ".*" + query + ".*",
                  $options: "i",
                },
            }
          ],
        })
        .then((resp) =>{
            res.status (200).json({ 
                data : resp

            });
         })
         .catch((error) =>{
             res.status (500).json({
                 message: "Couldn't found any booking!",
                 err: error
             });
         });
        
};