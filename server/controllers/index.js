var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
  	// a function which handles a get request for all messages
	get: function (req, res) {
	
		models.messages.get(function (err, data){
			if(err){
				console.log(err);
			}
			res.json(data);
		})
    
    }, 
    
    // a function which handles posting a message to the database
    post: function (req, res) {
    	
    	var params = [req.body[text], req.body[username], req.body[roomname]];

    	models.messages.post(params, function (err, data){
    		if (err) {
    			console.log(err);
    		}
    		res.json(data);
    	})
		


    },

  users: {
    // Ditto as above
    get: function (req, res) {

    	models.users.get(function(err, data){
    		if (err) {
    			console.log(err);
    		}
			res.json(data);
		})
    },
    post: function (req, res) {

    		models.users.post(function(data){
			res.json(data);
		})
    }
  }
	}
}


