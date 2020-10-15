const orm = require("../config/orm"),
  burger = {
    selectAll: (a) => {
      orm.selectAll("burgers", (b) => {
        a(b);
      });
    },
    insertOne: (a, b, c) => {
      orm.insertOne("burgers", a, b, (a) => {
        c(a);
      });
    },
    updateOne: (a, b, c, d, e) => {
      orm.updateOne("burgers", a, b, c, d, (a) => {
        console.log("updateOne with ", a), e(a);
      });
    },
  };
module.exports = burger;
