const
  Caregiver = require('../models/Caregiver.js'),
  serverAuth = require('../config/serverAuth.js')

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}

function index(req, res) {
  Caregiver.find({}, '-__v', (err, caregivers) => {
    res.json(caregivers)
  })
}

function show(req, res) {
  Caregiver.findById(req.params.id, (err, caregiver) => {
    res.json(caregiver)
  })
}

function create(req, res) {
  Caregiver.create(req.body, (err, caregiver) => {
    const caregiverData = caregiver.toObject()
    delete caregiverData.password
    const token = serverAuth.createToken(caregiverData)

    res.json({success: true, message: "Caregiver account created.", caregiver, token})
  })
}

function update(req, res) {
  Caregiver.findById(req.params.id, (err, caregiver) => {
    if(err) return console.log(err)
    Object.assign(caregiver, req.body)
    caregiver.save((err) => {
      res.json({success: true, message: "Caregiver updated...", caregiver: caregiver})
    })
  })
}

function destroy(req, res) {
  Caregiver.findByIdAndRemove(req.params.id, (err, caregiver) => {
    if(err) return console.log(err)
    res.json({success: true, message: "Caregiver deleted..."})
  })
}
