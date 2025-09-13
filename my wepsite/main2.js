let lastScrollTop = 0;
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // المستخدم ينزل: اخفي الهيدر
    header.style.top = '-100px';
  } else {
    // المستخدم يطلع: أظهر الهيدر
    header.style.top = '0';
  }
  lastScrollTop = scrollTop;
});