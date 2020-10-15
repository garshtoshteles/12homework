const express = require("express"),
  PORT = process.env.PORT || 8080,
  app = express();
app.use(express.static("public")),
  app.use(express.urlencoded({ extended: !0 })),
  app.use(express.json());
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" })),
  app.set("view engine", "handlebars");
const routes = require("./controllers/burgers_controller");
app.use(routes),
  app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT);
  });
