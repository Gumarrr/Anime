const navBtn = document.querySelector(".nav_btn");
const navList = document.querySelector(".list");
const body = document.querySelector("body");
const bg = document.querySelector(".nav_bg");
const navLink = document.querySelectorAll(".nav_link");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  navList.classList.toggle("active");
  body.classList.toggle("active");
  bg.classList.toggle("active");
});

bg.addEventListener("click", () => {
  navBtn.classList.remove("active");
  navList.classList.remove("active");
  bg.classList.remove("active");
  body.classList.remove("active");
});
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    navBtn.classList.remove("active");
    navList.classList.remove("active");
    body.classList.remove("active");
    bg.classList.remove("active");
  });
}
function searchAnime() {
  var searchText = document.getElementById("searchInput").value.toLowerCase();
  var animeTitles = document.querySelectorAll("#animeList h3");

  animeTitles.forEach(function (title) {
    var animeTitleText = title.textContent.toLowerCase();
    var parentElement = title.parentElement;

    if (animeTitleText.includes(searchText)) {
      parentElement.style.display = "flex";
      parentElement.parentElement.style.filter = "none"; // Снимаем фильтр у родителя элемента
      // Плавная прокрутка к найденному элементу с центрированием по вертикали
      parentElement.parentElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      parentElement.style.display = "none";
      parentElement.parentElement.style.filter = "grayscale(100%)"; // Применяем фильтр к родителю элемента
    }
  });
}

document.getElementById("searchInput").addEventListener("input", searchAnime);