const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navImg = document.querySelector("#nav-btn-img");
console.log(nav);
console.log(navBtn);
console.log(navImg);

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navImg.src = "./img/nav-close.svg";
  } else {
    navImg.src = "./img/nav-open.svg";
  }
};
AOS.init({
  disable: "phone",
  once: true,
});
