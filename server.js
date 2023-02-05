const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const postRoutes = require("./routes/posts");
const cors = require("cors"); //for react app port configuration
const { use } = require("./routes/posts");

app.use(bodyParser.json());
app.use(postRoutes);
app.use(cors());

const PORT = 8000;
const DB_URL =
  "mongodb+srv://willy:it20613204@cluster0.nblz9io.mongodb.net/kodi?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED kodiyoo");
  })
  .catch((err) => console.log(`DB CONNECTION ERROR`, err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
