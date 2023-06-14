const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

// document.querySelector('#hamburger-menu').onclick = () =>{
//     navbarNav.classList.toggle('active');
// };
hamburger.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    hamburger.classList.remove("is-active");
  }
});

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scroll-active", window.scrollY > 0);
});


window.onscroll = () => {
  navbarNav.classList.remove("active");
  hamburger.classList.remove("is-active");
}