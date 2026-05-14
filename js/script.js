//開關手機menu
const menuBtn = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
menuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('open');
  });




const gototop = document.querySelector('.gototop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    gototop.classList.add('show')
  } else {
    gototop.classList.remove('show')
  }
});
