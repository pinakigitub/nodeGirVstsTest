

var stateAndCityController = require('../controller/stateAndCityController');


module.exports = function (app, dir) {
    
    // app.get('/addDefaultState', stateAndCityController.addDefaultState);
    
    app.get('/getSingleCity', stateAndCityController.getSingleCity);
    app.get('/removeSpecificCity', stateAndCityController.removeSpecificCity);
    app.get('/getAllStates', stateAndCityController.getAllStates);
    app.post('/addNewState', stateAndCityController.addNewState);
    app.get('/', function(req, res){
        res.json({ message: "Server Working Fine" });
    });
    

}