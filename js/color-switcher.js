// Выбираем кнопку
const btnGreen = document.querySelector("#green");
const btnBlue = document.querySelector("#blue");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btnGreen.addEventListener("click", function() {
  theme.href = "css/green.css";
});
btnBlue.addEventListener("click", function() {
  theme.href = "css/blue.css";
});