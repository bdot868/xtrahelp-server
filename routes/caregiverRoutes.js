const
  express = require('express'),
  caregiversRouter = new express.Router(),
  caregiversCtrl =  require('../controllers/caregivers.js'),
  Caregiver = require('../models/Caregiver.js'),
  serverAuth = require('../config/serverAuth.js')

  caregiversRouter.post('/login', (req, res) => {
    //when a user attempts to log in, try and find the user by the provided email:
    Caregiver.findOne({email: req.body.email}, '+password', (err, caregiver) => {

      //if there is no user, or password is wrong, respond accordingly
      if(!caregiver || !caregiver.validPassword(req.body.password)) {
        return res.status(403).json({message: "invalid credentials"})
      }

      //if there is a caregiver and the password is correct,
      //generate token, that includes user in the payload (without the password):
      if(caregiver && caregiver.validPassword(req.body.password)){
        const caregiverData = caregiver.toObject()
        delete caregiverData.password

        const token = serverAuth.createToken(caregiverData)
        res.json({token: token})
      }
    })
  })

  caregiversRouter.route('/')
    .get(caregiversCtrl.index)
    .post(caregiversCtrl.create)

  //token ust be provided to access
  //the route declared after this middleware:
  caregiversRouter.use(serverAuth.authorize)

  caregiversRouter.route('/:id')
    .get(caregiversCtrl.show)
    .patch(caregiversCtrl.update)
    .delete(caregiversCtrl.destroy)

    module.exports = caregiversRouter
