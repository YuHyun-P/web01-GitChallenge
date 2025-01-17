import { style } from "@vanilla-extract/css";

import color from "../../../tokens/color";
import {
  boxShadow,
  flexAlignCenter,
  flexCenter,
  flexColumn,
  modalLayer,
} from "../../../tokens/utils.css";

export const backdrop = style([
  modalLayer,
  flexCenter,
  {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
]);

export const container = style([
  boxShadow,
  flexColumn,
  flexAlignCenter,
  {
    width: 427,
    borderRadius: 8,
    padding: 27,
    backgroundColor: color.$scale.grey00,
  },
]);

export const buttonContainer = style({
  width: "100%",
  height: 40,
  position: "relative",
});

export const close = style({
  color: color.$scale.grey900,
  position: "absolute",
  right: 0,
  fontSize: 40,
});
