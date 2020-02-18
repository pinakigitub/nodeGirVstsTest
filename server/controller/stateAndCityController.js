
var stateAndCityModel = require('../model/stateAndCity');
var stateAndCitySchema = stateAndCityModel.getstateAndCityModelSchema();
var ObjectId = require('mongodb').ObjectID;

exports.removeSpecificCity = function (req, res) {
  
  stateAndCitySchema.remove({ state: req.query.state }, function (err, affected, resp) {
      if (err)
          return res.send(500, { error: err });
      else {
        res.json({message: "State successfully removed!",data: affected });
      }
  });
};

exports.getSingleCity = function (req, res) {
  console.log(req.query.state);
  stateAndCitySchema.findOne({ state: req.query.state }).exec(function (err, obj) {
    res.json({message: "State successfully returned!",data: obj });
  })
};

exports.getAllStates = function (req, res) {
  stateAndCitySchema.find({}).exec(function (err, collection) {
    res.json({message: "State successfully added!", data: collection });
   // res.send(collection);
  })
};
exports.addNewState = function (req, res) {
  var cityData = req.body;
  var id = cityData._id;
  var userCrendatialToUpdate = {};
  userCrendatialToUpdate = Object.assign(userCrendatialToUpdate, cityData);
  delete userCrendatialToUpdate._id;
  console.log(userCrendatialToUpdate);
  var query = { '_id': ObjectId(id) };
  stateAndCitySchema.findOneAndUpdate(query, userCrendatialToUpdate, { upsert: true },
     function (err, doc) {
    if (err)
    res.send(err);
    else {
      res.json({message: "State successfully added!", data: doc });
    
    }
  });

};

// exports.addDefaultState = function (req, res) {
//   var cityData = {
//     state: 'IL',
//     CountyList: [{
//       CountyName: 'Cook',
//       cityList: [
//         {
//           CityName: 'Chicago',
//           Zipcode: [1234, 5678]
//         }
//       ]
//     }

//     ]

//   };

//   var id = cityData._id;

//   var userCrendatialToUpdate = {};
//   userCrendatialToUpdate = Object.assign(userCrendatialToUpdate, cityData);
//   delete userCrendatialToUpdate._id;
//   console.log(userCrendatialToUpdate);
//   var query = { '_id': ObjectId(id) };
//   stateAndCitySchema.findOneAndUpdate(query, userCrendatialToUpdate, { upsert: true }, function (err, doc) {
//     if (err)
//     res.send(err);
//     else {
//       res.json({message: "Book successfully added!", doc });
//     }
//   });

// };
