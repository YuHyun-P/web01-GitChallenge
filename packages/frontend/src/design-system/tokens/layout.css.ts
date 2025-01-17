import { style } from "@vanilla-extract/css";

import {
  flex,
  flexColumn,
  middleLayer,
  scrollBarHidden,
  widthFull,
  widthMax,
} from "./utils.css";

const headerHeight = "56px";
const footerHeight = "250px";

export const header = style([
  middleLayer,
  widthFull,
  {
    height: headerHeight,
    position: "fixed",
    top: 0,
    left: 0,
  },
]);

export const base = style([
  flex,
  widthMax,
  {
    height: "100vh",
    paddingTop: headerHeight,
    margin: "0 auto",
  },
]);

export const sideBar = style([
  flexColumn,
  scrollBarHidden,
  {
    width: 250,
    padding: "30px 0px",
    gap: 24,
  },
]);

export const container = style({
  width: 1030,
});

export const footer = style([
  widthMax,
  {
    height: footerHeight,
    margin: "0 auto",
    padding: "45px 0",
  },
]);
