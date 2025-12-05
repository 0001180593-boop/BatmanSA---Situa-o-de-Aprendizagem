describe("Teste da Pokédex Lendária", () => {

  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/cypress/e2e/home.html"); 
  });

  it("Deve exibir o título da página", () => {
    cy.contains("Pokédex Lendária: A pokepidia dos pokemons").should("be.visible");
  });

  it("Deve exibir o campo de busca", () => {
    cy.get("#busca").should("exist").and("be.visible");
  });

  it("Deve permitir digitar no campo de busca", () => {
    cy.get("#busca").type("pikachu").should("have.value", "pikachu");
  });

  it("Deve exibir o grid da pokédex", () => {
    cy.get("#pokedex").should("exist").and("be.visible");
  });


  it("Deve clicar no botão de sair", () => {
    cy.contains("Sair").click();
  });

});
