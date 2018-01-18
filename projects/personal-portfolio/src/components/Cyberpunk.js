import React from "react";

export default function Cyberpunk() {
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
      p: {
        marginTop: "30px",
        marginBottom: "30px"
      }
    }
  }
  return (
    <div>
      <div style={styles.exampleBanner}>
        <a href="/" className="example-link">Back Home</a>
      </div>
      <div style={styles.exampleBody}>
        <div className="example-body">
          <p style={styles.exampleBody.p}>If you want to view the code on Github, follow this <a rel="noopener noreferrer" target="_blank" href="https://github.com/V-School-October/cyberpunk-rpg">link</a></p>
          <p style={styles.exampleBody.p}>If you would like to view this example live then click this <a rel="noopener noreferrer" target="_blank" href="https://cyberpunk2047.herokuapp.com/">link</a>. Deployed using Heroku.</p>
          <img src={require("../img/cyberpunk2047.png")} alt="Login Screen for Cyberpunk 2047" />
          <p style={styles.exampleBody.p}>Upon login, users are redirected to the character screen where they are able to view stats such as HP & Currency, as well as the current items in their inventory.</p>
          <img src={require("../img/characterscreen.png")} alt="Character screen for Cyberpunk 2047" />
          <p style={styles.exampleBody.p}>In the shop, users are able to purchase items with currency for use in battle.</p>
          <img src={require("../img/shopscreen.png")} alt="Shop screen for Cyberpunk 2047" />
          <p style={styles.exampleBody.p}>In the battle screen, users are able to fight enemies for currency and item drops. There are two conditional renders, for the Game Over and Win screens, pictured below:</p>
          <img src={require("../img/battlescreen.png")} alt="Battle screen for Cyberpunk 2047" />
          <img src={require("../img/winscreen.png")} alt="Win screen for Cyberpunk 2047" />
          <img src={require("../img/gameover.png")} alt="Game over screen for Cyberpunk 2047" />
        </div>
      </div>
    </div>
  )
}
