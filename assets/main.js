// Nav menu

const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const headerImage = document.querySelector('#header-image');
const modalLinks = document.querySelectorAll('.header__modal-body__links')
const modal = document.querySelector('#modal');
const form = document.querySelectorAll('form');
const input = document.querySelectorAll('input');

openBtn.onclick = () => {
  modal.classList.remove('hidden');
  openBtn.classList.add('hidden');
  headerImage.style.visibility = 'hidden'
}

closeBtn.onclick = () => {
  modal.classList.add('hidden');
  openBtn.classList.remove('hidden');
  headerImage.style.visibility = 'visible'
}

for (var i = 0; i < modalLinks.length; i++) {
  modalLinks[i].onclick = () => {
    modal.classList.add('hidden');
    headerImage.style.visibility = 'visible';
    openBtn.classList.remove('hidden');
  }
}

form.onsubmit = (e)=>{
  e.preventDefault;
  input.value = '';
}

for (let i = 0; i < form.length; i++ ) {
  form[i].onsubmit = (e)=>{
    e.preventDefault();
    input[i].value = '';
  }
}