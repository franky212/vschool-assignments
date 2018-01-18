import React from "react";

export default function Omnifood() {
  const styles = {
    exampleBanner: {
      backgroundColor: "whitesmoke",
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${require("../img/section-bg.jpg")})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "50vh",
      backgroundPosition: "100% 100%",
      position: "relative"
    },
    exampleBody: {
      backgroundColor: "whitesmoke",
      textAlign: "center",
      height: "100%",
      paddingTop: "30px",
      paddingBottom: "30px",
      lineHeight: "150%",
      p: {
        marginTop: "30px",
        marginBottom: "30px"
      }
    },
    img: {
      display: "block",
      width: "100%"
    }
  }
  return (
    <div>
      <div style={styles.exampleBanner}>
        <a href="/" className="example-link">Back Home</a>
      </div>
      <div style={styles.exampleBody}>
        <div className="example-body">
          <p style={styles.exampleBody.p}>If you would like to view this example live then click this <a rel="noopener noreferrer" target="_blank" href="http://frankdelaguila-omnifood.surge.sh/">link</a>. Deployed using Heroku.</p>
          <img style={styles.img} src={require("../img/work1.jpg")} alt="Omnifood example" />
          <p style={styles.exampleBody.p}>I wanted to create portfolio work that I could be proud of, so I decided to make a small one page fictional business website. The site is fully responsive, and comes with a mobile menu as well. The premise is a food delivery site that highlights their mobile application, locations, reviews, pricing, and a way to get in contact with them.</p>
        </div>
      </div>
    </div>
  )
}
