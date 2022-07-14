import React from "react";
import classes from "./MainSection.module.css";
export function MainSection(props: React.PropsWithChildren) {
  return <div className={classes.main}>{props.children}</div>;
}
