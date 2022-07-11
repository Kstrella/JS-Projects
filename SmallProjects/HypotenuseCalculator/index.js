//find hypotenuse of a right triangle
//formula: C = sqrt(a^2 + b^2)

let a;
let b;
let c;
/*
a = window.prompt("Enter side A")
a = Number(a);

b = window.prompt("Enter side B")
b = Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log("Side C is",c);
*/

// now using HTML

document.getElementById("submitButton").onclick = function()
{
//gets value from a txt box and outs it in variable A
a = document.getElementById("aTextBox").value;
a = Number(a);

//gets value from a txt box and outs it in variable A 
b = document.getElementById("bTextBox").value;
b = Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

document.getElementById("cLabel").innerHTML = "Side C: " + c ;

}
