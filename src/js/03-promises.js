


const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event){
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  for(let i = 0; i <= amount; i++){
    const position = i + 1;
    const promise = createPromise(position, delay + (step * i));
    promise.then(({position, delay}) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({position, delay}) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    })
  }
}







// function createPromise(position, delay) {
//   return new Promise ((position, delay) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() =>{
//       if (shouldResolve) {
//         // Fulfill
//       } else {
//         // Reject
//       }
//     }, delay)
   
//   })
  
// }

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}