let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
function changeSlide(n) {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  slides[slideIndex].classList.add("active");
}
setInterval(() => changeSlide(1), 5000);

// --- 2. MODAL LOGIC ---
function openModal(id) {
  const m = document.getElementById(id);
  m.style.display = "flex";
  setTimeout(() => m.classList.add("open"), 10);
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  const m = document.getElementById(id);
  m.classList.remove("open");
  setTimeout(() => (m.style.display = "none"), 300);
  document.body.style.overflow = "auto";
}

// --- 3. NEW: TABS LOGIC ---
function openTab(event, tabId) {
  // Step 1: Hide all elements with the class="tab-content"
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  // Step 2: Remove the "active" class from all tab buttons
  const tabBtns = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove("active");
  }

  // Step 3: Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabId).classList.add("active");
  event.currentTarget.classList.add("active");
}

// --- 4. COUNTER ANIMATION ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute("data-target");
      let current = 0;
      const update = () => {
        current += target / 100;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(update);
        } else counter.innerText = target;
      };
      update();
      observer.unobserve(counter);
    }
  });
});
document.querySelectorAll(".count-up").forEach((c) => observer.observe(c));

// --- 5. TESTIMONIAL CAROUSEL ---
let quoteIndex = 0;
const quotes = document.querySelectorAll(".quote-slide");
const dots = document.querySelectorAll(".dot");
function setQuote(index) {
  quotes[quoteIndex].classList.remove("active");
  dots[quoteIndex].classList.remove("active");
  quoteIndex = index;
  quotes[quoteIndex].classList.add("active");
  dots[quoteIndex].classList.add("active");
}
setInterval(() => setQuote((quoteIndex + 1) % quotes.length), 6000);
