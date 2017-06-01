
//létrehozzuk a Car osztályt
class Car{

//megadjuk a kocsi tulajdonságait
 constructor(name, color) { 
     this.name = name;
     this.tank = 70;
     this.color = color;
     this.fogyasztas = 5;
     this.utasok = [5];
     
//
     Object.defineProperty(this, 'kerekszam' , {
         value: 4,
         writable:  false,
         enumerable: true,
         configurable: true
     });
     
  //Ha függvény megvizsgálja hogy a szín nem fehér és ha nem akkor legyen fehér   
     if (!this.color){ 
     this.color = "white";
     }
}
//kiiratjuk a console.log paranncsal a kocsi tulajdonságait
    printallinfo () { 
      console.log("rendszama: "+this.name);
      console.log("auto tankja: "+this.tank);
      console.log("auto színe: "+this.color);
      console.log("auto fogyasztasa: "+this.fogyasztas);
      console.log("kerekeinek szama: "+car1.kerekszam)
     }   

  //függvényt hozunk létre aminek adunk egy paramétert   
  myCargoing (kilometers) {
    // fogyasztast elosztjuk 100-al és így megkapjuk a km-t
    let fogyperkm = this.fogyasztas / 100;
    //Ha függvény megvizsgálja, hogy ha a tank üres akkor nem indulhat el a kocsi
    if (this.tank<=0) {
      console.log("NEM INDULHAT EL A KIBASZOTT KOCSI")
    }

    //While (elöltesztelő ciklus) megvizsgálja hogy ha a kilométer nagyobb egyenlő 0-val akkor minden egyes ciklus alatt a kilometers változóból vonjon ki egyet majd ezután tankból kivonja a fogyperkm-t
  while (kilometers >=0){
    kilometers--;
    this.tank = this.tank - fogyperkm;

  }
  console.log(this.name+" rendszámú autó tankjában "+this.tank+" liter üzemanyag maradt");



  }

}

//Kiiratjuk a függvényeket
let car1 = new Car("GDR-654");
car1.printallinfo();
car1.myCargoing(50);  
  
      
      