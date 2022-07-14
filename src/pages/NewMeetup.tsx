import axios from "axios";
import React from "react";
import { useQueryClient } from "react-query";
import { NewMeetupForm } from "../components/modules/meetups/NewMeetupForm/NewMeetupForm";
export interface MeetupCreateParams {
  title: string;
  address: string;
  image: string;
  description: string;
}
export function NewMeetup() {
  const queryClient = useQueryClient();
  async function addMeetupHandler(meetup: MeetupCreateParams) {
    await axios.post(
      "https://react-meetups-9ef2d-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      meetup,
      { headers: { "Content-Type": "application/json" } }
    );
    queryClient.invalidateQueries(["meetups"]);
  }
  return (
    <React.Fragment>
      <NewMeetupForm createMeetupHandler={addMeetupHandler} />
    </React.Fragment>
  );
}
