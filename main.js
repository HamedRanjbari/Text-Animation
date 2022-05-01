const $ = document;
const text = $.querySelector(".text");
const input = $.getElementById("input");
let textContent = "Hamed Ranjbari";
let idx = 1;
let time = 300 / input.value

animatedText()

function animatedText() {
    text.innerHTML = textContent.slice(0, idx);
    idx++;
    if (idx > textContent.length) {
      idx = 1;
  }
  setTimeout(animatedText, time)
}

input.addEventListener("input", (e) => {
  time = 300 / e.target.value
})