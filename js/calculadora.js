function calcularAmor(){
    meuNome = document.getElementById("myName").value;
    outroNome = document.getElementById("theirName").value;

    numeroResultado = document.getElementById("numeroResultado");
    textoResultado = document.getElementById("textoResultado");

    //confere se preencheram os nomes
    if (meuNome == '' || outroNome == '') {
        alert("Você precisa preencher os dois nomes.");
        return -1; //encerra
    }

    //se ja tiver sido preenchido antes, limpa
    if (numeroResultado.innerHTML != "") {
        numeroResultado.innerHTML = "";
        textoResultado.innerHTML = "";
    }
    
    // calcula e retorna o resultado
    randInt = Math.floor(Math.random() * (100 - 85) ) + 85;

    count = 0;

    mostrarResultado = setInterval(
        function(){
            numeroResultado.innerHTML = count + "% 🤔";
            count++;
            if (count >= randInt) {
                numeroResultado.innerHTML = count + "% 😍";
                textoResultado.innerHTML =
                    "<p id=\"textoResultado\">Dada a opinião do algoritmo do amor, parece que um relacionamento entre as pessoas " + meuNome + " e " + outroNome + " tem uma boa chance de sucesso."
                    + " No entanto, isso não significa que você não tenha que trabalhar duro."
                    + " Lembre-se de que foco e dedicação são tão necessários em um relacionamento quanto o amor."
                    + " Além disso, passar tempo juntos, comunicar-se e respeitar um ao outro são essenciais para manter o amor vivo.</p>";
                clearInterval(mostrarResultado);
            }
        }, 50
    )
}