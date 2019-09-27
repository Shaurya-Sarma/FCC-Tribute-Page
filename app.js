// Novel Collaspsibles
const bookList = ["GOT", "CK", "ASOS1", "ASOS2", "FC", "DWD"];

function displayContent(param1, param2) {
  const imageInfo = document.getElementById(param1);
  const image = document.getElementById(param2);
  bookList.forEach(i => {
    if (i + "__INFO" === param1) {
      return;
    }
    const description = document.getElementById(i + "__INFO");
    description.style.display = "none";
    const icon = document.getElementById(i + "__IMG");
    icon.classList.remove("books-page__images--expand");
  });
  imageInfo.style.animation = "fadeIn 1s";
  if (imageInfo.style.display === "block") {
    imageInfo.style.display = "none";
    image.classList.remove("books-page__images--expand");
  } else {
    imageInfo.style.display = "block";
    image.classList.add("books-page__images--expand");
  }
}

// Animate.css

function animate() {
  const headingSectionLevs = document.querySelectorAll(".heading-section-lev");
  let screenPos = window.innerHeight / 1.3;
  for (let i = 0; i < headingSectionLevs.length; i++) {
    let headingSectionPos = headingSectionLevs[i].getBoundingClientRect().top;
    if (headingSectionPos < screenPos) {
      headingSectionLevs[i].classList.add("animated", "fadeInDown");
    }
  }
}

function transitionIntro() {
  const headerImage = document.querySelector(".header__container");
  const headerTitle = document.querySelector(".heading-main-lev--sub");
  headerImage.classList.add("animated", "fadeIn");
  headerTitle.classList.add("animated", "zoomIn", "slow");
}

window.onload = transitionIntro;
window.addEventListener("scroll", animate);
