const path = require("path");

const express = require("express");
const session = require("express-session");
const mongodbStore = require("connect-mongodb-session");
const csrf = require("csrf");

const db = require("./data/database");
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");
const authMiddleware = require("./middlewares/auth-middleware");
const addCSRFTokenMiddleware = require("./middlewares/addCSRFTokenMiddleware");

const MongoDBStore = mongodbStore(session);

const app = express();

const sessionStore = new MongoDBStore({
  uri: "mongodb://127.0.0.1:27017",
  databaseName: "auth-demo",
  collection: "sessions",
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(session(sessionConfi.createSessionConfig(mongoDbSessionStore)));
app.use(csrf());
app.use(addCSRFTokenMiddleware);

app.use(authMiddleware);

app.use(blogRoutes);
app.use(authRoutes);

app.use(function (error, req, res, next) {
  res.render("500");
});

db.connectToDatabase().then(function () {
  app.listen(3000);
});
