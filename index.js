// cdn
let cdnTab = [
  { name: "css", code: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">` },
  { name: "js", code: `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>` },
  { name: "icons", code: `<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">` }
];
cdnTab.forEach(item => {
  let btn = document.getElementById(item.name);
  if(btn){ 
    btn.addEventListener("click", () => {
    navigator.clipboard.writeText(item.code);
  })
  }
})
let cdnToggle = document.getElementById("cdnToggle")
let cdnTarget = document.getElementById("cdnTarget")
cdnToggle.addEventListener("click", () => {
  setTimeout(() => {
    cdnTarget.classList.toggle("d-none");
  }, 250);
})


// btn copy 
function copy(elementId) {
  const code = document.getElementById(elementId).innerHTML; 
  navigator.clipboard.writeText(code)
}


// icons
let iconTargetBlank = document.getElementById("iconTargetBlank");
iconTargetBlank.addEventListener("click", (event) => {
  event.preventDefault(); 
  setTimeout(() => {
    window.open(iconTargetBlank.href, "_blank"); 
  }, 250); 
});


// navbar
let navbarToggle = document.getElementById("navbarToggle");
let navbarTargets = document.getElementById("navbarTarget");
navbarToggle.addEventListener("click", () => {
  setTimeout(() => {
    navbarTargets.classList.toggle("d-none");
  }, 250);
});
let navbarHtml = `
<div class="container">
  <nav class="navbar navbar-light bg-light  navbar-expand-sm rounded">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
</div>`;
document.getElementById('navbarHtml').innerText = navbarHtml;


// dropdown-menu 
let dropdownToggle = document.getElementById("dropdownToggle")
let dropdownTarget = document.getElementById("dropdownTarget")
dropdownToggle.addEventListener("click", () => {
  setTimeout(() => {
    dropdownTarget.classList.toggle("d-none");
  }, 250)
})
const dropdownHtml = `
<div class="dropdown text-center">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown-menu
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> `;
document.getElementById('dropdownHtml').innerText = dropdownHtml;


// Table
let tableToggle = document.getElementById("tableToggle");
let tableTarget = document.getElementById("tableTarget");
tableToggle.addEventListener("click", () => {
  setTimeout(() => {
    tableTarget.classList.toggle("d-none")
  }, 250);
})

const tableHtml = `
<div class="container">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>`
document.getElementById('tableHtml').innerText = tableHtml;
