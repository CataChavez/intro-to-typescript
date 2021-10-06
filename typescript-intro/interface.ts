
(() => {
  
  interface Xmen{
    name: string;
    age: number;
    power?:string;
  }

  const sendOnMission = ( xmen: Xmen ) => {
    console.log(`Send ${ xmen.name } on a mission`);
  }

  const  backToHeadquarters = ( xmen: Xmen ) => {
    console.log(`Send ${ xmen.name } on a mission`);
  }



  const wolverine= {
    name: 'Logan',
    age: 60
  }

  sendOnMission(wolverine)
  backToHeadquarters(wolverine)

})();
