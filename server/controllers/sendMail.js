var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var Contact = mongoose.model('Contact');
require('dotenv').config();

module.exports = {
    send: function(req, res) {
        var transporter = nodemailer.createTransport({
            port: 465,
            secure: true, // true for 465, false for other ports
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_ADDR,
                pass: process.env.EMAIL_PASS
            }
        });

        var mailOptions = {
            from: process.env.EMAIL_ADDR,
            to: process.env.EMAIL_ADDR,
            subject: req.body.subject,
            text: 'Name: ' + req.body.firstName + ' ' + req.body.lastName + '\nEmail: ' + req.body.emailAddress + '\nMessage:\n' + req.body.message
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        // ---------------- save to database ------------------------
        var contact = new Contact(req.body);
        var find = Contact.findOne({emailAddress: req.body.email})
        if (find == undefined) {
            contact.save()
                .then(() => {
                    console.log('successfully added contact');
                    res.json(true);
                })
                .catch(errors => res.status(450).json(errors));
        } else {
            Contact.findOneAndUpdate(
                req.body.email
            , {
                $addToSet: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    subject: req.body.subject,
                    message: req.body.message
                }
            }).exec(function(err, db_res) {
                if (err) {
                    throw err;
                    console.log('error', err)
                    res.status(500).json(err)
                } else {
                    console.log(db_res);
                    res.json(true)
                }
            })
        }
    }
}
