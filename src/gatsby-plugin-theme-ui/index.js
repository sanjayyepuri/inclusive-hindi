import { base as base} from "@theme-ui/presets";

const theme =
{
  ...base,
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 172, 256, 512],
  colors : {
    ...base.colors,
    primary: "#bf5700",
    secondary: "#333f48",
  },

  layout: {
    ...base.layout,
    container: {
      px: [3, 4, 5, 6],
      maxWidth: "1920px",
    }
  },


  styles: {
    ...base.styles,
    navbutton: {
      color: "black",
      textDecoration: "none",
      '&:hover': {
        color: "primary"
      }
    }
  }

};

export default theme;