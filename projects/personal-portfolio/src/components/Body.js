import React from "react";
import {Grid, Row, Col} from "react-bootstrap";

export default function Body() {
  return (
    <div>
      <div className="section">
        <Grid>
          <Row className="show-grid">
            <Col md={4} sm={12}>
              <i class="fa fa-css3" aria-hidden="true"></i>
              <h3 className="icon-header">Design</h3>
              <p className="copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a volutpat augue. Pellentesque dignissim mattis magna. Praesent elementum, dui vitae scelerisque auctor, sapien magna congue arcu, in feugiat eros eros id diam. Integer tellus nibh, lacinia consectetur venenatis ac, aliquet sed.</p>
            </Col>
            <Col md={4} sm={12}>
              <i class="fa fa-code" aria-hidden="true"></i>
              <h3 className="icon-header">Code</h3>
              <p className="copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a volutpat augue. Pellentesque dignissim mattis magna. Praesent elementum, dui vitae scelerisque auctor, sapien magna congue arcu, in feugiat eros eros id diam. Integer tellus nibh, lacinia consectetur venenatis ac, aliquet sed.</p>
            </Col>
            <Col md={4} sm={12}>
              <i class="fa fa-rocket" aria-hidden="true"></i>
              <h3 className="icon-header">Launch</h3>
              <p className="copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a volutpat augue. Pellentesque dignissim mattis magna. Praesent elementum, dui vitae scelerisque auctor, sapien magna congue arcu, in feugiat eros eros id diam. Integer tellus nibh, lacinia consectetur venenatis ac, aliquet sed.</p>
            </Col>
          </Row>
      </Grid>
    </div>

    <div class="section colored"></div>
  </div>
  )
}
