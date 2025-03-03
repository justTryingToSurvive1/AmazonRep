  document.addEventListener("DOMContentLoaded", function () {
    const contentWrap = document.querySelector('.wra');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const scrollAmount = 300;
    prevButton.addEventListener('click', () => {
        contentWrap.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth',
        });
    });
    nextButton.addEventListener('click', () => {
        contentWrap.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    });
 });

 function openNav() {
  document.getElementById("sideInner").style.transform = 'translateX(-0)';
 }
 function closeNav() {
  document.getElementById("sideInner").style.transform = 'translateX(350px)' ;
 }
 

 function moveNavIn() {
  document.getElementById("moveInner").style.transform = 'translateX(0)';
 }
 function moveNav() {
  document.getElementById("moveInner").style.transform = 'translateX(350px)';
 }

 function movethNav() {
  document.getElementById("moverInner").style.transform = 'translateX(0)';
 }
 function moverNavIn() {
  document.getElementById("moverInner").style.transform = 'translateX(350px)';
 }

 
