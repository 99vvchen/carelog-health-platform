//開關手機menu
const menuBtn = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
menuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('open');
  });



//gototop
const gototop = document.querySelector('.gototop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    gototop.classList.add('show')
  } else {
    gototop.classList.remove('show')
  }
});

//kebabBtns
document.addEventListener('click', function(event) {

  if (event.target.classList.contains('kebab-btn')) {
    const menu = event.target.nextElementSibling;
    menu.classList.toggle('show');
    return;
  }

  // 點到外面關閉所有選單
  if (!event.target.closest('.kebab-wrap')) {
    document.querySelectorAll('.kebab-menu.show').forEach(function(menu) {
      menu.classList.remove('show');
    });
  }
});
