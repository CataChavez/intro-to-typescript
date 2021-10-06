
(() => {
  
  class Avenger {
    // esta forma declara las propiedades pero no las inicia, 
    //y si queremos inciarlas debemos llamarlas e inicializarlas 
    //en el constructor todas para que funciones  
    // name : string;
    // team : string;
    // realName : string;
    // canFight : boolean;
    // numberOfVictories : number;
    
    //Esta forma declara las propiedades y las inicia inmediatamente.
    constructor ( 
      public name: string,
      public team: string,
      public realName: string,
      public canFight: boolean = true,
      public numberOfVictories: number = 0,
      ){ }
  }

  const antman = new Avenger( 'Antman', 'Capi');

  console.log(antman)

})();
