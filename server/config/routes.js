var path = require('path')
var polls = require('../controllers/polls.js')
var sendMail = require('../controllers/sendMail.js');

module.exports = function(app){
	app.post('/send', sendMail.send); // send mail with contact form
	app.get('/polls', polls.getAll);   // get all polls
	app.post('/polls', polls.createPoll);  // create poll
	app.get('/polls/delete/:id', polls.destroy);   //get one poll
	app.get('/polls/:id', polls.getOne);   //get one poll
	app.get('/vote/:id/:str', polls.vote); //vote
	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("./public/dist/index.html"))
	});
}
