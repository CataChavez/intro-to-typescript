(() => {
  const avenger = {
    name: 'Steve',
    key: 'Captain America',
    power: 'Super soldier'
  }
  //destructuring
  const { name, key, power } = avenger; 
  console.log(name, key, power);

  //destructuring sucedió como argumento
  const extract = ( { name, power, key} : any) => {
     console.log(name, power, key);
  } 
  extract(avenger);

  //destructuring de cada valor de la constante 
  const avengers: string[] = [ 'Thor', 'Ironman', 'Spiderman' ];
  const [ loki, man, spider ] = avengers;
  console.log(loki, man, spider);

  //destructuring un arreglo de strings
  const extractArr = ( [thor, ironman, spiderman]: string[] ) => {
    console.log(thor, ironman, spiderman)
  }
  extract(avengers)

})();

