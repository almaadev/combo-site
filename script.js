// animation js for mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  if (mobileMenu.classList.contains('max-h-0')) {
    mobileMenu.classList.remove('max-h-0', 'opacity-0', 'scale-95');
    mobileMenu.classList.add('max-h-96', 'opacity-100', 'scale-100');
  } else {
    mobileMenu.classList.add('max-h-0', 'opacity-0', 'scale-95');
    mobileMenu.classList.remove('max-h-96', 'opacity-100', 'scale-100');
  }
});

// close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('#mobileMenu a');

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('max-h-0', 'opacity-0', 'scale-95');
    mobileMenu.classList.remove('max-h-96', 'opacity-100', 'scale-100');
  });
});

// nav bar animation and scipt
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-primary','shadow-lg');
    } else {
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-primary','shadow-lg');
    }
});

// Simple reveal animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100','translate-y-0');
    }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-slideIn').forEach(el => {
    el.classList.add('opacity-0','translate-y-10','transition','duration-700');
    observer.observe(el);
});


//  ================== product section javaScript ==========================

const slider = document.getElementById("productSlider");
const thumbs = document.querySelectorAll(".thumb");

let currentIndex = 0;
const totalSlides = slider.children.length;
let autoSlide;

/* ---------- SLIDE FUNCTION ---------- */
function goToSlide(index) {
  currentIndex = index;
  slider.style.transform = `translateX(-${index * 100}%)`;

  thumbs.forEach(t => t.classList.remove("active-thumb"));
  thumbs[index].classList.add("active-thumb");
}

/* ---------- THUMB CLICK ---------- */
thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    stopAutoSlide();
    goToSlide(index);
    startAutoSlide();
  });
});

/* ---------- AUTO SLIDE ---------- */
function startAutoSlide() {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

/* Pause on hover */
slider.addEventListener("mouseenter", stopAutoSlide);
slider.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();

// ------- zoom funtion for image ------- 
const zoomModal = document.getElementById("zoomModal");
const zoomImage = document.getElementById("zoomImage");

function openZoom() {
  const activeImage = slider.children[currentIndex].src;
  zoomImage.src = activeImage;
  zoomModal.classList.add("active");
}

/* CLOSE ZOOM */
function closeZoom() {
  zoomModal.classList.remove("active");
}

/* CLICK IMAGE TO OPEN */
slider.addEventListener("click", openZoom);

/* CLOSE ON BACKDROP CLICK */
zoomModal.addEventListener("click", (e) => {
  if (e.target === zoomModal) closeZoom();
});

/* ESC KEY SUPPORT */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeZoom();
});

function openZoom() {
  const activeImage = slider.children[currentIndex].src;
  zoomImage.src = activeImage;
  zoomModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeZoom() {
  zoomModal.classList.remove("active");
  document.body.style.overflow = "";
}



// ================== x ==================================
let qty = 1;
const qtyElement = document.getElementById("qty");
const buttons = document.querySelectorAll(".qty-btn");

// quantity updation
function updateQty(change) {
  qty += change;
  if (qty < 1) qty = 1;

  qtyElement.textContent = qty;

  // disable minus button
  buttons[0].disabled = qty === 1;
}

// initialize state
buttons[0].disabled = true;


  




