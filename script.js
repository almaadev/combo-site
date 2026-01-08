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

// nav bar animation and scipt
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-green-900','shadow-lg');
    } else {
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-green-900','shadow-lg');
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


    //  product section javaScript

 
  const images = [
    "./assets/product_lifestyle-removebg-preview.png",
    "./assets/Asthma Wheezing Combo 01.webp",
    "./assets/Diabetes Care Combo 01 .webp",
    "./assets/Gallbladder  Stone Combo.webp"
  ];

  const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".thumb");

  let currentIndex = 0;
  let sliderInterval;

  function slideImage(index) {
    mainImage.classList.add("opacity-0", "translate-x-6");

    setTimeout(() => {
      mainImage.src = images[index];
      mainImage.classList.remove("translate-x-6");
      mainImage.classList.add("-translate-x-6");

      setTimeout(() => {
        mainImage.classList.remove("opacity-0", "-translate-x-6");
      }, 50);
    }, 300);

    updateActiveThumb(index);
  }

  function updateActiveThumb(index) {
    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle("active-thumb", i === index);
    });
  }

  function startAutoSlide() {
    sliderInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      slideImage(currentIndex);
    }, 3000);
  }

  function stopAutoSlide() {
    clearInterval(sliderInterval);
  }

  function changeImage(el) {
    stopAutoSlide();
    currentIndex = [...thumbs].indexOf(el);
    slideImage(currentIndex);
    startAutoSlide();
  }

  // Pause on hover
  mainImage.addEventListener("mouseenter", stopAutoSlide);
  mainImage.addEventListener("mouseleave", startAutoSlide);

  startAutoSlide();

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


  // FAQ Section Java Script

  
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;

      // close others
      document.querySelectorAll(".faq-item").forEach(faq => {
        if (faq !== item) faq.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
// Back to top btn js 
const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.remove("hidden");
      backToTop.classList.add("opacity-100");
    } else {
      backToTop.classList.add("hidden");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });



