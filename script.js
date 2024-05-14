const img = document.querySelector("#projects__carousel__img");
const links = document.querySelectorAll(".projects__item");
const nextBtn = document.querySelector(".carousel_arrow-right");
const prevBtn = document.querySelector(".carousel_arrow-left");
const buttons = document.querySelectorAll(".carousel-button");
let currentIndex = 1;

links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => removeClass(link));
    addClass(e.target);
    setEntity(index + 1);
    currentIndex = index + 1;
    buttons.forEach((button) => removeClass(button));
    addClass(buttons[index]);
  });
});

buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((button) => removeClass(button));
    addClass(e.target);
    setEntity(index + 1);
    currentIndex = index + 1;
    links.forEach((link) => removeClass(link));
    addClass(links[index]);
  });
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < 3) {
    setEntity(currentIndex + 1);
    links.forEach((link) => removeClass(link));
    addClass(links[currentIndex - 1].nextElementSibling);
    buttons.forEach((button) => removeClass(button));
    addClass(buttons[currentIndex - 1].nextElementSibling);
    currentIndex++;
  } else {
    currentIndex = 1;
    setEntity(currentIndex);
    removeClass(links[2]);
    addClass(links[0]);
    removeClass(buttons[2]);
    addClass(buttons[0]);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 1) {
    setEntity(currentIndex - 1);
    links.forEach((link) => removeClass(link));
    addClass(links[currentIndex - 1].previousElementSibling);
    buttons.forEach((button) => removeClass(button));
    addClass(buttons[currentIndex - 1].previousElementSibling);
    currentIndex--;
  } else {
    currentIndex = 3;
    setEntity(currentIndex);
    removeClass(links[0]);
    addClass(links[2]);
    removeClass(buttons[0]);
    addClass(buttons[2]);
  }
});

const setEntity = (index) => {
  img.src = `/images/projects-img${index}.png`;
};

const removeClass = (element) => {
  element.classList.remove("active");
};

const addClass = (element) => {
  element.classList.add("active");
};
