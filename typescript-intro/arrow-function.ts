(function(){

  const myFunctionES5 = function ( a : string ){
    return a.toUpperCase();
  }

  const myFunctionES6 = (a : string) => a.toUpperCase(); //arrow function ES6
  console.log(myFunctionES5('es5'));
  console.log(myFunctionES6('arrow'));

  const sum = function(a : number, b : number){
    return a + b;
  } //function in ES5

  const sumArrowFunction = (a : number, b: number) => a + b;//arrow Function ES6

  console.log(sum(5, 5));
  console.log(sum(10, 10));

  const hulk = {
    name: 'Hulk',
    smash(){
      setTimeout(() => {
        console.log(`${ this.name } smash!!!`);
      }, 1000);
    }
  }
  hulk.smash();

})();

