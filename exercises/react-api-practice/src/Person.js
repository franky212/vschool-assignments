import React from "react";

function Person(props) {
  const styles = {
    hitCard: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.info.image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      display: "inline-block",
      height: "300px",
      width: "50%",
      color: "#fff",
      position: "relative",
      cursor: "pointer"
    },
    targetName: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      width: "100%"
    },
    small: {
      fontWeight: "300"
    },
    header: {
      fontWeight: "700",
      letterSpacing: "5px",
      textTransform: "uppercase"
    }
  }
  return (
    <div style={styles.hitCard} className="hitCard">
      <div style={styles.targetName}>
        <h1 style={styles.header}>{props.info.name}</h1>
        <small style={styles.small}>Price: Contact The Don</small>
      </div>
    </div>
  )
}

export default Person;
