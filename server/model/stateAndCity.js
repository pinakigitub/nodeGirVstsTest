
var mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectID;
var stateAndCitySchema = mongoose.Schema({
  state: { type: String, unique: true },
  CountyList: [
    {
      CountyName: {
        "type": String,
        "required": true
      },
      cityList: [
        {
          CityName: {
            "type": String,
            "required": true
          },
          Zipcode: [{
            "type": String,
            "required": true,
            minlength: 5
          }

          ]

        }
      ]
    }
  ]
});
var stateAndCityModel = mongoose.model('State', stateAndCitySchema);

exports.getstateAndCityModelSchema = function (req, res) {
  return stateAndCityModel;
};



