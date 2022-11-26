let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]


const criarIten = (ITENS_LOJA) =>{

    let produto = document.createElement("article");
    produto.className = "container-produto";
    let loja = document.getElementById('itens_section');
    loja.appendChild(produto);

    let conteudoProduto = `<img class="img-produto" src=${ITENS_LOJA.url_img}> <h2 class="nome-produto"> ${ITENS_LOJA.nome} </h2> <span class="preco-produto"> <h4 class="preco_h4">Preço:</h4> R$ ${ITENS_LOJA.preco}</span>  <h4 class="descricao_h4">Descrição:</h4> <p class="descricao-produto">${ITENS_LOJA.descricao}</p>`;

    produto.innerHTML = conteudoProduto;


}


for(i = 0; i< ITENS_LOJA.length; i++){

    criarIten(ITENS_LOJA[i]);
}
