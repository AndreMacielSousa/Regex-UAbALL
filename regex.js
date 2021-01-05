
function regex(){
    var string = document.getElementById("str").value;
    var regex =document.getElementById("reg").value;
    var slash = "/";
    var flag = "/";

    if (document.getElementById("ignore").checked == true ){
        flag = flag.concat(document.getElementById("ignore").value);
    }

    if (document.getElementById("global").checked == true ){
      flag = flag.concat(document.getElementById("global").value);
    }
/*
    if (document.getElementById("multi").checked == true ){
        flag = flag.concat(document.getElementById("multi").value);
    }
*/
    var regexflag = eval(slash.concat(regex).concat(flag));
  //  console.log(regexflag);
    var resultadoV = regexflag.test(string);
    var resultadoE = string.match(regexflag);
    document.getElementById("valida").innerHTML = resultadoV;
    document.getElementById("extrat").innerHTML = resultadoE;
}




function myFunction(i) {
    console.log(i)
    var testStr = document.getElementById("str"+i).value;
    //console.log(testStr);
    var testRegex = eval(document.getElementById("reg"+i).value);
    //console.log(testRegex);
    var resultadoV = testRegex.test(testStr);
    var resultadoE = testStr.match(testRegex);
    document.getElementById("valida"+i).innerHTML = resultadoV;
    document.getElementById("extrat"+i).innerHTML = resultadoE;
}