const express = require("express");
const cors = require("cors");
const blogRouter = require("./route/blog-route");

require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRouter);

// This catch-all route will return 404 if the previous routes do not match
app.use("/api/*", (req, res) => {
  res.status(404).send("Not Found");
});

app.use("/api", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(5550, () => {
  console.log("App is running on port 5550...");
});
