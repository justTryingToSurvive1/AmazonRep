// import Hammer from "hammer.js";
// const hammer = new Hammer(document.querySelector('.options-container'));
// hammer.on('swipeleft', () => {
//     document.querySelector('.options-container').scrollLeft += 100;
// });
// hammer.on('swiperight', () => {
//     document.querySelector('.options-container').scrollLeft -= 100;
// });



 // Toggle main content visibility
 const toggleLink = document.getElementById('toggleLink');
 const toggleContent = document.getElementById('toggleContent');

 toggleLink.addEventListener('click', function () {
   if (toggleContent.style.display === 'none' || toggleContent.style.display === '') {
     toggleContent.style.display = 'block';
     toggleLink.classList.add('active');
   } else {
     toggleContent.style.display = 'none';
     toggleLink.classList.remove('active');
   }
 });

 // Toggle dropdown items visibility
 function toggleDropdown(header) {
   const items = header.nextElementSibling;
   const icon = header.querySelector('i');

   if (items.classList.contains('show')) {
     items.classList.remove('show');
     header.classList.remove('active');
   } else {
     items.classList.add('show');
     header.classList.add('active');
   }
 }