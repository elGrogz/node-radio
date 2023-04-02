// neoblessed component styling
const commonConfig = {
  border: { type: "line" },
};

const commonChildConfig = {
  width: "100%",
  height: 1,
  left: 0,
};

const Configs = {
  controlsConfig: {
    ...commonConfig,
    label: "Controls",
    top: "85%",
    left: "50%",
    width: "50%",
    height: 5,
    style: {
      fg: "black",
      bg: "green",
      border: {
        fg: "#000100",
      },
    },
  },
  nowPlayingConfig: {
    ...commonConfig,
    label: "Controls",
    top: "50%",
    left: "50%",
    width: "50%",
    height: 5,
    style: {
      fg: "black",
      bg: "green",
      border: {
        fg: "#000100",
      },
    },
  },
  nowPlayingChildConfig: {
    ...commonChildConfig,
    fg: "green",
    bg: "black",
  },
};

module.exports = Configs;
