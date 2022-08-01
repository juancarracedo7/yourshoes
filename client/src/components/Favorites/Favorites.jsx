import styles from "./favorites.module.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FavItem from "./FavoritesItem";
import { Link } from "react-router-dom";

export default function Favorites() {
  const favProducts = useSelector((state) => state.favorites);
  useEffect(() => {
    localStorage.setItem("favProducts", JSON.stringify(favProducts));
  }, [favProducts]);


  return (
    <div>
    <div className={styles.favoritosTitle}><p>Favoritos</p></div>
            <Link to='/'>Volver</Link>
      <div>
        {favProducts.length ? (
          <div>
            {favProducts.map((item, index) => (
              <FavItem key={index} data={item} />
            ))}
          </div>
        ) : (
          <div>
            <h4>no hay nada</h4>
          </div>
        )}
      </div>
    </div>
  );
}
