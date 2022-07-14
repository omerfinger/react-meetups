import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../../store/FavoritesContext";
import classes from "./MainNavigation.module.css";
export function MainNavigation() {
  const favoritesContext = useContext(FavoritesContext);
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
              <span className={classes.badge}>
                {favoritesContext.favorites.size}
              </span>
            </li>
            <li>
              <Link to="/new-meetup">New Meetup</Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
