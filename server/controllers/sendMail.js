var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var ses = require('nodemailer-ses-transport');
var Contact = mongoose.model('Contact');
require('dotenv').config();

module.exports = {
    send: function(req, res) {

        const transporter = nodemailer.createTransport(ses({
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY
        }));

        const mailOptions = {
            from: "no-reply@ethanchristophertom.com",
            to: 'ethanchristophertom@gmail.com',
            subject: req.body.subject,
            text: 'Name: ' + req.body.firstName + ' ' + req.body.lastName + '\nEmail: ' + req.body.emailAddress + '\nMessage:\n' + req.body.message,
            // cc:,
            // bcc:,
            // attachments: [{
            //     filename: 'My Cool Document',
            //     path: 'https://path/to/cool-document.docx',
            //     contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            // }]

        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        // ---------------- save to database ------------------------
        const contact = new Contact(req.body);
        // const find = Contact.findOne({emailAddress: req.body.email});
        // if (find == undefined) {
        contact.save()
            .then(() => {
                console.log('successfully added contact');
                res.json(true);
            })
            .catch(errors => res.status(450).json(errors));
        // } else {
        //     Contact.findOneAndUpdate(
        //         req.body.emailAddress,
        //         {
        //         $addToSet: {
        //             firstName: req.body.firstName,
        //             lastName: req.body.lastName,
        //             subject: req.body.subject,
        //             message: req.body.message
        //         }
        //     }).exec(function(err, db_res) {
        //         if (err) {
        //             throw err;
        //             console.log('error', err)
        //             res.status(500).json(err)
        //         } else {
        //             console.log(db_res);
        //             res.json(true)
        //         }
        //     })
        // }
    }
}
