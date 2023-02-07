var listaFilmesFavoritos = []; // cartaz do filme
var listaTrailersFilmesFavoritos = [];
var listaNomeFilme = [];

function adicionarFilme(){
  var filmeFavorito = document.getElementById('filme').value;
  var trailerFilmeFavorito = document.getElementById('trailer').value;
  var nomeFilme = document.getElementById('nomeFilme').value;
  
    if(( filmeFavorito.endsWith('jpg') ) || ( filmeFavorito.endsWith('jpeg') )){
      
      document.getElementById('mensagemDeErro').innerHTML = '';
      listaFilmesFavoritos.push(filmeFavorito);       
      listaTrailersFilmesFavoritos.push(trailerFilmeFavorito);
      listaNomeFilme.push(nomeFilme);
      
      limpaCampos();
      recarregarFilmes();
      
    } else {
      
      document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido, tente novamente';
      limpaCampos();
      
    }
  }

function recarregarFilmes(){
 
  var elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML = '';
  for(i=0; i < listaFilmesFavoritos.length; i++){
    elementoListaFilmes.innerHTML += `<div class='cartazBotao' id='cartazBotao${i}'><a href=" ${listaTrailersFilmesFavoritos[i]}" id="${i}"><img src=" ${listaFilmesFavoritos[i]}"></a><label for="${i}" style="color:white">${listaNomeFilme[i]}</label><button onclick="removerFilme(${i})" style="color:#ff0000">Excluir filme</button></div>`;
    
  }
}

function limpaCampos(){
   document.getElementById('filme').value = '';
   document.getElementById('trailer').value = '';
   document.getElementById('nomeFilme').value = '';
}

function removerFilme(idFilme){
 // console.log(`${listaFilmesFavoritos}\n${listaTrailersFilmesFavoritos}\n${listaNomeFilme}`);
  
  var cartazBotao = document.getElementById(`cartazBotao${idFilme}`);
  cartazBotao.remove();
  
  listaFilmesFavoritos.splice(idFilme,1);
  listaTrailersFilmesFavoritos.splice(idFilme,1);
  listaNomeFilme.splice(idFilme,1);
  recarregarFilmes();
    //usar o operador delete ia eliminar somente o valor do filme e seu trailer, não o elemento em si, fazendo com que o botão Excluir Filme e uma imagem vazia ainda fossem escritos na tela
  // console.log(`${listaFilmesFavoritos}\n${listaTrailersFilmesFavoritos}\n${listaNomeFilme}`); 
}