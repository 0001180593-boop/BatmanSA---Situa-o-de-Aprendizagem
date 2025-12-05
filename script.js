// Lista de Pokémons (exemplo, você pode adicionar mais)
const pokemons = [
  {
    nome: "Pikachu",
    especie: "Elétrico",
    raridade: "Comum",
    forca: 85,
    descricao: "Um Pokémon elétrico muito popular e leal.",
    imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    nome: "Charizard",
    especie: "Fogo / Voador",
    raridade: "Raro",
    forca: 120,
    descricao: "Um dos Pokémon mais poderosos e icônicos.",
    imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    nome: "Mewtwo",
    especie: "Psíquico",
    raridade: "Lendário",
    forca: 180,
    descricao: "Criado geneticamente para ser extremamente poderoso.",
    imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
  }
];

// Carrega os cards
function carregarPokedex(lista = pokemons) {
  const container = document.getElementById("pokedex");
  container.innerHTML = "";

  lista.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}">
      <h3>${p.nome}</h3>
      <p><strong>Força:</strong> ${p.forca}</p>
    `;

    card.onclick = () => abrirModal(p);
    container.appendChild(card);
  });
}

// Filtra Pokémons
function filtrarPokemons() {
  const termo = document.getElementById("busca").value.toLowerCase();

  const filtrados = pokemons.filter(p =>
    p.nome.toLowerCase().includes(termo)
  );

  carregarPokedex(filtrados);
}

// Abre modal
function abrirModal(pokemon) {
  document.getElementById("modal-img").src = pokemon.imagem;
  document.getElementById("modal-nome").innerText = pokemon.nome;
  document.getElementById("modal-especie").innerText = pokemon.especie;
  document.getElementById("modal-raridade").innerText = pokemon.raridade;
  document.getElementById("modal-forca").innerText = pokemon.forca;
  document.getElementById("modal-desc").innerText = pokemon.descricao;

  document.getElementById("modal").style.display = "flex";
}

// Fecha modal
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Botão sair
function sair() {
  alert("Você saiu da Pokedéx!");
  window.location.href = "index.html"; // caso queira redirecionar
}

// Carrega pokédex ao abrir página
document.addEventListener("DOMContentLoaded", carregarPokedex);
