const title = document.querySelector("h1");
const calculator = document.querySelector(".calculator");
const userInput = document.querySelector(".userInput");
const buttons = [...document.querySelectorAll(".buttons")];
const listKeycode = buttons.map((touche) => touche.dataset.key);
//La fonction map() prend chaque élément d'un tableau, fait quelque chose à cet élément (fonction callback) et retourne le résultat sous forme d'un nouveau tableau
//const nouveauTab = tableau.map((element)=>faireQqch(element));
window.addEventListener("load", () => {
  title.style.marginLeft = "30%";
  calculator.style.right = "35%";
});

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calc(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calc(valeur);
});

const calc = (valeur) => {
  if (listKeycode.includes(valeur)) {
    switch (valeur) {
      case "8":
        userInput.textContent = "";
        break;
      case "13":
        const calcul = eval(userInput.textContent);
        userInput.textContent = calcul;
        break;
      default:
        const indexKeycode = listKeycode.indexOf(valeur);
        const touche = buttons[indexKeycode];
        userInput.textContent += touche.innerHTML;
    }
  }
};

window.addEventListener("error", (e) => {
  alert("Une erreur est survenue dans votre calcul" + e.message);
});
