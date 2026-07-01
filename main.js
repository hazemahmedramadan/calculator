const calc_screen = document.querySelector(".screen");
const calc_numbers = document.querySelectorAll(".numbers button");
const calc_oprators = document.querySelectorAll(".oprators button");

calc_numbers.forEach(function (number) {
  number.onclick = function () {
    if (
      calc_screen.innerHTML == "0"
      || calc_screen.innerHTML == "Infinity"
      || calc_screen.innerHTML == "NaN"
      || calc_screen.innerHTML == "Error"
    ) {
      calc_screen.innerHTML = `${number.innerHTML}`;
    } else {
      calc_screen.innerHTML = `${calc_screen.innerHTML}${number.innerHTML}`;
    }
  };
});

calc_oprators.forEach(function (oprate) {
  oprate.onclick = function () {
    let clicked_oprate = oprate.innerHTML;
    if (clicked_oprate == "c") {
      calc_screen.innerHTML = 0;
    }

    if (oprate.classList.contains("back")) {
      calc_screen.innerHTML.length > 1
      && !["Infinity", "NaN", "Error"].includes(calc_screen.innerHTML)
        ? (calc_screen.innerHTML = calc_screen.innerHTML.slice(0, -1))
        : (calc_screen.innerHTML = 0);
    }

    if (["+", "/", "-", "×"].includes(clicked_oprate)) {
      let last_carracter = calc_screen.innerHTML.slice(-1);
      if (["+", "/", "-", "×"].includes(last_carracter)) {
        calc_screen.innerHTML =
          calc_screen.innerHTML.slice(0, -1) + oprate.innerHTML;
      } else {
        calc_screen.innerHTML = calc_screen.innerHTML + oprate.innerHTML;
      }
    }

    if (clicked_oprate == "=") {
      try {
        let formating = calc_screen.innerHTML.replace(/×/g, "*");
        let the_resulte = new Function(`return ${formating}`)();

        the_resulte != "Infinity"
        && the_resulte != "NaN"
        && the_resulte != undefined
          ? (calc_screen.innerHTML = `${the_resulte}`)
          : (calc_screen.innerHTML = "Error");
      } catch (error) {
        calc_screen.innerHTML = "Error";
      }
    }
  };
});
// console.log(calc_oprators)
