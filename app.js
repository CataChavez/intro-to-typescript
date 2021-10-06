"use strict";
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
        constructor(name, team, realName, canFight = true, numberOfVictories = 0) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.canFight = canFight;
            this.numberOfVictories = numberOfVictories;
        }
    }
    const antman = new Avenger('Antman', 'Capi');
    console.log(antman);
})();
