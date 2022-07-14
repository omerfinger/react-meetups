import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { MeetupList } from "../components/modules/meetups/MeetupList/MeetupList";
export interface MeetupItemModel {
  id: string;
  title: string;
  address: string;
  image: string;
  description: string;
}

export function AllMeetups() {
  async function getMeetups(): Promise<MeetupItemModel[]> {
    const meetups = await axios.get<{
      [key: string]: {
        title: string;
        address: string;
        image: string;
        description: string;
      };
    }>(
      "https://react-meetups-9ef2d-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    );

    return Object.entries(meetups.data).map(([key, val]) => {
      return {
        id: key,
        title: val.title,
        address: val.address,
        image: val.image,
        description: val.description,
      };
    });
  }

  const { data } = useQuery(["meetups"], getMeetups);
  const meetups = data ?? [];
  return (
    <React.Fragment>
      <h1>All Meetups</h1>
      <MeetupList items={meetups} />
    </React.Fragment>
  );
}
