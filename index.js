// // Import Hammer.js
// import Hammer from 'hammerjs';

// // Create a new Hammer instance
// const hammer = new Hammer(document.querySelector('.options-container'));

// // Subscribe to swipe events
// hammer.on('swipeleft', () => {
//   const optionsContainer = document.querySelector('.options-container');
//   const currentScrollLeft = optionsContainer.scrollLeft;
//   const newScrollLeft = currentScrollLeft + 100;
//   optionsContainer.scrollLeft = newScrollLeft;
// });

// hammer.on('swiperight', () => {
//   const optionsContainer = document.querySelector('.options-container');
//   const currentScrollLeft = optionsContainer.scrollLeft;
//   const newScrollLeft = currentScrollLeft - 100;
//   optionsContainer.scrollLeft = newScrollLeft;
// });



//  // Toggle main content visibility
//  const toggleLink = document.getElementById('toggleLink');
//  const toggleContent = document.getElementById('toggleContent');

//  toggleLink.addEventListener('click', function () {
//    if (toggleContent.style.display === 'none' || toggleContent.style.display === '') {
//      toggleContent.style.display = 'block';
//      toggleLink.classList.add('active');
//    } else {
//      toggleContent.style.display = 'none';
//      toggleLink.classList.remove('active');
//    }
//  });

//  // Toggle dropdown items visibility
//  function toggleDropdown(header) {
//    const items = header.nextElementSibling;
//    const icon = header.querySelector('i');

//    if (items.classList.contains('show')) {
//      items.classList.remove('show');
//      header.classList.remove('active');
//    } else {
//      items.classList.add('show');
//      header.classList.add('active');
//    }
//  }

//  document.addEventListener("DOMContentLoaded", function () {
//     const dropdownItems = document.querySelectorAll(".dropdown-itemm");

//     dropdownItems.forEach((item) => {
//         const chevron = item.querySelector(".chevron");
//         const dropdownContent = item.querySelector(".dropdown-content");
//         const closeIcon = item.querySelector(".close-icon");

//         // open dropdown on chevron click
//         chevron.addEventListener("click", (e) => {
//             // prevent event bubbling
//             e.stopPropagation(); 
//             dropdownContent.classList.add("open");
//         });
//         // close dropdown on close icon click
//         closeIcon.addEventListener("click", (e) => {
//             e.stopPropagation();
//             documentContent.classList.remove("open");
//         });
//         // close dropdown hen clicking outside
//         document.addEventListener("click", (e) => {
//             if (!item.contains(e.target)){
//                 dropdownContent.classList.remove("open");
//             }
//         });
//     });
//  });

 
 document.addEventListener("DOMContentLoaded", function () {
    const contentWrap = document.querySelector('.wra');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const scrollAmount = 500;
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

 
