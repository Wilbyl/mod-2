
/*function nome() {
  const nome = document.getElementById("imputNome").volue;

  document.getElementById("imputNome").volue = "";

  if (nome == "") {
    alert("escreva alguma coisa");
  } else {
    document.getElementById("spanresultado").textContent = nome;
    document.getElementById("spanresultado").style.color = "red";
  }
}*/

function sec1() {
    var sec = document.getElementById("primeiro");

    if(sec.style.display === "none"){
        sec.style.display = "flex";
    }else{
        sec.style.display = "none";
    }
}
function sec2() {
    var sec = document.getElementById("segundo");

    if(sec.style.display === "none"){
        sec.style.display = "flex";
    }else{
        sec.style.display = "none";
    }
}

function calcula () {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    var resoltado = peso/ (altura*altura);
    alert(resoltado.toFixed(2));
}
