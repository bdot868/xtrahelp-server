const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  usersRoutes = require('./routes/users.js'),
  // bookingRoutes = require('./routes/bookings.js'),
  //require caregiver routes
  caregiversRoutes = require('./routes/caregiverRoutes.js'),
  cors = require('cors'),
  request = require('request'),
  mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/XtraHelp',
  port = process.env.PORT || 3001

  // connect to mongodb;
  mongoose.connect(mongoUrl, (err) => {
    console.log(err ||'Connected to MongoDB 🤘🏽');
  })

  //Log all incoming requests to the console
  app.use(logger('dev'))

  //allow incoming ajax requests from other domains (including other localhost ports)
  app.use(cors())

  //Interpret bodies of data that are included in requests:
  app.use(bodyParser.json()) //interpret json bodies
  app.use(bodyParser.urlencoded({extended: false})) //interpret form data


  //server root route:
  app.get('/', function (req,res) {
    res.json({message: "Server root. All API routes start with Xtra Help"});
  });

  app.use('/xtrahelp/api/users', usersRoutes)
  app.use('/xtrahelp/api/caregivers', caregiversRoutes)
  // app.use('/api/bookings', bookingRoutes)

  app.listen(port, (err) => {
    console.log(err || `Xtrahelp backend app listening on port ${port}!`);
  });
