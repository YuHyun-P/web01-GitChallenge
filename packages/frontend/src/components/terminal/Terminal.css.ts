import { style } from "@vanilla-extract/css";

import color from "../../design-system/tokens/color";
import typography from "../../design-system/tokens/typography";
import { flexAlignCenter } from "../../design-system/tokens/utils.css";

const hrHeight = "20px";

export const container = style({
  height: 170,
  width: "100%",
});

export const hr = style({
  height: hrHeight,
  margin: 0,
  border: "none",
  borderTop: `1px solid ${color.$semantic.border}`,
  borderBottom: `1px solid ${color.$semantic.border}`,
  backgroundColor: color.$scale.grey100,
});

export const terminalContainer = style([
  typography.$semantic.caption1Regular,
  {
    height: `calc(100% - ${hrHeight})`,
    padding: "20px 10px 0",
    overflowY: "auto",
    color: color.$scale.grey900,
    backgroundColor: color.$scale.grey00,
  },
]);

export const commandInputContainer = style([
  flexAlignCenter,
  {
    width: "100%",
    position: "relative",
  },
]);

export const prompt = style({
  position: "absolute",
  top: 1,
  left: 0,
  paddingRight: 4,
});

export const stdinContainer = style({ position: "relative" });

export const stdin = style({
  display: "block",
  textIndent: 10,
});

export const commandInput = style({
  flex: 1,
  outline: 0,
});
