const calc_screen = document.querySelector(".screen");
const calc_numbers = document.querySelectorAll(".numbers button");
const calc_oprators = document.querySelectorAll(".oprators button");
let value;
let result;

calc_numbers.forEach(function (number) {
  number.onclick = function () {
    if (
      calc_screen.innerHTML == "0"
      || calc_screen.innerHTML == "Infinity"
      || calc_screen.innerHTML == "NaN"
    ) {
      calc_screen.innerHTML = `${number.innerHTML}`;
    } else {
      calc_screen.innerHTML = `${calc_screen.innerHTML}${number.innerHTML}`;
    }

    value = calc_screen.innerHTML;
  };
});

calc_oprators.forEach(function (oprate) {
  oprate.onclick = function () {
    let clicked_oprate = oprate.innerHTML;
    if (clicked_oprate == "c") {
      calc_screen.innerHTML = 0;
    } else if (clicked_oprate == "+") {
      calc_screen.innerHTML = `${value}+`;
    } else if (clicked_oprate == "-") {
      calc_screen.innerHTML = `${value}-`;
    } else if (clicked_oprate == "×") {
      calc_screen.innerHTML = `${value}×`;
    } else if (clicked_oprate == "/") {
      calc_screen.innerHTML = `${value}/`;
    } else if (oprate.classList.contains("back")) {
      calc_screen.innerHTML = calc_screen.innerHTML.slice(0, -1);
    }

    if (clicked_oprate == "=") {
      if (calc_screen.innerHTML.includes("×")) {
        let plus = calc_screen.innerHTML.split("×");
        result = plus.reduce(function (num, next) {
          return parseFloat(num) * parseFloat(next);
        });
        calc_screen.innerHTML = result;
      }
      if (calc_screen.innerHTML.includes("+")) {
        let plus = calc_screen.innerHTML.split("+");
        result = plus.reduce(function (num, next) {
          return parseFloat(num) + parseFloat(next);
        });
        calc_screen.innerHTML = result;
      }
      if (calc_screen.innerHTML.includes("-")) {
        let plus = calc_screen.innerHTML.split("-");
        result = plus.reduce(function (num, next) {
          return parseFloat(num) - parseFloat(next);
        });
        calc_screen.innerHTML = result;
      }
      if (calc_screen.innerHTML.includes("/")) {
        let plus = calc_screen.innerHTML.split("/");
        result = plus.reduce(function (num, next) {
          return parseFloat(num) / parseFloat(next);
        });
        calc_screen.innerHTML = result;
      }
    }
    value = calc_screen.innerHTML;
  };
});
// console.log(calc_oprators)
