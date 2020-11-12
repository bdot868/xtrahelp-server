const
  jwt = require('jsonwebtoken'),
  jwtSecret = process.env.JWT_SECRET || 'NARLY'

const serverAuth = {
  //CREATE A TOKEN THAT CONTAINS ANY DATA WE WANT TO PUT IN IT
  //USE OUR JWTSECRET TO CREATE THE token
  //AND INCLUDE AN EXPIRATION DATE IN THE PAYLOAD:
  createToken: function(data) {
    return jwt.sign(data, jwtSecret, {expiresIn: '1 day'})
  },

  //verify the authenticity of the token using the jwtSecret:
  verifyToken: function(token) {
    return jwt.verify(token, jwtSecret)
  },


  //middleware that we can use before responding to a request.
  //this would protect any route using this middleware from being accessed
  //unless the request contains a valid token:
  authorize: function(req, res, next) {
    //look for the token in the request body, query params,
    //or a custom header called x-access-token
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    //if no token, respond with status 403, unauthorized
    if(decoded) req.decoded = decoded

    // and move on to the originally requested route:
    next()
  }
}

module.exports = serverAuth
