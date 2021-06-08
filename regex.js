

function regex() {
    document.getElementById("extrat").style.display = "none";
    document.getElementById("compri").style.display = "none";
    var string = document.getElementById("str").value;
    var regex = document.getElementById("reg").value;
    var slash = "/";
    var flag = "/";

    if (document.getElementById("ignore").checked == true) {
        flag = flag.concat(document.getElementById("ignore").value);
    }

    if (document.getElementById("global").checked == true) {
        flag = flag.concat(document.getElementById("global").value);
    }

    if (document.getElementById("multi").checked == true) {
        flag = flag.concat(document.getElementById("multi").value);
    }

    var regexflag = eval(slash.concat(regex).concat(flag));
   // console.log(regexflag);
    var resultadoV = regexflag.test(string);
    var resultadoE = string.match(regexflag);

    document.getElementById("valida").innerHTML = "Match: <b>" + resultadoV + "</b>";
    if (resultadoV) {
        document.getElementById("extrat").style.display = "block";
        document.getElementById("compri").style.display = "block";
        document.getElementById("extrat").innerHTML = "String(s): " + resultadoE;
        var resultadoL = string.match(regexflag).length;
        document.getElementById("compri").innerHTML = "# " + resultadoL + " result(s)";
    }
}


// Simulações de Replace
function replace() {
    var testStr = document.getElementById("str1").value;
    //console.log(testStr);
    var testRegex = eval(document.getElementById("reg1").value);
    var replaceText = document.getElementById("rep1").value;
    var resultadoV = testRegex.test(testStr);
    var result = testStr.replace(testRegex, replaceText);
    document.getElementById("valida1").innerHTML = "Match: <b>" + resultadoV + "</b>";
    document.getElementById("replace1").innerHTML = "Result: <u> " + result + "</u>";
}

// Testes Gerais

function myFunction(i) {
    var testStr = document.getElementById("str" + i).value;
    var testRegex = eval(document.getElementById("reg" + i).value);
    var replaceText = document.getElementById("rep" + i).value;
    var resultadoV = testRegex.test(testStr);
    var result = testStr.replace(testRegex, replaceText);
    document.getElementById("valida" + i).innerHTML = "Match: <b>" + resultadoV + "</b>";
    document.getElementById("replace" + i).innerHTML = "Result: <u> " + result + "</u>";
}