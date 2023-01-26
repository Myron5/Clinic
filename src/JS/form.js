import axios from 'axios';
import Notiflix from 'notiflix';

const fetchURL = 'https://sheetdb.io/api/v1/ey5us6ygizwt3';
const formRef = document.querySelector('.form__box');

// https://docs.google.com/spreadsheets/d/1PwaSAKPfH7t-S4QK-VRVcbDoPYu7qvhSEz2My-jbrW8/edit#gid=0

async function postCurrency(url, body) {
  const promise = await axios.post(url, body);
  const { data } = promise;
  return data;
}

formRef.addEventListener('submit', async e => {
  e.preventDefault();
  const body = new FormData(formRef);
  try {
    const data = await postCurrency(fetchURL, body);
    if (data.responseStatus != 200) throw new Error(data.responseStatus);
  } catch (err) {
    Notiflix.Notify.failure('😭😔 Sorry we can`t send yor apllication, please try again');
    console.log(err.message);
  }

  console.log(resp);
});

// ----------------------------------- Add Listener on button to display textarea -----------------------------------

const txtAreaRef = document.querySelector('.form__input--textarea');
const btnRef = document.querySelector('.form__sm-btn');
const iconRef = document.querySelector('.form__sm-btn-span');

function toggleDisplay(element, btn) {
  if (element.style.display == 'none') {
    element.style.display = 'block';
  } else element.style.display = 'none';

  if (btn.style.transform == 'rotate(45deg)') btn.style.transform = 'rotate(0deg)';
  else btn.style.transform = 'rotate(45deg)';
}

btnRef.addEventListener('click', e => toggleDisplay(txtAreaRef, iconRef));
