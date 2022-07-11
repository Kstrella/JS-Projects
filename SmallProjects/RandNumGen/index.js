//rand num generator

let x;
let y;
let z;

//NO HTML
/*
x = Math.floor(Math.random() * 6) + 1;
y = Math.floor(Math.random() * 6) + 1;
z = Math.floor(Math.random() * 6) + 1;
console.log(x);
console.log(y);
console.log(z);
*/

//Using HTML
document.getElementById("rollButton").onclick = function(){

    //(Math.random() * 6) gives us rand from 0-5 and we + 1 because there are 6 sides to a dice
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}