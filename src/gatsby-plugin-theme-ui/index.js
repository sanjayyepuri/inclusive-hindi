import { base } from "@theme-ui/presets";

const theme = {
  ...base,
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 172, 256, 512],
  colors: {
    ...base.colors,
    primary: "#bf5700",
    secondary: "#333f48",
    beige: "#ebe8e2",
  },

  layout: {
    ...base.layout,
    container: {
      px: [3, 4, 5, 6],
      maxWidth: "1920px",
    },
  },

  styles: {
    ...base.styles,
    navbutton: {
      cursor: "pointer",
      color: "black",
      background: "none",
      textDecoration: "none",
      "&:hover": {
        color: "primary",
      },
    },

    navitem: {
      mr: 4,
      display: "flex",
      alignContent: "center",
      alignItems: "center",
    },

    menuitem: {
      minWidth: ["8em"],
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      color: "black",
      background: "none",
      textDecoration: "none",
      "&:hover": {
        backgroundColor: "primary",
        color: "white",
      },
      borderStyle: "none none solid none",
      borderWidth: "1px",
      flex: "1 1 33%",
    },
  },

  cards: {
    primary: {
      backgroundColor: "#fafafa",
      padding: 2,
      borderRadius: 4,
      border: "1px solid",
      borderColor: "#e5e5e5",
    },
  },
};

export default theme;
