// cdn
let cdnTab = [
  { name: "css", code: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">` },
  { name: "js", code: `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>` },
  { name: "icons", code: `<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">` }
];
cdnTab.forEach(item => {
  let btn = document.getElementById(item.name);
  if (btn) {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(item.code);
    })
  }
})
let cdnToggle = document.getElementById("cdnToggle")
let cdnTarget = document.getElementById("cdnTarget")
cdnToggle.addEventListener("click", () => {
  setTimeout(() => { cdnTarget.classList.toggle("d-none"); }, 250);
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
  setTimeout(() => { window.open(iconTargetBlank.href, "_blank"); }, 250);
});

// navbar
let navbarToggle = document.getElementById("navbarToggle");
let navbarTarget = document.getElementById("navbarTarget");
let navbarBtnCopy = document.getElementById("navbarBtnCopy");
// toggle
navbarToggle.addEventListener("click", () => {
  setTimeout(() => { navbarTarget.classList.toggle("d-none"); }, 250);
});
// copy
navbarBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(navbarHTML);
})
//html
const navbarHTML = `
<nav class="navbar navbar-light bg-light  navbar-expand-sm rounded">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button 
      class="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
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

`;
document.getElementById('navbarInnerText').innerText = navbarHTML;
document.getElementById("navbarInnerHTML").innerHTML = navbarHTML;

// Footer
let footerToggle = document.getElementById("footerToggle");
let footerTarget = document.getElementById("footerTarget");
let footerBtnCopy = document.getElementById("footerBtnCopy");
// toggle
footerToggle.addEventListener("click", () => {
  setTimeout(() => { footerTarget.classList.toggle("d-none") }, 250);
})
// copy
footerBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(footerHTML)
});
// html
const footerHTML = `
<footer class="text-center text-lg-start bg-light rounded">
  <div class="container p-4">
    <p class="mb-0">&copy; 2024 Mon Site Web. Tous droits réservés.</p>
  </div>
</footer>
`
document.getElementById('footerInnerText').innerText = footerHTML;
document.getElementById('footerInnerHTML').innerHTML = footerHTML;

// OffCanvas 
let offcanvasToggle = document.getElementById("offcanvasToggle")
let offcanvasTarget = document.getElementById("offcanvasTarget")
let offcanvasBtnCopy = document.getElementById("offcanvasBtnCopy");
// toggle
offcanvasToggle.addEventListener("click", () => {
  setTimeout(() => { offcanvasTarget.classList.toggle("d-none"); }, 250)
})
// copy
offcanvasBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(offcanvasHTML)
})
//html
const offcanvasHTML = `
<button 
  class="btn btn-primary" 
  type="button" 
  data-bs-toggle="offcanvas" 
  data-bs-target="#offcanvasScrolling" 
  aria-controls="offcanvasScrolling"
>
  Enable body scrolling
</button>

<div 
  class="offcanvas offcanvas-start" 
  data-bs-scroll="true" 
  data-bs-backdrop="false" 
  tabindex="-1" 
  id="offcanvasScrolling" 
  aria-labelledby="offcanvasScrollingLabel"
>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
      Offcanvas with body scrolling
    </h5>
    <button 
      type="button" 
      class="btn-close" 
      data-bs-dismiss="offcanvas" 
      aria-label="Close"
    ></button>
  </div>
  <div class="offcanvas-body">
    <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
  </div>
</div>
`;
document.getElementById('offcanvasInnerText').innerText = offcanvasHTML;
document.getElementById("offcanvasInnerHTML").innerHTML = offcanvasHTML


