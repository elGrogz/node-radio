// import stuff
const View = require("./view");
const Controls = require("./controlsBox");
const NowPlaying = require("./nowPlayingBox");
const Configs = require("./configs");

// create the View for the terminal UI
const view = new View();

// create the controls terminal UI component with the styling in Configs.controlConfig
const controls = new Controls({ config: Configs.controlsConfig });
const nowPlaying = new NowPlaying({
  config: Configs.nowPlayingConfig,
  childConfig: Configs.nowPlayingChildConfig,
});
nowPlaying._createBoxChild("hello");

// Attach the components to the main view
view.appendBoxes([
  controls.box,
  // nowPlaying.box
]);

// render the view when the programme runs
view.render();
