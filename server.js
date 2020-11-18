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
  const connectionString = "  mongodb+srv://bdot868:mongoP@$$vv0rd@cluster0.dkx4q.mongodb.net/<dbname>?retryWrites=true&w=majority"


    // connect to mongodb;
    mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then(() => {
        console.log('Connected to MongoDB 🤘🏽');
      })
      .catch(err => console.log(err))


  //Log all incoming requests to the console
  app.use(logger('dev'))

  //allow incoming ajax requests from other domains (including other localhost ports)
  app.use(cors())

  //Interpret bodies of data that are included in requests:
  app.use(bodyParser.urlencoded({extended: false})) //interpret form data
  app.use(bodyParser.json()) //interpret json bodies



  //server root route:
  app.use(express.static('client/build'));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

  app.use('/api/users', usersRoutes)
  app.use('/api/caregivers', caregiversRoutes)
  // app.use('/api/bookings', bookingRoutes)

  app.listen(port, (err) => {
    console.log(err || `Xtrahelp backend app listening on port ${port}!`);
  });