//  From
let formToggle = document.getElementById("formToggle")
let formTarget = document.getElementById("formTarget")
let formBtnCopy = document.getElementById("formBtnCopy");
// toggle
formToggle.addEventListener("click", () => {
  setTimeout(() => { formTarget.classList.toggle("d-none"); }, 250)
})
// copy
formBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(formHTML)
})
//html
const formHTML = `
<form class="bg-light p-2 mx-2 rounded">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;
document.getElementById('formInnerText').innerText = formHTML;
document.getElementById("formInnerHTML").innerHTML = formHTML

// dropdown-menu 
let dropdownToggle = document.getElementById("dropdownToggle")
let dropdownTarget = document.getElementById("dropdownTarget")
let dropdownBtnCopy = document.getElementById("dropdownBtnCopy");
// toggle
dropdownToggle.addEventListener("click", () => {
  setTimeout(() => { dropdownTarget.classList.toggle("d-none"); }, 250)
})
// copy
dropdownBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(dropdownHTML)
})
//html
const dropdownHTML = `
<div class="dropdown">
  <button 
    class="btn btn-secondary 
    dropdown-toggle" 
    type="button" 
    data-bs-toggle="dropdown" 
    aria-expanded="false"
  >
    Dropdown-menu
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> 
`;
document.getElementById('dropdownInnerText').innerText = dropdownHTML;
document.getElementById("dropdownInnerHTML").innerHTML = dropdownHTML;



// Table 
let tableToggle = document.getElementById("tableToggle");
let tableTarget = document.getElementById("tableTarget");
let tableBtnCopy = document.getElementById("tableBtnCopy");
// toggle
tableToggle.addEventListener("click", () => {
  setTimeout(() => { tableTarget.classList.toggle("d-none") }, 250);
})
// copy
tableBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(tableHTML)
});
// html
const tableHTML = `
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
</table>`
document.getElementById('tableInnerText').innerText = tableHTML;
document.getElementById('tableInnerHTML').innerHTML = tableHTML;

// Modal
let modalToggle = document.getElementById("modalToggle");
let modalTarget = document.getElementById("modalTarget");
let modalBtnCopy = document.getElementById("modalBtnCopy");
// toggle
modalToggle.addEventListener("click", () => {
  setTimeout(() => { modalTarget.classList.toggle("d-none") }, 250);
})
// copy
modalBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(modalHTML)
});
// html
const modalHTML = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Modal Body
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`
document.getElementById('modalInnerText').innerText = modalHTML;
document.getElementById('modalInnerHTML').innerHTML = modalHTML;

// Toast
let toastToggle = document.getElementById("toastToggle");
let toastTarget = document.getElementById("toastTarget");
let toastBtnCopy = document.getElementById("toastBtnCopy");
// toggle
toastToggle.addEventListener("click", () => {
  setTimeout(() => { toastTarget.classList.toggle("d-none") }, 250);
})
// copy
toastBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(toastHTML)
});
// html
const toastHTML = `
<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

<script>
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
</script>

`
document.getElementById('toastInnerText').innerText = toastHTML;
document.getElementById('toastInnerHTML').innerHTML = toastHTML;

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

// Progressbar
let progressToggle = document.getElementById("progressToggle");
let progressTarget = document.getElementById("progressTarget");
let progressBtnCopy = document.getElementById("progressBtnCopy");
// toggle
progressToggle.addEventListener("click", () => {
  setTimeout(() => { progressTarget.classList.toggle("d-none") }, 250);
})
// copy
progressBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(progressHTML)
});
// html
const progressHTML = `
<div 
  class="progress" 
  role="progressbar" 
  aria-label="Example 1px high" 
  aria-valuenow="25" 
  aria-valuemin="0" 
  aria-valuemax="100" 
  style="height: 1px"
>
  <div class="progress-bar" style="width: 90%">
  </div>
</div>
<div 
  class="progress" 
  role="progressbar" 
  aria-label="Example with label" 
  aria-valuenow="10" 
  aria-valuemin="0" 
  aria-valuemax="100"
>
  <div 
    class="progress-bar 
    overflow-visible text-dark" 
    style="width: 90%"
  >
    Long label text for the progress bar, 
    set to a dark color
  </div>
</div>
<div 
  class="progress" 
  role="progressbar" 
  aria-label="Success example" 
  aria-valuenow="25" 
  aria-valuemin="0" 
  aria-valuemax="100"
>
  <div class="progress-bar bg-success" style="width: 25%">
  </div>
</div>
<div 
  class="progress" 
  role="progressbar" 
  aria-label="Info example" 
  aria-valuenow="50" 
  aria-valuemin="0" 
  aria-valuemax="100"
>
  <div class="progress-bar bg-info" style="width: 50%">
  </div>
</div>
<div 
  class="progress" 
  role="progressbar" 
  aria-label="Warning example" 
  aria-valuenow="75" 
  aria-valuemin="0" 
  aria-valuemax="100"
>
  <div class="progress-bar bg-warning" style="width: 75%">
  </div>
</div>
<div 
  class="progress" 
  role="progressbar" 
  aria-label="Danger example" 
  aria-valuenow="100" 
  aria-valuemin="0" 
  aria-valuemax="100"
>
  <div class="progress-bar bg-danger" style="width: 100%">
  </div>
</div>

`
document.getElementById('progressInnerText').innerText = progressHTML;
document.getElementById('progressInnerHTML').innerHTML = progressHTML;

