const path = require("path");
// const fs = require("fs");

const { validationResult } = require("express-validator");

const Trip = require("../models/trip");
const Company = require("../models/company");
const Account = require("../models/account");
const vehicle = require("../models/vehicle");

exports.createTrip = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation Failed, Incorrect data entered.");
    error.statusCode = 422;
    error.errors = errors.array();
    throw error;
  }

  const from = req.body.from;
  const to = req.body.to;
  const date = req.body.date;
  const vehicle = req.body.vehicle;
  const ticketsCount = req.body.ticketsCount;
  const branch = req.body.branch;
  const time = req.body.time;
  const fare = req.body.fare;

  let creator;

  Account.findById(req.loggedInUserId)
    .then(async (account) => {
      if (account) {
        return await Company.findOne({ account: account._id });
      } else {
        return await Company.findById(req.loggedInUserId);
      }
    })
    .then((company) => {
      creator = company;

      const trip = new Trip({
        from: from,
        to: to,
        date: date,
        time: time,
        fare: fare,
        vehicle: vehicle,
        branch: branch,
        ticketsCount: ticketsCount,
        creator: creator._id,
      });

      trip
        .save()
        .then((savedTrip) => {
          company.trips.push(trip);
          return company.save();
        })
        .then((updatedTrip) => {
          const {
            _id,
            from,
            to,
            date,
            time,
            fare,
            vehicle,
            // driver,
            ticketsCount,
            tripName,
          } = trip;
          res.status(201).json({
            message: "Trip created, Successfully",

            trip: {
              _id,
              from,
              to,
              date,
              time,
              fare,
              vehicle,
              branch,
              ticketsCount,
              tripName,
            },
            creator: { _id: creator._id, name: creator.name },
          });
        });
    })
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};

exports.deleteTrip = (req, res, next) => {
  const tripId = req.params.tripId;
  Trip.findById(tripId)
    .then((trip) => {
      if (!trip) {
        const error = new Error(
          "Could not find any Trip with the given tripId"
        );
        error.statusCode = 404;
        throw error;
      }

      Account.findById(req.loggedInUserId)
        .then((account) => {
          return Company.findOne({ _id: trip.creator });
        })
        .then((company) => {
          company.trips.pull(tripId);
          return company.save();
        });

      return Trip.findByIdAndRemove(tripId);
    })

    .then((result) => {
      res.status(200).json({
        message: "Trip deleted successfully.",
      });
    })
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};

exports.editTrip = (req, res, next) => {
  const tripId = req.params.tripId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation Failed, Incorrect data entered.");
    error.statusCode = 422;
    error.errors = errors.array();
    throw error;
  }

  const from = req.body.from;
  const to = req.body.to;
  const date = req.body.date;
  const vehicle = req.body.vehicle;
  const branch = req.body.branch;
  const time = req.body.time;
  const ticketsCount = req.body.ticketsCount;
  const fare = req.body.fare;

  Trip.findById(tripId)
    .then((fetchedTrip) => {
      if (!fetchedTrip) {
        const error = new Error(
          "Could not find any Trip with the given tripId"
        );
        error.statusCode = 404;
        throw error;
      }

      fetchedTrip.from = from;
      fetchedTrip.to = to;
      fetchedTrip.date = date;
      fetchedTrip.vehicle = vehicle;
      fetchedTrip.branch = branch;
      fetchedTrip.time = time;
      fetchedTrip.fare = fare;
      fetchedTrip.ticketsCount = ticketsCount;

      return fetchedTrip.save();
    })
    .then((updatedTrip) => {
      res.status(200).json({
        message: "Trip updated",
        trip: updatedTrip,
      });
    })
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};

exports.getTrips = (req, res, next) => {
  Account.findById(req.loggedInUserId)
    .then(async (account) => {
      if (account) {
        return await Company.findOne({ account: account._id });
      } else {
        return await Company.findById(req.loggedInUserId);
      }
    })
    .then((company) => {
      return Trip.find({ _id: { $in: company.trips } })
        .populate("vehicle")
        .populate("branch")
        .populate("from")
        .populate("to")
        .sort({
          createdAt: -1,
        });
    })

    .then((trips) => {
      res.json({
        trips: trips,
      });
    })
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};

exports.getTrip = (req, res, next) => {
  const tripId = req.params.tripId;
  Trip.findById(tripId)
    .populate("vehicle")
    .populate("branch")
    .populate("from")
    .populate("to")
    .then((trip) => {
      if (!trip) {
        const error = new Error(
          "Could not find any Trip with the given tripId"
        );
        error.statusCode = 404;
        throw error;
      }
      res
        .status(200)
        .json({ message: "Trip fetched successfully", trip: trip });
    })

    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};

// const clearImage = (filepath) => {
//   filepath = path.join(__dirname, "../", filepath);
//   fs.unlink(filepath, (err) => {
//     console.log(err);
//   });
// };
