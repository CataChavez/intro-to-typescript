(function(){ 
  function active( 
    who : string, 
    moment?: string,
    object: string = 'bat signal'
    ) {

      if (moment){
        console.log(`${ who } activate the ${ object } in the ${ moment}`)
      }else {
        console.log(`${ who } activate the ${ object }`)
      }

  }
  active('Gordon', 'afternoon')
})();

