'use strict'
let tomb = [2,4,5,"4","Pisti"]
let osszeg = 0;
for (let i=0; i<tomb.length; i++) {
if (typeof(tomb[i]) === 'number'){
 osszeg = osszeg + tomb[i];
 console.log("SZÁM :"+tomb[i]);
} else {
 console.log("EZ NEM SZÁM: "+tomb[i]);
}

}
console.log("Tömb összege: "+osszeg);