// ButtonsGroup
let buttonsGroupToggle = document.getElementById("buttonsGroupToggle");
let buttonsGroupTarget = document.getElementById("buttonsGroupTarget");
let buttonsGroupBtnCopy = document.getElementById("buttonsGroupBtnCopy");
// toggle
buttonsGroupToggle.addEventListener("click", () => {
  setTimeout(() => { buttonsGroupTarget.classList.toggle("d-none") }, 250);
})
// copy
buttonsGroupBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(buttonsGroupHTML)
});
// html
const buttonsGroupHTML = `
<div class="btn-group">
  <a 
    href="#" 
    class="btn btn-primary active" 
    aria-current="page"
  >
    Active link
  </a>
  <a href="#" class="btn btn-primary">Link</a>
  <a href="#" class="btn btn-primary">Link</a>
</div>
`
document.getElementById('buttonsGroupInnerText').innerText = buttonsGroupHTML;
document.getElementById('buttonsGroupInnerHTML').innerHTML = buttonsGroupHTML;

// Alert
let alertToggle = document.getElementById("alertToggle");
let alertTarget = document.getElementById("alertTarget");
let alertBtnCopy = document.getElementById("alertBtnCopy");
// toggle
alertToggle.addEventListener("click", () => {
  setTimeout(() => { alertTarget.classList.toggle("d-none") }, 250);
})
// copy
alertBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(alertHTML)
});
// html
const alertHTML = `
<div class="alert alert-primary m-0 mb-2" role="alert"> Alert message </div>
<div class="alert alert-success m-0 mb-2" role="alert"> Alert message </div>
<div class="alert alert-danger m-0 mb-2" role="alert"> Alert message </div>
<div class="alert alert-warning m-0 mb-2" role="alert"> Alert message </div>
<div class="alert alert-info m-0 " role="alert"> Alert message </div>
`
document.getElementById('alertInnerText').innerText = alertHTML;
document.getElementById('alertInnerHTML').innerHTML = alertHTML;

// Badges
let badgesToggle = document.getElementById("badgesToggle");
let badgesTarget = document.getElementById("badgesTarget");
let badgesBtnCopy = document.getElementById("badgesBtnCopy");
// toggle
badgesToggle.addEventListener("click", () => {
  setTimeout(() => { badgesTarget.classList.toggle("d-none") }, 250);
})
// copy
badgesBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(badgesHTML)
});
// html
const badgesHTML = `
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-success">Success</span>
<span class="badge text-bg-danger">Danger</span>
<span class="badge text-bg-warning">Warning</span>
<span class="badge text-bg-info">Info</span>
`
document.getElementById('badgesInnerText').innerText = badgesHTML;
document.getElementById('badgesInnerHTML').innerHTML = badgesHTML;

// Card Image
let cardImgToggle = document.getElementById("cardImgToggle");
let cardImgTarget = document.getElementById("cardImgTarget");
let cardImgBtnCopy = document.getElementById("cardImgBtnCopy");
// toggle
cardImgToggle.addEventListener("click", () => {
  setTimeout(() => { cardImgTarget.classList.toggle("d-none") }, 250);
})
// copy
cardImgBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(cardImgHTML)
});
// html
const cardImgHTML = `
<div class="card" style="width: 18rem;">
  <img 
    src="https://cdn.pixabay.com/photo/2021/06/16/23/40/grey-pansy-butterfly-6342355_1280.jpg" 
      class="card-img-top" 
     
    >
  <div class="card-body">
    <p class="card-text">Body</p>
  </div>
</div>
`
document.getElementById('cardImgInnerText').innerText = cardImgHTML;
document.getElementById('cardImgInnerHTML').innerHTML = cardImgHTML;

