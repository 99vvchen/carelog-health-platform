//表單驗證
const form = document.querySelector('.form-grid');
//name
const nameInput = document.querySelector('#name');
const nameError = document.querySelector('#name-error');
//date
const dateInput = document.querySelector('#date');
const dateError = document.querySelector('#date-error');
//type
const typeSelect = document.querySelector('#type');
const typeError = document.querySelector('#type-error');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (nameInput.value === '') {
    nameError.textContent = '請填寫紀錄內容描述';
    nameError.classList.add('show');
  } else {
    nameError.classList.remove('show');
  };


  if (dateInput.value === '') {
    dateError.textContent = '請填寫紀錄日期';
    dateError.classList.add('show')
  } else {
    dateError.classList.remove('show')
};


if (typeSelect.value === '請選擇') {
    typeError.textContent = '請選擇類型';
    typeError.classList.add('show')
}   else {
    typeError.classList.remove('show')
}
});

//瀏覽器內建方法，強制展開日期選擇器
dateInput.addEventListener('click',()=>{
  dateInput.showPicker();
})

//確認是否清除所有內容
const resetBtn = document.querySelector('.btn-re');

resetBtn.addEventListener('click',(event)=>{
  event.preventDefault();
  const confirmed = confirm('確認清除所有內容嗎?');
  if(confirmed){
    form.reset();
  }
})