/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'post /post/fetch': {
    controller: 'crudController',
    action : "post"
  },
  // 'post /post/fetch': 'crudController.post'



  'post /postSocket/fetch': {
    controller: 'crudController',
    action : "postSocket"
  },

  // 'post /postSocket/fetch': 'crudController.postSocket'





  'get /get/fetch': {
    controller: 'crudController',
    action : "get"
  },

  // 'get /get/fetch': 'crudController.get'

  'get /getSocket/fetch': {
    controller: 'crudController',
    action : "getSocket"
  },

  // 'get /getSocket/fetch': 'crudController.getSocket'



  'delete /delete/fetch': {
    controller: 'crudController',
    action : "delete"
  },

  // 'delete /delete/fetch': 'crudController.delete'



  'delete /deleteSocket/fetch': {
    controller: 'crudController',
    action : "deleteSocket"
  },

  // 'get /deleteSocket/fetch': 'crudController.deleteSocket'


  'put /put/fetch': {
    controller: 'crudController',
    action : "put"
  },

  // 'put /put/fetch': 'crudController.put'



  'put /putSocket/fetch': {
    controller: 'crudController',
    action : "putSocket"
  },

  // 'put /putSocket/fetch': 'crudController.putSocket'




  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
