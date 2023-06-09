var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'99.000webhost.io',
	user:'id20772047_database',
	password:'Admincms@123',
	database:'id20772047_sample'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});

module.exports = connection;
