'use strict';

module.exports = {

  // --------------------------------------------------------------------

  post: function( req, res ) {
    console.log("res:::", req.body)
    res.ok(req.body)
  },


  get: function( req, res ) {
    console.log("res:::", req.query)
    res.ok(req.query)
  },


  delete: function( req, res ) {
    console.log("res:::", req.query)
    res.ok(req.query)
  },


  put: function( req, res ) {
    console.log("res:::", req.query)
    res.ok(req.query)
  },

  // --------------------------------------------------------------------

}
