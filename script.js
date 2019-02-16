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

$(document).ready(function() {
  $(".st0").hover(() =>
    $("#info").css({ margin: "100px 100px 0px 0px", transition: "1s" })
  );

  $(".st0").mouseleave(() =>
    $("#info").css({ margin: "100px -530px 0px 0px", transition: "1s" })
  );
});

$(document).ready(function() {
  $("#img").hover(() => $(".Peru").fadeOut(200));
  $("#img").mouseleave(() => $(".Peru").fadeIn(200));
});

$(document).ready(() => {
  $("#Amazonas").hover(() => {
    $(".gerb").attr("src", "img/Escudo_amazonasregion.png");
    $(".name").html("Amazonas");
    $(".name_rus").html("Амасонас");
    $(".temperature").html("25-27 °C");
    $(".climate").html("Тропический");
    $(".water").html("Река Журуа");
  });

  $("#Loreto").hover(() => {
    $(".gerb").attr("src", "img/Loreto.jpg");
    $(".name").html("Loreto");
    $(".name_rus").html("Лорето");
    $(".temperature").html("17 — 20 °C");
    $(".climate").html("Тропический");
    $(".water").html("Реки Амазонка, Мараньон");
  });

  $("#Cajamarca").hover(() => {
    $(".gerb").attr("src", "img/Cajamarca.jpg");
    $(".name").html("Cajamarca");
    $(".name_rus").html("Кахамарка");
    $(".temperature").html("14 °C");
    $(".climate").html("Умеренный");
    $(".water").html("Реки Мараньон, Чотано и Уанкабамба");
  });

  $("#Piura").hover(() => {
    $(".gerb").attr("src", "img/Piura.png");
    $(".name").html("Piura");
    $(".name_rus").html("Пьюра");
    $(".temperature").html("20-27 °C");
    $(".climate").html("Засушливый");
    $(".water").html("Реки Чира, Пьюха");
  });

  $("#San_Martín").hover(() => {
    $(".gerb").attr("src", "img/Piura.png");
    $(".name").html("San Martín");
    $(".name_rus").html("Сан-Мартин");
    $(".temperature").html(
      "от 18 °C в горах до 29 °C на территории низменности"
    );
    $(".climate").html("Засушливый");
    $(".water").html("Реки Чира, Пьюха");
  });

  $("#Tumbes").hover(() => {
    $(".gerb").attr("src", "img/Tumbes.jpg");
    $(".name").html("Tumbes");
    $(".name_rus").html("Тумбес");
    $(".temperature").html("25-28 °C");
    $(".climate").html(
      "Жаркий и влажный тропический на севере и в центре, сухой тропический на юге"
    );
    $(".water").html("Реки Тумбес");
  });

  $("#Lambayeque").hover(() => {
    $(".gerb").attr("src", "img/Lambayeque.png");
    $(".name").html("Lambayeque");
    $(".name_rus").html("Ламбаеке");
    $(".temperature").html("20-24 °C");
    $(".climate").html("Океанический");
    $(".water").html("Озеро Reservorio de Tinajones");
  });

  $("#Ucayali").hover(() => {
    $(".gerb").attr("src", "img/Ucayali.jpg");
    $(".name").html("Ucayali");
    $(".name_rus").html("Укаяли");
    $(".temperature").html("23-25 °C");
    $(".climate").html("Океанический");
    $(".water").html(
      "Реки Укаяли, Пурус и Агуайтия. Крупнейшее озеро — Яринакоча"
    );
  });

  $("#La_Libertad").hover(() => {
    $(".gerb").attr("src", "img/La_Libertad.svg.png");
    $(".name").html("La Libertad");
    $(".name_rus").html("Ла-Либертад");
    $(".temperature").html("22-24 °C");
    $(".climate").html("Тропический");
    $(".water").html("Реки Rio Chicama, Либертад");
  });

  $("#Huánuco").hover(() => {
    $(".gerb").attr("src", "img/Huanuco.png");
    $(".name").html("Huánuco");
    $(".name_rus").html("Уануко");
    $(".temperature").html("19-25 °C");
    $(".climate").html(
      "На западе сухой и прохладный, на востоке влажный тропический"
    );
    $(".water").html("Реки Мараньон, Пачитея и Уальяга");
  });

  $("#Ancash").hover(() => {
    $(".gerb").attr("src", "img/Ancash.jpg");
    $(".name").html("Ancash");
    $(".name_rus").html("Анкаш");
    $(".temperature").html("21-25 °C");
    $(".climate").html("Тропический");
    $(".water").html("Река Санта. Озера Лагуна Конокоча, Аугоскоча");
  });
});
