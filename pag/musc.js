let image = document.querySelector("#image1");
const text1 = document.querySelector("#text");
const botao = document.querySelector("#botao");

botao.addEventListener("click", function () {
  if (text1.innerText == "Feliz") {
    image.src = "Mario-triste.png";
    text1.innerText = "Triste";
  } else if (text1.innerText == "Triste") {
    image.src = "Mario-bravo.png";
    text1.innerText = "Bravo";
  } else if (text1.innerText == "Bravo") {
    image.src = "mario-feliz.png";
    text1.innerText = "Feliz";
  }
});
