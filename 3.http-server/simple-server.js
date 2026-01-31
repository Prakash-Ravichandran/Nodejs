import http from "http";

const server = http.createServer();

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
