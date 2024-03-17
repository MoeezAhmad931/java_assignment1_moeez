document.getElementById("alertString").onclick = function () {
    
console.log("kjsd")
    alert("Saith Moeez")

    let statement = 'alert("Saith Moeez")'
    
    document.getElementById("Statement").innerHTML = statement
 //   document.getElementById("Statement").style.textAlign = "center"
//    document.getElementById("Statement").style.color = "green"
    document.getElementById("result").innerHTML = "";
}


document.getElementById("alertNumber").onclick = function () {
    

    alert("187423")

    let statement = 'alert("187423")'
    
    document.getElementById("Statement").innerHTML = statement
    document.getElementById("Statement").style.textAlign = "center"
//    document.getElementById("Statement").style.color = "green"
    document.getElementById("result").innerHTML = "";
}
document.getElementById("VariableNumber").onclick = function () {

    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""

    let html = " <ul> <li>A variable name can't contain space . </li> <li>A variable contains letters, numbers, dollor sign and underscores. </li> <liThough a variable  can't be any of Javascript's Keywords, it can contain keywords .for example, <code>useAlert</code>and  <code>myVar</code>are legal </li> <li> Capital letters are fine, but careful.A <code>Rose</code>  is not a <code>roset</code></li></ul>"
    document.getElementById("result").innerHTML = html
}
document.getElementById("camelCaseExample").onclick = function () {

    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    let html = " <h3> Example:</h3> <ul> <li> userResponse</li> <li>userResponseTime </li><li>userResponseTimeLimit </li></ul>"
    document.getElementById("result").innerHTML = html
}

document.getElementById("sum2Number").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    let num1 = 20;
    let num2 = 10;
    let sum = num1 + num2;

    document.getElementById("result").innerHTML = " <p class = 'text-center'>" + sum +  "</p>";
    document.getElementById("Statement").innerHTML = " let num1 = " + num1 + "; <br> let num2 = " + num2 + "; <br> let sum = num1 + num2;"

}

document.getElementById("subtract2Number").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    let num1 = 20;
    let num2 = 10;
    let sum = num1 - num2;

    document.getElementById("result").innerHTML = " <p class = 'text-center'>" + sum +  "</p>";
    document.getElementById("Statement").innerHTML = " let num1 = " + num1 + "; <br> let num2 = " + num2 + "; <br> let sum = num1 - num2;"

}

document.getElementById("Multiply2Number").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    let num1 = 20;
    let num2 = 10;
    let sum = num1 * num2;

    document.getElementById("result").innerHTML = " <p class = 'text-center'>" + sum +  "</p>";
    document.getElementById("Statement").innerHTML = " let num1 = " + num1 + "; <br> let num2 = " + num2 + "; <br> let sum = num1 * num2;"

}
document.getElementById("divide2Number").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    let num1 = 20;
    let num2 = 10;
    let sum = num1 / num2;

    document.getElementById("result").innerHTML = " <p class = 'text-center'>" + sum +  "</p>";
    document.getElementById("Statement").innerHTML = " let num1 = " + num1 + "; <br> let num2 = " + num2 + "; <br> let sum = num1 / num2;"

}

document.getElementById("calculateNumber").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    let calculation = 40 / 4 * 5 + 2**3 - (5+4);

    document.getElementById("result").innerHTML = " <p class = 'text-center'>" + calculation +  "</p>";
    document.getElementById("Statement").innerHTML = " 40 / 4 * 5 + 2**3 - (5+4) "

}

document.getElementById("button1").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
}

document.getElementById("button2").onclick = function () {
    document.getElementById("result").innerHTML = ""
}
