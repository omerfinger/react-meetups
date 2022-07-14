import { FormEvent, useRef } from "react";
import { MeetupCreateParams } from "../../../../pages/NewMeetup";
import { Card } from "../../../ui/Card/Card";
import classes from "./NewMeetupForm.module.css";
import { useNavigate } from "react-router-dom";
interface NewMeetupFormProps {
  createMeetupHandler: (meetup: MeetupCreateParams) => Promise<void>;
}
export function NewMeetupForm(props: NewMeetupFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const navigation = useNavigate();
  async function submitHandler(event: FormEvent) {
    event.preventDefault();
    await props.createMeetupHandler({
      title: titleRef.current?.value ?? "",
      address: addressRef.current?.value ?? "",
      description: descriptionRef.current?.value ?? "",
      image: imageRef.current?.value ?? "",
    });

    navigation("/");
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input ref={titleRef} type="text" required id="title"></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input ref={imageRef} type="url" required id="image"></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input ref={addressRef} type="text" required id="address"></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            ref={descriptionRef}
            rows={5}
            required
            id="description"
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </Card>
  );
}
