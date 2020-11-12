const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  caregiverSchema = new mongoose.Schema({
    firstName: String,
    email: String,

    //when 'select' is set to false, this field
    //will not show up in queries by default
    password: {type: String, select: false}
  })

  //this function will take a string and encrypt it with bcrypt:
  caregiverSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }

  //this function can take a given password and compare it to the encrypted version.
  //returns boolean: does the given password match? true / false:
  caregiverSchema.methods.validPassword = function(password) {
    if(!password) return false
    return bcrypt.compareSync(password, this.password)
  }

  caregiverSchema.pre('save', function(next) {
    const caregiver = this
    if(!caregiver.isModified('password')) return next()
    caregiver.password = caregiver.generateHash(caregiver.password)
    next()
  })

  module.exports = mongoose.model('Caregiver', caregiverSchema)
