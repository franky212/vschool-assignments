import React from "react";

const styles = {
  textAlign: "center",
  boxShadow: "5px 5px 5px #eee",
  padding: "15px",
  fontSize: "1.5em",
  textTransform: "uppercase",
  letterSpacing: "3px",
  fontFamily: "sans-serif"
}

export default function Header(props) {
  return (
    <header style={styles}>
      <h1>Contacts</h1>
    </header>
  )
}
