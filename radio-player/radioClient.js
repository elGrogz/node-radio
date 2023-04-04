const http = require("http");
const fs = require("fs");

const PORT = 8000;

fs.readFile("./radio-player/radio.html", (error, html) => {
  if (error) throw error;
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  });

  server.listen(PORT, () => {
    console.log("page started!");
  });
});
