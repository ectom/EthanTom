var path = require('path')
var sendMail = require('../controllers/sendMail.js');

module.exports = function(app){
	app.post('/send', sendMail.send); // send mail with contact form
	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("./public/dist/index.html"))
	});
}
