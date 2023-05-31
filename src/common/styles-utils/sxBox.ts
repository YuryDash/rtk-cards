export const sxBoxCreator = (height: number = 552, width: number = 413, margin: string = "50px auto") => {
  return {
    display: "flex",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: 1,
      width: width,
      height: height,
      margin: margin,
    },
  };
};
