const menuBtn = document.querySelector('.menu');

  const sidebar = document.querySelector('.sidebar');


  menuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('open');
  });
const form = document.querySelector('.form-grid');
const nameInput = document.querySelector('#name');
const nameError = document.querySelector('#name-error');
const dateInput = document.querySelector('#date');
const dateError = document.querySelector('#date-error');
const typeSelect = document.querySelector('#type');
const typeError = document.querySelector('#type-error');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  //name
  if (nameInput.value === '') {
    nameError.textContent = '請填寫紀錄內容描述';
    nameError.classList.add('show');
  } else {
    nameError.classList.remove('show');
  }

  //date
  if (dateInput.value === '') {
  dateError.textContent = '請填寫紀錄日期';
  dateError.classList.add('show')
} else {
  dateError.classList.remove('show')
}
//type
if (typeSelect.value === '請選擇') {
  typeError.textContent = '請選擇類型';
  typeError.classList.add('show')
} else {
  typeError.classList.remove('show')
}
});
