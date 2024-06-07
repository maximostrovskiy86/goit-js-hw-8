import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  submit: document.querySelector('button'),
}

const  formData = {};
const STORAGE_KEY= "feedback-form-state";

function populateForm() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  const parseData = JSON.parse(saveMessage);

  if (saveMessage) {
    refs.form.elements.email.value = parseData.email;
    refs.form.elements.message.value = parseData.message;
  }
}

function onHandlerLForm(e) {
  e.preventDefault();

  const target  = e.target;

  formData[target.name] = target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

const onSubmit = () => {
  refs.form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

populateForm();


refs.form.addEventListener('input', throttle(onHandlerLForm, 500));
refs.form.addEventListener('submit', onSubmit);
