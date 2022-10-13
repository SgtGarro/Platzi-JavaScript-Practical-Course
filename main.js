const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const paragraph = document.querySelector(".paragraph");
const pid = document.querySelector("#paragraph");
const input = document.querySelector("input");

console.log(input.value);

console.log({
  h1,
  p,
  paragraph,
  pid,
  input,
});

h1.innerHTML = "Patito<br>Feo";
// h1.innerText = "Patito<br>Feo";

h1.getAttribute;
h1.setAttribute;

console.log(h1.getAttribute("class"));
h1.setAttribute("class", "red");
console.log(h1.getAttribute("class"));

h1.classList.add("green");
h1.classList.remove("red");

input.value = "456";

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg"
);

console.log(img);

// pid.append(img);
pid.innerHTML = "";
pid.append(img);
