import axios from 'axios';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const storage_key = 'form-inputs';

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
  localStorage.removeItem(storage_key);
  const body = new FormData(formRef);
  try {
    const data = await postCurrency(fetchURL, body);
    if (data.responseStatus != 200) throw new Error(data.responseStatus);
  } catch (err) {
    Notiflix.Notify.failure('😭😔 Sorry we can`t send yor apllication, please try again');
    console.log(err.message);
  }
});

// ---------------------------------------- Add Listener on button to display textarea ----------------------------------------

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

// ------------------------------------------------------- Local Storage -------------------------------------------------------

const inputs = document.querySelectorAll('.js-input');

btnRef.addEventListener('click', e => toggleDisplay(txtAreaRef, iconRef));

(() => {
  const getInput = JSON.parse(localStorage.getItem(storage_key)) || {
    name: '',
    tel: '',
    comment: '',
  };
  inputs[0].value = getInput.name;
  inputs[1].value = getInput.tel;
  inputs[2].value = getInput.comment;
})();

inputs.forEach(input =>
  input.addEventListener(
    'input',
    debounce(
      e =>
        localStorage.setItem(
          storage_key,
          JSON.stringify({
            name: inputs[0].value,
            tel: inputs[1].value,
            comment: inputs[2].value,
          })
        ),
      250
    )
  )
);
