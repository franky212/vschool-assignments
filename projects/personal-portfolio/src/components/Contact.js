import React, {Component} from "react";
import {Grid, Row, Col, Form, FormControl, Button} from "react-bootstrap";
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
      <section className="contact">
        <Grid>
          <Row>
            <Col xs={12}>
              <h3 className="section-header contact-header">Contact</h3>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <p className="contact-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed neque vitae leo molestie consequat. Mauris dapibus felis nec quam vehicula vulputate. Aliquam blandit mi faucibus justo pretium, ut porta nunc lobortis. Nullam justo purus, porta eu vestibulum vitae, ullamcorper in neque. Nulla condimentum eget sapien vel lobortis. Sed rhoncus varius tempor. Etiam sodales est tempor, tincidunt lacus vel, tincidunt nisi. Aenean fermentum, erat eget bibendum ornare, justo dui interdum justo, vitae efficitur lacus orci non nisi. Fusce eleifend lacus vel dui ullamcorper sagittis. Etiam eget dignissim.</p>
            </Col>
            <Col className="contact-container" sm={12} md={6}>
              <Form className="contact-form">
                <FormControl name="name" onChange={this.handleChange.bind(this)} placeholder="Name" />
                <FormControl name="email" type="email" onChange={this.handleChange.bind(this)} placeholder="Email" />
                <FormControl name="message" onChange={this.handleChange.bind(this)} componentClass="textarea" placeholder="Message" />
                <Button className="contact-button" bsStyle="primary">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}
