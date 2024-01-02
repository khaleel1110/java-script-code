
var a = 10;
var b = [2,3,5,6,2,7,8,9,];

var namesOfHousePeople = ["Khalifa", "Khalil", "Ahmad", "Isa", "Muhammad", "Aliyu"];


for(var i =0; i<8; i++){

    var multiplication  = addition(a, b[i]);

    console.log(multiplication);

}

// 1. Khalifa
//2. Khalil
function addition(a,b){
    return a*b;
}