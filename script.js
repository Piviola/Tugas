// =============================== toggle icon navbar

let iconMenu = document.querySelector("#icon-menu");
let navbar = document.querySelector(".navbar");

iconMenu.onclick = () => {
  iconMenu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// =============================== Scroll sections active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // =============================== Sticky navbar ===================
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // =============================== remove toggle icon and navbarwhen click navbar link(scroll) ===================
  iconMenu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
