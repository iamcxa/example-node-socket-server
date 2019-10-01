var net = require("net");

var PORT = 3000;
var HOST = "127.0.0.1";

var server = net.createServer(function(socket) {
  console.log("server: started");

  socket.on("data", function(data) {
    console.log("server: received data is {" + data + "}");

    // response to client
    socket.write("OK! I heard you!");
  });

  socket.on("close", function() {
    console.log("server: close");
  });
});

server.listen(PORT, HOST, function() {
  console.log("server: listening");
});
