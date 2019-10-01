var net = require("net");

// The port number you want to use for socket connection
var PORT = 3000;

// The IP address you want to use for socket connection,
// this will be the address your client is listening on.
// You can use 127.0.0.1 or your lan ip address.
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
