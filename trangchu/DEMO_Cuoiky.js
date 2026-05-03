const topMenu = document.querySelector(".dstieude");
const menuBtn = document.querySelector(".mobile-menu-btn");
const actionContainer = document.querySelector(".dshanhdong");

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
