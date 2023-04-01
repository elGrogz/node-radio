const View = require("./control-panel/view");
const Controls = require("./control-panel/controls");
const Configs = require("./control-panel/configs");

const view = new View();
const controls = new Controls(Configs.controlsConfig);

view.appendBoxes([controls.box]);
view.render();
