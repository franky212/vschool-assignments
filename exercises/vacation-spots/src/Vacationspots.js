import React, {Component} from "react";

import Spot from "./Vacationspot";

class Spots extends Component {
  constructor() {
    super();
    this.vacationSpots = [
      {
        place: "Meridian, Idaho",
        price: 40,
        timeToGo: "Spring",
        imgUrl: require("./img/idaho.jpeg")
      },{
        place: "Cancun",
        price: 900,
        timeToGo: "Winter",
        imgUrl: require("./img/cancun.jpg")
      },{
        place: "China",
        price: 1200,
        timeToGo: "Fall",
        imgUrl: require("./img/china.jpg")
      },{
        place: "Russia",
        price: 1100,
        timeToGo: "Summer",
        imgUrl: require("./img/russia.jpg")
      },{
        place: "Lebanon",
        price: 400,
        timeToGo: "Spring",
        imgUrl: require("./img/lebanon.jpg")
      }
    ];
  }
  render() {
    return this.vacationSpots.map((spot, index) => {
      return (
        <Spot key={spot + '-' + index}
          place={spot.place}
          price={spot.price}
          timeToGo={spot.timeToGo}
          imgUrl={spot.imgUrl}
        />
      );
    });
  }
}

export default Spots;
