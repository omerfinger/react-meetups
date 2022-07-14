import classes from "./MeetupItem.module.css";
import { Card } from "../../../ui/Card/Card";
import { MeetupItemModel } from "../../../../pages/AllMeetups";
import { useContext } from "react";
import { FavoritesContext } from "../../../../store/FavoritesContext";
export interface MeetupItemProps extends MeetupItemModel {}
export function MeetupItem(props: MeetupItemProps) {
  const favoritesContext = useContext(FavoritesContext);
  const isFavorite = favoritesContext.isFavorite(props.id);
  function favoritesClickHandler() {
    isFavorite
      ? favoritesContext.deleteFavorite(props.id)
      : favoritesContext.addFavorite(props.id);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={favoritesClickHandler}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
