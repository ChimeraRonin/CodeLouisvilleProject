
var form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("See you then!");
    console.log(event);
    
});


// Begin Slideshow //
var slideIndex = 0;
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

// Begin Modal Window for Reservations //

function openModal() {
  var reservationModal = document.getElementById("reservations");
  reservationModal.classList.add("jf-modal-container-show");
  var blurModal = document.getElementById("blur-modal");
  blurModal.classList.add("blur-show");
}

function closeModal() {
  var reservationModal = document.getElementById("reservations");
  reservationModal.classList.remove("jf-modal-container-show");
}

// End Modal Window for Reservations //
