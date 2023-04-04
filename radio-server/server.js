const http = require("http");
const player = require("./player");

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/play") {
    console.log("got /play request!");
    // const { id, responseSink } = player.makeResponseSink();
    // request.app.sinkId = id;
    // return h.response(responseSink).type("audio/mpeg");
  }
});

server.listen(4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});
