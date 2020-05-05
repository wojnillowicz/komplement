komplementyKobieta = [
  "jest najmądrzejsza!",
  "jest najpiękniejsza!",
  "jest najlepsza!",
  "ma piękne oczy!",
  "jest zwycięzcą!",
  "jest najodważniejsza!",
]

komplementyMężczyzna = [
  "jest najsilniejszy!",
  "jest namądrzejszy!",
  "jest najprzystojniejszy!",
  "jest najlepszy!",
  "jest zwycięzcą!",
  "jest najodważniejszy",
]


$("#start").click(function () {
  var nameUser = $("#imie").val()
  var genderUser = $("#plec").val()
  console.log(nameUser, genderUser);
  $(".welcome").fadeOut(2000);
});

$("dalej").click(function () {
  
})
