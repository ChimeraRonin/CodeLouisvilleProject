const form = document.querySelector('.form');
const reservationBtn = document.getElementById('jf-button-reservation');
const reservationModal = document.getElementById("reservations");
const blurModal = document.getElementById("blur-modal");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert("See you then!");
  console.log(event);
  closeModal()
});

// Begin Modal Window for Reservations //
reservationBtn.addEventListener('click', openModal)


// Begin Slideshow //
let slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
}

setInterval(showSlides, 5000)
// End Slideshow //


function openModal() {
  reservationModal.classList.add("jf-modal-container-show");
  blurModal.classList.add("blur-show");
}

function closeModal() {
  reservationModal.classList.remove("jf-modal-container-show");
  blurModal.classList.remove("blur-show");
}

// End Modal Window for Reservations //```

