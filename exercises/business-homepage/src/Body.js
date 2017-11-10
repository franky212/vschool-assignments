import React from "react";

import NavbarContainer from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

import {Grid, Row, Col} from "react-bootstrap";

function Body() {
  const styles = {
    copy: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 100
    },
    copyHeading: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 700,
      textAlign: "center",
      fontSize: "2.1em",
      marginBottom: "30px",
      textTransform: "uppercase"
    },
    beardLogo: {
      maxWidth: "100%",
      display: "block",
      margin: "0 auto",
      verticalAlign: "middle"
    }
  }
  return (
    <div>
      <NavbarContainer />
      <img className="banner-img" src={require("./img1.jpg")} alt="Some Dude"/>

      <section className="about">
        <Grid>
          <Row>
            <Col md={6} sm={12}>
              <h3 style={styles.copyHeading} className="info-heading">ABOUT US</h3>
              <p style={styles.copy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et neque hendrerit, placerat massa ornare, blandit purus. Ut vel porta nibh, tincidunt porttitor erat. Donec malesuada et mi ut aliquam. Aliquam consequat ultricies augue et volutpat. Vestibulum eget eros sed augue accumsan aliquam. Nunc a auctor massa. Suspendisse eu odio ornare, hendrerit purus sit amet, posuere leo. Curabitur eget nisi placerat nibh aliquam volutpat a sit amet enim. Duis dapibus turpis eu placerat mattis. Ut urna mauris, tincidunt et libero ac, aliquam ullamcorper diam. In dignissim vulputate orci in pretium. Nullam mollis sagittis velit, ut hendrerit metus rhoncus sit amet. Mauris luctus pharetra finibus.</p>
            </Col>
            <Col md={6} sm={12}>
              <img style={styles.beardLogo} src={require("./beard-logo.png")} />
            </Col>
          </Row>
        </Grid>
      </section>

      <section className="products">
          <Grid>
            <Row>
              <Col xs={12}>
                <h3 style={styles.copyHeading} className="info-heading">products</h3>
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={12}>
                <Card imgSrc={require("./oil1.jpg")} heading="Urban Garden Beard Oil" productInfo="This beard oil will moisturize your skin while making your beard the thickest it has ever been." />
              </Col>
              <Col md={4} sm={12}>
                <Card imgSrc={require("./oil2.jpg")} heading="Old Money Beard Oil - Best Seller" productInfo="It doesn't do anything different. It's just different in your wallet. You go ahead, and Enjoy that."/>
              </Col>
              <Col md={4} sm={12}>
                <Card imgSrc={require("./oil3.jpg")} heading="Tree Ranger Beard Oil" productInfo="GIT GIT GIT GIT GIT GIT GIT GIT GIT GIT GIT GIT GIT GIT GIT GIT GIT GIT GIT PANDA"/>
              </Col>
            </Row>
          </Grid>
      </section>

      <Footer />
    </div>
  );
}

export default Body;
