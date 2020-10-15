$(() => {
  $(".create-burger").on("submit", (a) => {
    a.preventDefault();
    const b = { name: $("#burgername").val().trim() };
    console.log("New burger going out ", b),
      $.ajax("/api/burgers", { type: "POST", data: b }).then(() => {
        console.log("new burger made"), location.reload();
      });
  }),
    $(".devour").on("click", () => {
      const a = $(this).data("id"),
        b = { devoured: !0 };
      console.log("burgerID sent: ", a),
        console.log("devoured is: ", b),
        $.ajax("api/burgers/" + a, { type: "PUT", data: b }).then(() => {
          console.log("Devoured value: true"), location.reload();
        });
    });
});
