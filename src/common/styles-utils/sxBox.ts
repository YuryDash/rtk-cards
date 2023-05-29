export const sxBoxCreator = (height: number = 552, width: number = 413) => {
  return {
    display: "flex",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: 1,
      width: width,
      height: height,
      margin: "50px auto",
    },
  };
};
