// import stuff
const View = require("./view");
const Controls = require("./controls");
const Configs = require("./configs");

// create the View for the terminal UI
const view = new View();

// create the controls terminal UI component with the styling in Configs.controlConfig
const controls = new Controls(Configs.controlsConfig);

// Attach the components to the main view
view.appendBoxes([controls.box]);

// render the view when the programme runs
view.render();
