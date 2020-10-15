const express = require("express"),
  router = express.Router(),
  burger = require("../models/burger");
router.get("/", (a, b) => {
  burger.selectAll((a) => {
    b.render("index", { burgers: a });
  });
}),
  router.post("/api/burgers", (a, b) => {
    burger.insertOne(["burger_name"], [a.body.name], (a) => {
      b.json({ id: a.insertId });
    });
  }),
  router.put("/api/burgers/:id", (a, b) => {
    const c = "true" == a.body.devoured;
    burger.updateOne("devoured", c, "id", a.params.id, (a) => {
      return 0 == a.changedRows
        ? b.status(404).end()
        : void b.status(200).end();
    });
  }),
  (module.exports = router);
