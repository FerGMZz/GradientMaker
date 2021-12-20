
const box = document.querySelector(".box");

const textColor1 = document.getElementById("textColor1");
const textColor2 = document.getElementById("textColor2");

const miniBox1 = document.querySelector(".miniBox1");
const miniBox2 = document.querySelector(".miniBox2");


function Visualizar(topColor, bottomColor){

    box.style.background = `linear-gradient(to bottom right, ${topColor}, ${bottomColor})`;

    miniBox1.style.background = topColor;
    miniBox2.style.background = bottomColor;

    textColor1.textContent = topColor;
    textColor2.textContent = bottomColor;
}

