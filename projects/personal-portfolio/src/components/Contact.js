import React, {Component} from "react";
import {Grid, Row, Col, Form, FormControl, Button} from "react-bootstrap";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

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
                <FormControl placeholder="Name" />
                <FormControl placeholder="Email" />
                <FormControl componentClass="textarea" placeholder="Message" />
                <Button className="contact-button" bsStyle="primary">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}
