const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require("dotenv").config();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.static("public"));

// connection with mongo
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// routes
app.use("/api/glamping", require("./routes/glamping"));
app.use("/api/about", require("./routes/aboutUs"));
app.use("/api/glamping", require("./routes/glamping"));
app.use("/api/gallery", require("./routes/gallery"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api", require("./routes/contactEmail"));
app.use("/api/booking", require("./routes/bookingEmail"));
app.use("/api/carousel", require("./routes/Carousel"));

// port and server start
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Run server Successfully ${port}`);
});
