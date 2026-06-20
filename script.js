function verificaridade() {

    let idade = Number(document.getElementById("idade").value);
       console.log(idade);

       resultado.classList.remove("verde", "amarelo", "vermelho");

       if (idade === 0 || isNaN(idade)) {
        resultado.innerText = "Por favor, insira uma idade válida.";
        resultado.classList.add("vermelho");
        return;
       }
    if (idade >= 18) {  
        document.getElementById("resultado").innerText = "Você pode votar.";
        resultado.classList.add("verde");
    } 
    else if (idade >= 16) {
        document.getElementById("resultado").innerText = "Você pode votar, mas não é obrigatório.";
        resultado.classList.add("amarelo");
    }
    
    else {
        document.getElementById("resultado").innerText = "Você não pode votar.";
        resultado.classList.add("vermelho");
    }
document.getElementById("idade").value = "";
}
