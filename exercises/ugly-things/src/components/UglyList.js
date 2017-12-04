import React from "react";
import {connect} from "react-redux";

function UglyList(props) {
  const uglies = props.uglies.map(
    (ugly, i) => {
      return (
        <div key={ugly.title + i}>
          <h1>
            Title: {ugly.title}
          </h1>
          <p>Description: {ugly.description}</p>
          <img src={ugly.imgUrl} alt="#" />
        </div>
   )});
 return (
   <div>
     {uglies}
   </div>
  )
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, null)(UglyList)
