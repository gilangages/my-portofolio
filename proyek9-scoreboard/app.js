const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetButton = document.querySelector('#reset');
const winPoinOption = document.querySelector('#winpoint');

//input1
const input1 = document.querySelector("#myInput1");
const teamNameDisplay1 = document.querySelector("#teamNameDisplay1");
//input2
const input2 = document.querySelector("#myInput2");
const teamNameDisplay2 = document.querySelector("#teamNameDisplay2");

input1.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const value = input1.value.trim();
    if (value) {
      // sembunyikan input
      input1.style.display = "none";

      // tampilkan nama tim sebagai teks biasa
      teamNameDisplay1.textContent = value;
      teamNameDisplay1.style.fontWeight = "bold"; // biar kelihatan
      teamNameDisplay1.style.fontFamily = "Share Tech Mono", sans-serif; // fontFamily
      teamNameDisplay1.style.fontSize = "4rem";
    }
  }
});

input2.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const value = input2.value.trim();
    if (value) {
      // sembunyikan input
      input2.style.display = "none";

      // tampilkan nama tim sebagai teks biasa
      teamNameDisplay2.textContent = value;
      // teamNameDisplay2.style.fontWeight = "bold"; // biar kelihatan
      // teamNameDisplay2.style.fontFamily = "'Share Tech Mono'", sans-serif; // fontFamily
      // teamNameDisplay2.style.fontSize = "4rem";
    }
  }
});


let p1Score = 0;
let p2Score = 0;
let winPoint = 3;
let isGameOver = false;

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
}

p1Button.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score += 1; 
    if (p1Score === winPoint) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
    p1Display.classList.remove("fade-in");
    void p1Display.offsetWidth; // trik reflow agar animasi bisa diulang
    p1Display.classList.add("fade-in");
  }
});
p2Button.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winPoint) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
    p2Display.classList.remove("fade-in");
    void p2Display.offsetWidth; // trik reflow agar animasi bisa diulang
    p2Display.classList.add("fade-in");
  }
});


resetButton.addEventListener('click', reset);

winPoinOption.addEventListener('change', function () {
  winPoint = parseInt(this.value);
  reset();
})