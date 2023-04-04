const http = require("http");
const fs = require("fs");
const { strictEqual } = require("assert");
// const { makeResponseSink, playSong } = require("./player");

// Function to stream audio data to the user
function streamAudio(req, res) {
  // Open the audio file
  const filePath = "../songs/Out-of-Touch(128kbps).mp3";
  const stat = fs.statSync(filePath);
  console.log("stat: ", { stat });
  const fileSize = stat.size;
  const range = req.headers.range;
  console.log("range: ", { range });

  // Check if a range header was sent by the client
  if (range) {
    // Parse the range header
    const parts = range.replace(/bytes=/, "").split("-");
    console.log("range parts: ", { parts });
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = end - start + 1;

    // Set the response headers to send a partial content response
    res.writeHead(206, {
      "Content-Range": "bytes " + start + "-" + end + "/" + fileSize,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "audio/mpeg",
    });

    // Create a stream to read the audio file chunk by chunk and send it as a response
    const fileStream = fs.createReadStream(filePath, { start, end });
    fileStream.pipe(res);
  } else {
    // Set the response headers to send the full audio file
    res.writeHead(200, {
      "Content-Length": fileSize,
      "Content-Type": "audio/mpeg",
    });

    // Create a stream to read the audio file and send it as a response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  }
}

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/play") {
    console.log("got /play request!");

    streamAudio(request, response);
    // const { id, responseSink } = makeResponseSink();
    // request.app.sinkId = id;
    // return response(responseSink).type("audio/mpeg");
  }
});

server.listen(4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});
