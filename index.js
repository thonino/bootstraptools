// btn copy cdn
function copy(elementId) {
  const code = document.getElementById(elementId).innerHTML; 
  navigator.clipboard.writeText(code)
    .then(() => console.log('component copied !'))
    .catch(err => console.error('Erreur :', err));
}

// Dropdown-menu 
const htmlCode = `
<div class="dropdown">
  <button 
    class="btn btn-secondary dropdown-toggle"
    type="button" data-bs-toggle="dropdown" 
    aria-expanded="false"
  >
    Dropdown Button
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">...</a>
    <a class="dropdown-item" href="#">...</a>
    <a class="dropdown-item" href="#">...</a>
  </div>
</div>`;

document.getElementById('html-content').innerText = htmlCode;

// dropdown-toggle
let dropdownToggle = document.getElementById("dropdownToggle")
let dropdownTarget = document.getElementById("dropdownTarget")
dropdownToggle.addEventListener("click", () => {
  dropdownTarget.classList.toggle("show");
  dropdownTarget.classList.toggle("hidden");
})