import React from "react";

import AddFavoriteForm from "./AddFavoriteForm";
import FavoriteList from "./FavoriteList";

export default function Main(props) {
  return (
    <main>
      <AddFavoriteForm />
      <FavoriteList />
    </main>
  )
}
