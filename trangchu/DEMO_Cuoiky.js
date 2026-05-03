var topMenu = document.querySelector(".dstieude");
var menuBtn = document.querySelector(".mobile-menu-btn");
var actionContainer = document.querySelector(".dshanhdong");

if (menuBtn && topMenu) {
  menuBtn.addEventListener("click", function () {
    topMenu.classList.toggle("open");
  });
}

const suggestionBox = document.createElement("ul");
suggestionBox.className = "search-suggestions";

if (actionContainer) {
  actionContainer.style.position = "relative";
  actionContainer.appendChild(suggestionBox);
}
