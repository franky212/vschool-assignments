import React from "react";
import {connect} from "react-redux";

function FavoriteList(props) {
  const favorites = props.favorites.map((favorite, i) => <li key={favorite.favoriteItem + i}>{favorite.favoriteItem}</li>);
  return (
    <ul>
      {favorites}
    </ul>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(FavoriteList);
