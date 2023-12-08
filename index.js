

const menuLinks = document.getElementById("mobile-menu-links");

function toggleMenu() {
  if (menuLinks.style.display === "none") {
    menuLinks.style.display = "flex";
  } else {
    menuLinks.style.display = "none";
  }
}

