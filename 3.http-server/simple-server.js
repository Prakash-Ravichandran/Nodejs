import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home Page!");
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("About Page!");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
