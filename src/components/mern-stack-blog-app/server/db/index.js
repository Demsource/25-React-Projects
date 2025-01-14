const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://demo:LgSJNuriRL8nJwk6@cluster0.j5dyg.mongodb.net/")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error(err));
