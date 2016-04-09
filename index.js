  // BASE SETUP
  // =============================================================================

  // call the packages we need
  var express     = require('express');
  var bodyParser  = require('body-parser');
  var request     = require('request');
  var https       = require('https');
  var app         = express();

  // configure body parser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  var port     = 8080; // set our port


  // VARIABLES
  // =============================================================================


  // FUNCTIONS
  // =============================================================================


  // ROUTES FOR API
  // =============================================================================

  // create our router
  var router = express.Router();

  router.get('/', function (req, res) {
    res.send('Hello World!');
  });


  router.get('/forward', function(req, res) {

    // api key for wunderground
    // 071926ac0009921e
    var config = {
      apiKey: 'c3e7df4f2d6a40698cc75fac1b6a2c83',
      lat: 40.7934,
      long: 77.8600,
      city: 'State College',
    };

    var url = 'http://apidev.accuweather.com/locations/v1/cities/geoposition.json?q='+config.lat+','+config.long+'&apikey='+config.apiKey;
    var requestOptions = {
      url: url
    };

    function callback(error, response, body) {
      res.send(body);
    }

    request.get(requestOptions, callback);

  });

  router.delete('/data', function(req, res) {
    res.send('deleting');
  });


  // REGISTER OUR ROUTES -------------------------------
  app.use('/api', router);



  // START THE SERVER
  // =============================================================================
  app.listen(port);
  console.log('Magic happens on port ' + port);
