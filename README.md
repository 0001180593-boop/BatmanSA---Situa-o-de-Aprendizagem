README – Testes Cypress: CyberShield + Pokédex Lendária

CyberShield – Testes de Login e Cadastro
Pokédex Lendária – Testes de interface, busca e interação

 Estrutura dos Testes
cypress
 └── e2e
      ├── ant.cy.js        → Testes do CyberShield
      └── pokedex.cy.js    → Testes da Pokédex Lendária
 1. Testes do CyberShield (Login & Cadastro)
Arquivo: ant.cy.js
Esses testes validam a parte de autenticação e navegação entre telas.

 1. Carregamento da tela de login
O teste verifica:
Container de login visível
Campos de email e senha existentes
Botão “Entrar” presente
Isso garante que o sistema inicia corretamente.

 3. Abrir tela de cadastro
Ao clicar em “Cadastre-se”, a interface deve trocar para o formulário de registro.
O teste confirma:
O botão funciona
A tela de cadastro realmente aparece

 3. Preencher cadastro e retornar ao login
O teste:
Abre o cadastro
Preenche Nome, Email e Senha
Clica em voltar para Login
Verifica se o login aparece novamente
Esse fluxo valida a troca entre telas e o comportamento da interface.

 4. Login Simulado
Insere dados:
teste@teste.com
123456
E clica em “Entrar”.
Depois verifica se o menu principal aparece:
#mainHeader
Confirma que o login direciona corretamente.

 2. Testes da Pokédex Lendária
Arquivo: pokedex.cy.js
Esses testes garantem o funcionamento da interface e dos componentes da Pokédex.

 1. Título deve aparecer
O teste verifica se o título:
“Pokédex Lendária: A pokepidia dos pokemons”
está visível ao carregar a página.

 3. Campo de busca
O Cypress valida:
Que o campo existe
Está visível
Pode receber digitação
Exemplo:
cy.get("#busca").type("pikachu")
Confirma que o filtro da Pokédex funciona.

 5. Grid dos Pokémons
O teste verifica:
Se o elemento #pokedex existe
Se está visível
É o local onde os cards são renderizados.

 7. Botão de Sair
O teste apenas verifica que o botão existe e é clicável:
cy.contains("Sair").click()
Ele pode futuramente validar logout, redirecionamento ou encerramento da sessão.


 Como executar todos os testes
1. Instalar o Cypress
npm install cypress --save-dev
2. Abrir a interface do Cypress
npx cypress open.
3. Rodar os testes:
ant.cy.js → Testes do CyberShield
pokedex.cy.js → Testes da Pokédex Lendária
