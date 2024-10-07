// toggle CDN
// let cdn = document.getElementById("cdn")
// document.getElementById("btn-cdn").addEventListener("click", () => {
//   cdn.classList.toggle("show")
//   cdn.classList.toggle("hidden")
// });

// btn copy cdn
function copyCode(elementId) {
  const code = document.getElementById(elementId).innerText.trim();
  navigator.clipboard.writeText(code);
}

