const theme = {
  /** colors
   * Rationale naming of the colors
   * The naming of the color in the 'color.js' file are derived from the color naming scheme from the [Invision design pages](https://projects.invisionapp.com/d/main#/console/18319900/380486614/inspect).
   */
  colors: {
    transparent: "transparent",
    white: "#FFFFFF",
    transparentWhite: "#FFFFFF1A",
    lightWhite: "#FAFAFA",
    darkWhite: "#F7F7F7",
    black: "#000000",
    lightBlack: "#202020",
    darkBlack: "#111111",
    transparentGrey: "#2020206e",
    ultraTransparentGrey: "#20202002",
    semiDarkGrey: "#888888",
    darkGrey: "#454545",
    defaultGrey: "#ebedee",
    transparentDarkGrey: "#45454573",
    red: "#E30616",
    darkRed: "#93002A",
    transparentRed: "#e306174d",
    brown: "#450002",
    blue: "#3BACD7",
    darkBlue: "#042E77",
    lightBlue: "#1E9FD0",
    purple: "#6E438B",
    orange: "#E8442D",
    yellow: "#FFD220"
  },
  // typography
  fontWeights: {
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  },
  fonts: {
    heading: "Steelfish, sans-serif",
    body: '"Source Sans Pro", sans-serif'
  },
  fontSizes: {
    root: "10",
    0: "1rem", // 10px
    1: "1.1rem", // 11px
    2: "1.2rem", // 12px
    3: "1.3rem", // 13px
    4: "1.4rem", // 14px
    5: "1.5rem", // 15px
    6: "1.6rem", // 16px
    7: "1.8rem", // 18px
    8: "1.9rem", // 19px
    9: "2.0rem", // 20px
    10: "2.2rem", // 22px
    11: "2.6rem", // 26px
    12: "15rem" // 150px
  },

  breakpoints: [200, 640, 768, 1024, 1440]
};

// alias for breakpoints
theme.breakpoints.xs = `${theme.breakpoints[0]}px`;
theme.breakpoints.sm = `${theme.breakpoints[1]}px`;
theme.breakpoints.md = `${theme.breakpoints[2]}px`;
theme.breakpoints.lg = `${theme.breakpoints[3]}px`;
theme.breakpoints.xl = `${theme.breakpoints[4]}px`;

export default theme;
