var db = require('../db');

//database interface


module.exports = {
  messages: {
    get: function (callback) { 
    	//get the messages table from the database
  		// db.database query 
  		var queryString = 'SELECT * from messages';

  		db.query(queryString, function (error, results){
  			callback(results);
  		})

    }, // a function which produces all the messages
    post: function (msg, callback) {

    	var queryString = 'INSERT INTO messages (user id, text, roomname) VALUES ("?","?","?"")'; 

    	db.query(queryString, msg, function (error, results){
  			callback(results); 
  		})

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
		db.query('SELECT * from users', function (error, results){
  			callback(results);
  		})    	
    },
    post: function (msg) {
    	var queryString = 'INSERT INTO users (username) VALUES ("?")'; 

    	db.query(queryString, msg, function (error, results){
  			callback(results); 
  		})

    }
  }
};

