import fs from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home Page!");
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("About Page!");
  }
  // TODO server streaming
  else if (req.url == "/stream") {
    const videoStream = fs.createReadStream("sample_video.mp4");
    res.writeHead(200, { "content-type": "video/mp4" });
    videoStream.pipe(res);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
