document.getElementById("submitButton").onclick = function()
{
    let temp;

    if(document.getElementById("cB").checked)
    {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C"; //alt + 0176 for degree symbol

    }else if(document.getElementById("fB")){

        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F"; //alt + 0176 for degree symbol

    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}



temp = toFahrenheit(temp);
console.log(temp);

function toCelsius(temp)
{
    return (temp - 32)*(5/9);
}

function toFahrenheit(temp)
{
    return temp * 9/5 + 32;
}