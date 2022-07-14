import { MeetupItem, MeetupItemProps } from "../MeetupItem/MeetupItem";
import classes from "./MeetupList.module.css";
interface MeetupListProps {
  items: MeetupItemProps[];
}
export function MeetupList(props: MeetupListProps) {
  return (
    <ul className={classes.list}>
      {props.items.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  );
}
