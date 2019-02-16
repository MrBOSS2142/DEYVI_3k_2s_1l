// $(document).ready(function() {
//   $(".st0").hover(() => $(this).css({ fill: "#6E82D0" }));
//   $(".st0").mouseleave(() =>
//     $(this).css({ fill: "#7C7C7C", transition: "0.2s" })
//   );
// });

var deparmnets = {
  Amazonas: {
    gerb: "img/Escudo_amazonasregion.png",
    name: "Amazonas",
    name_rus: "Амасонас",
    temperature: "25-27 °C",
    climate: "Тропический",
    water: "Река Журуа"
  },

  Loreto: {
    gerb: "img/Loreto.jpg",
    name: "Loreto",
    name_rus: "Лорето",
    temperature: "17-20 °C",
    climate: "Тропический",
    water: "Реки Амазонка, Мараньон"
  },

  Cajamarca: {
    gerb: "img/Cajamarca.jpg",
    name: "Cajamarca",
    name_rus: "Кахамарка",
    temperature: "14 °C",
    climate: "Умеренный",
    water: "Реки Мараньон, Чотано и Уанкабамба"
  },

  Piura: {
    gerb: "img/Piura.png",
    name: "Piura",
    name_rus: "Пьюра",
    temperature: "20-27 °C",
    climate: "Засушливый",
    water: "Реки Чира, Пьюха"
  },

  San_Martín: {
    gerb: "img/San_Martin.jpg",
    name: "San Martín",
    name_rus: "Сан-Мартин",
    temperature: "от 18 °C в горах до 29 °C на территории низменности",
    climate: "Засушливый",
    water: "Река Чира"
  },

  Tumbes: {
    gerb: "img/Tumbes.jpg",
    name: "Tumbes",
    name_rus: "Тумбес",
    temperature: "25-28 °C",
    climate:
      "Жаркий и влажный тропический на севере и в центре, сухой тропический на юге",
    water: "Река Тумбес"
  },

  Lambayeque: {
    gerb: "img/Lambayeque.png",
    name: "Lambayeque",
    name_rus: "Ламбаеке",
    temperature: "20-24 °C",
    climate: "Океанический",
    water: "Озеро Reservorio de Tinajones"
  },

  Ucayali: {
    gerb: "img/Ucayali.jpg",
    name: "Lambayeque",
    name_rus: "Ламбаеке",
    temperature: "20-24 °C",
    climate: "Океанический",
    water: "Реки Укаяли, Пурус и Агуайтия. Крупнейшее озеро — Яринакоча"
  },

  La_Libertad: {
    gerb: "img/La_Libertad.svg.png",
    name: "La Libertad",
    name_rus: "Ла-Либертад",
    temperature: "22-24 °C",
    climate: "Тропический",
    water: "Реки Rio Chicama, Либертад"
  },

  Huánuco: {
    gerb: "img/Huanuco.png",
    name: "Huánuco",
    name_rus: "Уануко",
    temperature: "19-25 °C",
    climate: "На западе сухой и прохладный, на востоке влажный тропический",
    water: "Реки Мараньон, Пачитея и Уальяга"
  },

  Ancash: {
    gerb: "img/img/Ancash.jpg",
    name: "Ancash",
    name_rus: "Анкаш",
    temperature: "21-25 °C",
    climate: "Тропический",
    water: "Река Санта. Озера Лагуна Конокоча, Аугоскоча"
  }
};

var id_dep = "";
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
    $("#info").css({ margin: "100px -570px 0px 0px", transition: "1s" })
  );
});

$(document).ready(function() {
  $("#img").hover(() => $(".Peru").fadeOut(200));
  $("#img").mouseleave(() => $(".Peru").fadeIn(200));
});

$(document).ready(() => {
  $(".st0").hover(function() {
    console.log(this.id);
  });

  $("#Amazonas").hover(() => {
    $(".gerb").attr("src", "img/Escudo_amazonasregion.png");
    $(".name").html("Amazonas");
    $(".name_rus").html("Амасонас");
    $(".temperature").html("25-27 °C");
    $(".climate").html("Тропический");
    $(".water").html("Река Журуа");
  });
});
