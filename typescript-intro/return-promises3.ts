//De esta forma se puede especificar el retorno de las funciones
(() => {
  //ejemplo para number
  const sum = ( a: number, b: number ): number => a + b;
  //ejemplo para string
  const name = (): string => 'Hola Mundo';

  //ejemplo para especificar una promesa
  const getPay = (): Promise<string>  => {
    return new Promise( (resolve, reject) => {
      resolve('Catty');
    })
  }

  getPay().then( a => console.log(a.toUpperCase()))

})();
