// ---- Card Bookmark click Start ------
const bookmarkButtonCard = document.querySelector(
  '[data-js="bookmarkButtonCard"]'
);
const bookmarkButtonSvg = document.querySelector(
  '[data-js="bookmarkButtonSvg"]'
);

bookmarkButtonCard.addEventListener("click", () => {
  bookmarkButtonSvg.classList.toggle("bookmark__button__svg--marked");
});
// ---- Card Bookmark click End ------
