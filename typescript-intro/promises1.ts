(() => {
  
  console.log('Init');

  const promise = new Promise(( resolve, reject) => {
    setTimeout(() => {
      reject('Time out it´s overs')
    }, 1000);
  });
  promise
    .then(message => console.log(message))
    .catch( err => console.warn( err ))
  console.log('End')

})();

