var orm = require('../config/orm.js');

var user = {
	all: function(cb) {
		orm.all('users', function(res){
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.create('users', cols, vals, function(res){
			cb(res);
		});
	}
};

module.exports = user;
