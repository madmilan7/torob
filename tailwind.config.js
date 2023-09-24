module.exports = {
  content: ["./src/**/*.tsx", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["vazir"],
        display: ["vazir"],
      },
      height: {
        "89vh": "89vh",
        "26": "26rem"
      },
      width: {
        "480": "480px",
        "30": "30rem",
        "1280": "80rem"
      },
      minWidth: {
        "10": "10rem",
        "6": "6rem",
        "20": "20rem",
      },
      maxWidth: {
        "80": "80rem",
      },
      columns: {
        "180": "180px"
      },
      gridTemplateColumns: {
        "2": "840px 416px",
        "11":"1fr 1fr"
      }
    },
  },
  plugins: [],
};
