const openSidebarBtn = document.querySelector('#open-sidebar');
const closeSidebarBtn = document.querySelector('#close-sidebar');
const sidebar_name = document.querySelector('.side-bar__name');
const aside = document.querySelector('aside');
const body = document.body;
closeSidebarBtn.addEventListener('click', () => {
   body.classList.toggle('collapse-sidebar');
   closeSidebarBtn.classList.remove('d-md-block')
   openSidebarBtn.classList.add('d-md-block')
});
openSidebarBtn.addEventListener('click', () => {
   body.classList.toggle('collapse-sidebar');
   closeSidebarBtn.classList.add('d-md-block');
   openSidebarBtn.classList.remove('d-md-block')
})

// Functionality for visited links (to be improved on)
const navLinks = document.getElementsByClassName('link-item');

for (let i = 0; i < navLinks.length; i++) {
   navLinks[i].addEventListener('click', function (e) {
      let currentLink = document.querySelector('.header__link-active');
      currentLink.classList.toggle('header__link-active');
      let clickedLink = e.target.parentNode;
      clickedLink.classList.toggle('header__link-active');
   })
}