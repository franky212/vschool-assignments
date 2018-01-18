import React from "react";

export default function Whatsgoingon() {
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
          <p style={styles.exampleBody.p}>If you would like to view this example live then click this <a rel="noopener noreferrer" target="_blank" href="http://whats-going-on.surge.sh/">link</a>. Deployed using Surge.</p>
          <img style={styles.img} src={require("../img/work2.jpg")} alt="What's Going On example" />
          <p style={styles.exampleBody.p}>I’ve been working on a React based app called What’s Going On in my spare time as project work. The premise is having an interactive way to view events that are near a user as well as business' being able to post events to the map for users to see.</p>
        </div>
      </div>
    </div>
  )
}
