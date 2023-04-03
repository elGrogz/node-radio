const fs = require("fs");
const Throttle = require("throttle");
const { ffprobeSync } = require("@dropb/ffprobe");

const bitrate = ffprobeSync("../songs/Out-of-Touch(128kbps).mp3").format
  .bit_rate;
const readableSong = fs.createReadStream("../songs/Out-of-Touch(128kbps).mp3");
const throttle = new Throttle(bitrate / 8);
const writables = [writable1, writable2];

readableSong.pipe(throttle).on("data", (chunk) => {
  for (const writable of writables) {
    writable.write(chunk);
  }
});
