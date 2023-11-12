const button = document.querySelector(".btn1");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll('.answer');
const plus = document.querySelectorAll('.plus');
let a = 1;

button.addEventListener("click", () => {
  if (a == 1) {
    document.querySelector(".small").style.display = "flex";
    a -= 1;
  } else if (a == 0) {
    document.querySelector(".small").style.display = "none";
    a = 1;
  }
});
window.addEventListener("click", (e) => {
  if (a == 0 && !e.target.classList.contains("open")) {
    document.querySelector(".small").style.display = "none";
    a = 1;
  }
});

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click',(e)=>{
    answer[i].classList.toggle('high');
    question[i].children[0].children[0].classList.toggle('remove');
    question[i].children[0].children[1].classList.toggle('show');

  })
}
//Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints:{
      600:{
          slidesPerView: 2
      }
  }
});