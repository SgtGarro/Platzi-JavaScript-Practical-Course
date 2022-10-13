const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calc1");
const input2 = document.querySelector("#calc2");
const btn = document.querySelector("#btnCalc");

function onClick() {
  console.log(Number(input1.value) + Number(input2.value));
}
