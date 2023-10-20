import Notiflix from 'notiflix';

const form = document.querySelector('form');
const elementDelay = form.elements.delay;
const elementStep = form.elements.step;
const elementAmount = form.elements.amount;

form.addEventListener('submit', onInputForm);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onInputForm(evt) {
  evt.preventDefault();
  let delay = Number(elementDelay.value);
  let amount = Number(elementAmount.value);
  let step = Number(elementStep.value);
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay).then(success).catch(error);
    delay += step;
  }
}
function success({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function error({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
