require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const url = require("./routes/url.routes");
const path = require('path');
const pageRoutes = require("./routes/page.routes");

const app = express();
const PORT = process.env.PORT||3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pageRoutes);

app.use('/', url);

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:3000");
});