// Card List
let cardListToggle = document.getElementById("cardListToggle");
let cardListTarget = document.getElementById("cardListTarget");
let cardListBtnCopy = document.getElementById("cardListBtnCopy");
// toggle
cardListToggle.addEventListener("click", () => {
  setTimeout(() => { cardListTarget.classList.toggle("d-none") }, 250);
})
// copy
cardListBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(cardListHTML)
});
// html
const cardListHTML = `
<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item bg-info">An item</li>
    <li class="list-group-item bg-success">A second item</li>
    <li class="list-group-item bg-warning">A third item</li>
  </ul>
  <div class="card-footer bg-danger">
    Card footer
  </div>
</div>
`
document.getElementById('cardListInnerText').innerText = cardListHTML;
document.getElementById('cardListInnerHTML').innerHTML = cardListHTML;

// Accordion
let paginationToggle = document.getElementById("paginationToggle");
let paginationTarget = document.getElementById("paginationTarget");
let paginationBtnCopy = document.getElementById("paginationBtnCopy");
// toggle
paginationToggle.addEventListener("click", () => {
  setTimeout(() => { paginationTarget.classList.toggle("d-none") }, 250);
})
// copy
paginationBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(paginationHTML)
});
// html
const paginationHTML = `
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
`
document.getElementById('paginationInnerText').innerText = paginationHTML;
document.getElementById('paginationInnerHTML').innerHTML = paginationHTML;


// Carousel
let carouselToggle = document.getElementById("carouselToggle");
let carouselTarget = document.getElementById("carouselTarget");
let carouselBtnCopy = document.getElementById("carouselBtnCopy");
// toggle
carouselToggle.addEventListener("click", () => {
  setTimeout(() => { carouselTarget.classList.toggle("d-none") }, 250);
})
// copy
carouselBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(carouselHTML)
});
// html
const carouselHTML = `
<div id="carousel-id-1" class="carousel slide">
  <div class="carousel-indicators">
    <button 
      type="button" 
      data-bs-target="#carousel-id-1" 
      data-bs-slide-to="0" 
      class="active" 
      aria-current="true" 
      aria-label="Slide 1"
    ></button>
    <button 
      type="button" 
      data-bs-target="#carousel-id-1" 
      data-bs-slide-to="1" 
      aria-label="Slide 2"></button>
    <button 
      type="button" 
      data-bs-target="#carousel-id-1" 
      data-bs-slide-to="2" 
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img 
        src="https://cdn.pixabay.com/photo/2024/09/26/14/08/lizard-9076520_1280.jpg" 
        class="d-block w-100" 
       
      >
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img 
        src="https://cdn.pixabay.com/photo/2023/04/24/06/08/bottlebrushes-7947303_1280.jpg" 
        class="d-block w-100" 
       
      >
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img 
        src="https://cdn.pixabay.com/photo/2021/06/16/23/40/grey-pansy-butterfly-6342355_1280.jpg" 
        class="d-block w-100" 
       
      >
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button 
    class="carousel-control-prev" 
    type="button" 
    data-bs-target="#carousel-id-1" 
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button 
    class="carousel-control-next" 
    type="button" 
    data-bs-target="#carousel-id-1" 
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`
document.getElementById('carouselInnerText').innerText = carouselHTML;
document.getElementById('carouselInnerHTML').innerHTML = carouselHTML;

// Accordion
let accordionToggle = document.getElementById("accordionToggle");
let accordionTarget = document.getElementById("accordionTarget");
let accordionBtnCopy = document.getElementById("accordionBtnCopy");
// toggle
accordionToggle.addEventListener("click", () => {
  setTimeout(() => { accordionTarget.classList.toggle("d-none") }, 250);
})
// copy
accordionBtnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(accordionHTML)
});
// html
const accordionHTML = `
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button 
        class="accordion-button collapsed" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#flush-collapseOne" 
        aria-expanded="false" 
        aria-controls="flush-collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div 
      id="flush-collapseOne" 
      class="accordion-collapse 
      collapse" 
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button 
        class="accordion-button 
        collapsed" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#flush-collapseTwo" 
        aria-expanded="false" 
        aria-controls="flush-collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div 
      id="flush-collapseTwo" 
      class="accordion-collapse 
      collapse" 
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button 
        class="accordion-button 
        collapsed" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#flush-collapseThree" 
        aria-expanded="false" 
        aria-controls="flush-collapseThree"
      >
        Accordion Item #3
      </button>
    </h2>
    <div 
      id="flush-collapseThree" 
      class="accordion-collapse 
      collapse" 
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  </div>
</div>
`
document.getElementById('accordionInnerText').innerText = accordionHTML;
document.getElementById('accordionInnerHTML').innerHTML = accordionHTML;
