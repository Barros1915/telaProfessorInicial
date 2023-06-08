function alerta(){
    alert('Deu Certo!');
}

function inserirImagem() {
    // Obtém uma lista de elementos com a classe especificada
    var divs = document.getElementsByClassName("content");
    
    // Itera sobre a lista de elementos
    for (var i = 0; i < divs.length; i++) {
      var div = divs[i];
      
      // Cria um elemento de imagem
      var imagem = document.createElement("img");
      
      // Define o atributo src com o caminho da imagem desejada
      imagem.src = "chatGPT.png";
      
      // Anexa a imagem à div atual
      div.appendChild(imagem);
    }
}
  