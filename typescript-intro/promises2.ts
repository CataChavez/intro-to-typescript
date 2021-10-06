
(() => {
  
  const withdrawMoney = ( withdrawamounth: number ): Promise<number>=> {
    let balance = 10000;
    return new Promise((resolve, reject) => {
      if (withdrawamounth > balance){
        reject('There is not enought money');
      }else{
        balance -= withdrawamounth;
        resolve(balance);
      }
    });

  }
  withdrawMoney(5000)
    .then(balance => console.log(`balance left in the account ${balance}`))
    .catch(console.warn)
})();
