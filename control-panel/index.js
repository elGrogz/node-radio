// import stuff
const blessed = require("neo-blessed");
const View = require("./view");
const Controls = require("./controlsBox");
const NowPlaying = require("./nowPlayingBox");
const Playlist = require("./playlist");
const Queue = require("./queue");

const Configs = require("./configs");
const { keys } = require("./keys");

// create the View for the terminal UI
const view = new View();

// create the UI components with the styling in Configs
const controls = new Controls(Configs.controls.config);

const nowPlaying = new NowPlaying({
  config: Configs.nowPlaying.config,
  childConfig: Configs.nowPlaying.childConfig,
});

const playlist = new Playlist({
  config: Configs.playlist.config,
  childConfig: Configs.playlist.childConfig,
  bgBlur: Configs.playlist.bgBlur,
  bgFocus: Configs.playlist.bgFocus,
});

const queue = new Queue({
  config: Configs.queue.config,
  childConfig: Configs.queue.childConfig,
  bgBlur: Configs.queue.bgBlur,
  bgFocus: Configs.queue.bgFocus,
});

// const _addPlaylistAndQueueListeners = () => {
//   const playlistOnScroll = (scrollKey) => {
//     playlist.scroll(scrollKey);
//     view.render();
//   };

//   playlist.box.key(keys.SCROLL_UP, playlistOnScroll);
//   playlist.box.key(keys.SCROLL_DOWN, playlistOnScroll);

//   playlist.box.key(keys.QUEUE_ADD, () => {
//     const focusedSong = playlist.getFocusedSong();
//     queue.createBoxChildAndAppend(focusedSong);
//     view.render();
//   });

//   playlist.box.key(keys.FOCUS_QUEUE, () => {
//     playlist.blur();
//     queue.focus();
//     controls.setQueueTips();
//     view.render();
//   });

//   const queueOnScroll = (scrollKey) => {
//     queue.scroll(scrollKey);
//     view.render();
//   };

//   queue.box.key(keys.SCROLL_UP, queueOnScroll);
//   queue.box.key(keys.SCROLL_DOWN, queueOnScroll);

//   const queueOnMove = (key) => {
//     queue.changeOrderQueue(key);
//     view.render();
//   };

//   queue.box.key(keys.MOVE_UP, queueOnMove);
//   queue.box.key(keys.MOVE_DOWN, queueOnMove);

//   queue.box.key(keys.QUEUE_REMOVE, () => {
//     queue.removeFromQueue();
//     queue.focus();
//     view.render();
//   });

//   queue.box.key(keys.FOCUS_PLAYLIST, () => {
//     queue.blur();
//     playlist.focus();
//     controls.setPlaylistTips();
//     view.render();
//   });
// };

exports.start = () => {
  // _addPlaylistAndQueueListeners();
  playlist.fillWithItems(["hello", "song1", "song2 woo hoo"]);
  // view.appendBoxes([playlist.box, controls.box, playlist.box]);
  // view._screen.append(controls.box);
  // view._screen.append(playlist.box);

  var box1 = blessed.box({
    top: "center",
    left: "center",
    width: "50%",
    height: "50%",
    content: "Hello {bold}world{/bold}!",
    tags: true,
    border: {
      type: "line",
    },
    style: {
      fg: "white",
      bg: "magenta",
      border: {
        fg: "#f0f0f0",
      },
      hover: {
        bg: "green",
      },
    },
  });

  // Append our box to the screen.
  view._screen.append(box1);

  view._screen.append(playlist.box);
  // view._screen.append(playlist.box);
  // view.appendBoxes([nowPlaying.box]);
  // view.appendBoxes([playlist.box]);
  // view.appendBoxes([nowPlaying.box]);
  // playlist.box, queue.box, , nowPlaying.box
  view.render();
};

// Attach the components to the main view

// render the view when the programme runs
