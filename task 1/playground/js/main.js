console.log("Starting javascript...");

console.log("Writing expressions with variables");

console.log("-----------Exercise 1, 2, 3--------");
var myName = "Matias";
var myAge = 23;
var ignasiAge = 32;
var ageDiff = myAge - ignasiAge;
console.log("Nombre: "+myName+"\n"+" Edad: "+myAge);
console.log(ageDiff);

console.log("-----------Exercise 4--------");
if(myAge>21){
    console.log("You are older than 21");
}else{
    console.log("You are not older than 21");
}

console.log("-----------Exercise 5--------");
if(myAge==ignasiAge){
    console.log("You have the same age as Ignasi");
}if(myAge>ignasiAge){
    console.log("You are older than Ignasi");
}else{
    console.log("You are younger than Ignasi")
}

console.log("");

console.log("-----------Exercise 2.1--------");
var start = ["Rodri", "Branko", "Gabi", "Nahuel",
 "Eduardo", "Matias", "Rocio", "Lucas H", "Lucas", "Roman",
"Gian", "Diego", "Alan", "Nahuel", "Lean", "Ariel", "Teo", 
"Lucio", "Ivan", "Agus", "Erica", "Meji", "Nico", "Fresco",
 "Jose", "Elias", "Ezequiel"];
start.sort();

var info = "";
for(i=0; i<start.length;i++){
    info+=start[i]+"\n"
}
console.log(start[0]+"\n"+ start[26] +"\n"+"Start 2020:\n "+info);

console.log("-----------Exercise 2.2--------");
var ages=[23, 26, 28, 25, 18, 20, 21, 22, 24, 24, 19, 17, 22, 24];
var ageInfo="";
var index=0;
while(index<ages.length){
    if((ages[index]%2)==0){
    ageInfo+=ages[index]+"\n";
    }
    index ++;
}
console.log(ageInfo);

console.log("-----------Exercise 2.3--------");
function numeroMenor(array){
    var numero="0";
    if(numero==0){
        numero = array[numero]
    }
    for(i=0;i<array.length;i++){
        if(numero > array[i]){
            numero = array[i]
        }
    }
    return numero;
}
console.log(numeroMenor(ages));

console.log("-----------Exercise 2.4--------");
function numeroMayor(array){
    var numero="0";
    if(numero==0){
        numero = array[numero]
    }
    for(i=0;i<array.length;i++){
        if(numero < array[i]){
            numero = array[i]
        }
    }
    return numero;
}
console.log(numeroMayor(ages));

console.log("-----------Exercise 2.5--------");
function buscarValorSegunIndice(array, indice){
    if(indice>array.length){
        return false;
    }else{
        return array[indice];
    }
}
console.log(buscarValorSegunIndice(start, 5));
console.log(buscarValorSegunIndice(start, 99));

console.log("-----------Exercise 2.6--------");
var numbers = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100,6]; 
function valoresRepetidos(array){
    var valRep=[];
    for(i=0;i<array.length;i++){
        for(j=i+1;j<array.length;j++){
            if(j!=i){
                if(array[i]===array[j]){
                    if(valRep.indexOf(array[i])=== -1){
                    valRep.push(array[i])
                    }
                }
            }
        }
    }
    return valRep;
}
console.log(valoresRepetidos(numbers));

console.log("-----------Exercise 2.7--------");
function mostrarValoresArray(array){
    var info="";
    for(i=0;i<array.length;i++){
        info+=array[i]+"\n";
    }
    return info;
}
var myColor = ["Red", "Green", "White", "Black"];

console.log(mostrarValoresArray(myColor));

console.log("-----------Exercise 3.1--------");
function reverseNumber(numero){
    numero = numero.toString();
    return numero.split("").reverse().join("");
}
console.log(reverseNumber(34098231));

console.log("-----------Exercise 3.2--------");
function ordenaString(string){
    return string=string.split("").sort().join("");
}
console.log(ordenaString("hola"));

console.log("-----------Exercise 3.3--------");
function mayuscula(string){
    return string.replace(/\b[a-z]/g, l => l.toUpperCase());
}
console.log(mayuscula("mamá saca la mano de ahi carajo"));

console.log("-----------Exercise 3.4--------");
function longestWord(string){
    longest = "";
    palabras = string.replace(",", " ").split(" ");
    palabras.forEach(function(palabra){
    if (palabra.length >longest.length){
         longest = palabra;
     }
    });
    return longest; 
}
console.log(longestWord("cortaste toda la looz"));