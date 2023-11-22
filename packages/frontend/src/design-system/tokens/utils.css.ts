import { style } from "@vanilla-extract/css";

export const widthMax = style({ maxWidth: 1440 });
export const widthFull = style({ width: "100%" });
export const backLayer = style({ zIndex: -1 });
export const baseLayer = style({ zIndex: 0 });
export const middleLayer = style({ zIndex: 50 });
export const topLayer = style({ zIndex: 100 });
export const modalLayer = style({ zIndex: 1000 });
export const block = style({
  display: "block",
});
export const flex = style({
  display: "flex",
});
export const flexColumn = style([
  flex,
  {
    flexDirection: "column",
  },
]);
export const flexAlignCenter = style([
  flex,
  {
    alignItems: "center",
  },
]);
export const flexJustifyCenter = style([
  flex,
  {
    justifyContent: "center",
  },
]);
export const flexCenter = style([flex, flexAlignCenter, flexJustifyCenter]);
export const flexColumnCenter = style([
  flexCenter,
  {
    flexDirection: "column",
  },
]);

export const boxShadow = style({
  boxShadow: "0 3px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.05)",
});