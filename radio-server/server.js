const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  const reqUrl = url.parse(request.url).pathname;
  if (reqUrl === "/play") {
    const { id, responseSink } = queue.makeResponseSink();
    request.app.sinkId = id;
    return h.response(responseSink).type("audio/mpeg");
  }
});

server.listen(4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});
