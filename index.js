const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require('./routes/product')
const userRouter = require("./routes/user");

//body parser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));
// server.use("/api/v1", productRouter.router);
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

//routing function


server.listen(8080, () => {
  console.log("server started");
});
