import { style, styleVariants } from "@vanilla-extract/css";

import color from "../../../styles/color";
import typography from "../../../styles/typography";

export const widthFull = style({ width: "100%" });

export const buttonBaseStyle = style([
  typography.$semantic.title3Regular,
  {
    height: 48,
    border: "1px solid transparent",
    borderRadius: 8,
    padding: "12px 30px",

    ":disabled": {
      borderColor: color.$semantic.bgDisabled,
      color: color.$semantic.textDisabled,
      backgroundColor: color.$semantic.bgDisabled,
    },
  },
]);

export const buttonVariantStyle = styleVariants({
  primaryFill: {
    color: color.$semantic.textWhite,
    backgroundColor: color.$semantic.primary,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: color.$semantic.primaryHover,
      },
    },
  },

  secondaryFill: {
    color: color.$semantic.textWhite,
    backgroundColor: color.$semantic.secondary,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: color.$semantic.secondaryHover,
      },
    },
  },

  primaryLine: {
    border: `1px solid ${color.$semantic.primary}`,
    color: color.$semantic.primary,
    backgroundColor: color.$semantic.bgWhite,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: color.$semantic.primaryLow,
      },
    },
  },

  secondaryLine: {
    border: `1px solid ${color.$semantic.secondary}`,
    color: color.$semantic.secondary,
    backgroundColor: color.$semantic.bgWhite,

    selectors: {
      "&:hover:not(:disabled)": {
        color: color.$semantic.secondary,
        backgroundColor: color.$semantic.secondaryLow,
      },
    },
  },

  primaryLow: {
    color: color.$semantic.primary,
    backgroundColor: color.$semantic.primaryLow,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: color.$semantic.primaryLowHover,
      },
    },
  },

  secondaryLow: {
    color: color.$semantic.secondary,
    backgroundColor: color.$semantic.secondaryLow,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: color.$semantic.secondaryLowHover,
      },
    },
  },
});

export type ButtonVariants = keyof typeof buttonVariantStyle;