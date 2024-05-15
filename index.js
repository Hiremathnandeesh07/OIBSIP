let fromSelect = document.querySelector(".container .from .from-select");

let toSelect = document.querySelector(".container .to .to-select");

let fromOptionsBox = document.querySelector(".container  .from .from-options");

let fromAllOptions = document.querySelectorAll(
  ".container  .from .from-options li"
);

let toOptionsBox = document.querySelector(".container  .to .to-options");

let toAllOptions = document.querySelectorAll(".container  .to .to-options li");

let fromInput = document.querySelector(".container .from .from-input");

let toInput = document.querySelector(".container .to .to-input");

let formula = document.querySelector(".container .formula span");

let globalFromValue = "Cel",
  globalToValue = "Fahren";

fromSelect.addEventListener("click", () => {
  fromOptionsBox.classList.toggle("from-options-active");

  toOptionsBox.classList.remove("to-options-active");
});

toSelect.addEventListener("click", () => {
  toOptionsBox.classList.toggle("to-options-active");

  fromOptionsBox.classList.remove("from-options-active");
});

fromAllOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    fromSelect.value = e.target.innerHTML;

    fromOptionsBox.classList.remove("from-options-active");

    globalFromValue = "";

    globalFromValue = `${e.target.id}`;

    getFormulas(fromInput.value);
  });
});

toAllOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    toSelect.value = e.target.innerHTML;

    toOptionsBox.classList.remove("to-options-active");

    globalToValue = "";

    globalToValue = `${e.target.id}`;

    getFormulas(fromInput.value);
  });
});

let getFormulas = (c) => {
  let CelToKel = Number(c) + 273.15;

  let KelToCel = Number(c) - 273.15;

  let FahrenToCel = ((Number(c) - 32) * 5) / 9;

  let CelToFahren = Number(c) * (9 / 5) + 32;

  let FahrenToKel = ((Number(c) - 32) * 5) / 9 + 273.15;

  let KelToFahren = ((Number(c) - 273.15) * 9) / 5 + 32;

  if (globalFromValue == "Cel" && globalToValue == "Kel") {
    formula.innerHTML = `${c}°C + 273.15 = <strong>${CelToKel.toFixed(
      2
    )}K</strong>`;

    toInput.value = CelToKel.toFixed(2);
  } else if (globalFromValue == "Kel" && globalToValue == "Cel") {
    formula.innerHTML = `${c}K - 273.15 = <strong>${KelToCel.toFixed(
      2
    )}°C</strong>`;

    toInput.value = KelToCel.toFixed(2);
  } else if (globalFromValue == "Fahren" && globalToValue == "Cel") {
    formula.innerHTML = `(${c}F - 32) × 5/9 = <strong>${FahrenToCel.toFixed(
      2
    )}°C</strong>`;

    toInput.value = FahrenToCel.toFixed(2);
  } else if (globalFromValue == "Cel" && globalToValue == "Fahren") {
    formula.innerHTML = `(${c}°C × 9/5) + 32 = <strong>${CelToFahren.toFixed(
      2
    )}°F</strong>`;

    toInput.value = CelToFahren.toFixed(2);
  } else if (globalFromValue == "Fahren" && globalToValue == "Kel") {
    formula.innerHTML = `(${c}°F - 32) × 5/9 + 273.15 = <strong>${FahrenToKel.toFixed(
      2
    )}K</strong>`;

    toInput.value = FahrenToCel.toFixed(2);
  } else if (globalFromValue == "Kel" && globalToValue == "Fahren") {
    formula.innerHTML = `(${c}K - 273.15) × 9/5 + 32 = <strong>${KelToFahren.toFixed(
      2
    )}°F</strong>`;

    toInput.value = KelToFahren.toFixed(2);
  } else if (globalFromValue == globalToValue) {
    //

    if (globalFromValue == "Cel" && globalToValue == "Cel") {
      globalFromValue = "Fahren";

      fromSelect.value = "Fahrenheit";
    } else if (globalFromValue == "Kel" && globalToValue == "Kel") {
      globalFromValue = "Cel";

      fromSelect.value = "Degree Celsius";
    } else if (globalFromValue == "Fahren" && globalToValue == "Fahren") {
      globalFromValue = "Kel";

      fromSelect.value = "Kelvin";
    }

    //
  } else if (globalToValue == globalFromValue) {
    //

    if (globalToValue == "Cel" && globalFromValue == "Cel") {
      globalToValue = "Fahren";

      toSelect.value = "Fahrenheit";
    } else if (globalToValue == "Kel" && globalFromValue == "Kel") {
      globalToValue = "Cel";

      toSelect.value = "Degree Celsius";
    } else if (globalToValue == "Fahren" && globalFromValue == "Fahren") {
      globalToValue = "Kel";

      toSelect.value = "Kelvin";
    }

    //
  }
};

fromInput.addEventListener("input", (e) => {
  if (fromInput.value != "") {
    getFormulas(e.target.value);
  } else {
    getFormulas(0);
  }
});
