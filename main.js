const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calc1");
const input2 = document.querySelector("#calc2");
const btn = document.querySelector("#btnCalc");
const form = document.querySelector("#form");

btn.addEventListener("click", addValues);

// form.addEventListener("submit", addValues);

function addValues(event) {
  console.log({ event });
  event.preventDefault();
  const sumInpts = Number(input1.value) + Number(input2.value);
}
