import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";
// const nodemailer = require('nodemailer');

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   // Generate test SMTP service account from ethereal.email
  //   // Only needed if you don't have a real mail account for testing
  //   nodemailer.createTestAccount((err, account) => {
  //
  //       // create reusable transporter object using the default SMTP transport
  //       const transporter = nodemailer.createTransport({
  //       host: 'smtp.ethereal.email',
  //       port: 587,
  //       auth: {
  //           user: 'pwzugr7u3s64pujk@ethereal.email',
  //           pass: 'grGUNBvuttVzygcKUh'
  //       }
  //     });
  //
  //       // setup email data with unicode symbols
  //       let mailOptions = {
  //           from: `Delaguila Design Contact Form ${this.state.name}`, // sender address
  //           to: 'frank.delaguila@gmail.com', // list of receivers
  //           subject: 'An email from your website form!', // Subject line
  //           text: this.state.message, // plain text body
  //           html: '<b>Hello world?</b>' // html body
  //       };
  //
  //       // send mail with defined transport object
  //       transporter.sendMail(mailOptions, (error, info) => {
  //           if (error) {
  //               return console.log(error);
  //           }
  //           console.log('Message sent: %s', info.messageId);
  //           // Preview only available when sending through an Ethereal account
  //           console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  //
  //           // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
  //           // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  //       });
  //   });
  // }

  render() {
    return (
      <section className="contact section" id="contact">
        <Grid>
          <Row>
            <Col xs={12}>
              <h3 className="section-header contact-header">Contact</h3>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <h2 className="contact-copy">Contact Me if you want to bring your ideas to life!</h2>
            </Col>
            <Col className="contact-container" sm={12} md={6}>
              <h3><i className="fa fa-envelope contact-fa" aria-hidden="true"></i><a href="mailto:frank.delaguila@delaguiladesign.com">frank.delaguila@delaguiladesign.com</a></h3>
              <h3><i className="fa fa-phone-square contact-fa" aria-hidden="true"></i><a href="tel:1-435-256-1964">(435) 256-1964</a></h3>
            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}
