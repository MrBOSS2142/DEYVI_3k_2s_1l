// $(document).ready(function() {
//   $(".st0").hover(() => $(this).css({ fill: "#6E82D0" }));
//   $(".st0").mouseleave(() =>
//     $(this).css({ fill: "#7C7C7C", transition: "0.2s" })
//   );
// });

$(document).ready(function() {
  $(".st0").hover(function() {
    $(this).css({ fill: "#6E82D0" });
  });

  $(".st0").mouseleave(() => {
    $(".st0").css({ fill: "#7C7C7C", transition: "0.2s" });
  });
});

$(document).ready(() => {
  $("#Amazonas").hover(() => {
    $(".gerb").attr("src", "img/Escudo_amazonasregion.png");
    $(".name").html("Amazonas");
    $(".name_rus").html("Амасонас");
  });
});
