import React from "react";
import classes from "./Container.module.scss";

export const Container = (props) => (
  <div className={classes.Container}>{props.children}</div>
);
