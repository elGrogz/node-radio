const fs = require("fs");
const Throttle = require("throttle");
// const { ffprobeSync } = require("@dropb/ffprobe");

// const bitrate = ffprobeSync("../songs/Out-of-Touch(128kbps).mp3").format
//   .bit_rate;
const readableSong = fs.createReadStream("../songs/Out-of-Touch(128kbps).mp3");
const throttle = new Throttle(128000 / 8);
let _sinks = [];

const makeResponseSink = () => {
  const responseSink = PassThrough();
  _sinks.push(responseSink);
  console.log("make response sink");
  console.log({ _sinks });
  return responseSink;
};

const playSong = () => {
  readableSong.pipe(throttle).on("data", (chunk) => {
    console.log("play song");
    for (const writable of writables) {
      writable.write(chunk);
    }
  });
};

module.exports = { makeResponseSink, playSong };
