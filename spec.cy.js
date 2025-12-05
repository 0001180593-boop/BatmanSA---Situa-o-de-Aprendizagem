describe('Testes do index.html - CyberShield', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/cypress/e2e/index.html');
  });

  // --- LOGIN ---
  it('Carrega a tela de login corretamente', () => {
    cy.get('#login-container').should('be.visible');
    cy.get('#loginEmail').should('exist');
    cy.get('#loginPassword').should('exist');
    cy.contains('Entrar').should('exist');
  });

  it('Abrir tela de cadastro ao clicar em "Cadastre-se"', () => {
    cy.get('#showRegister').click();
    cy.get('#register-container').should('be.visible');
  });

  // --- CADASTRO ---
  it('Preenche o cadastro e retorna ao login', () => {
    cy.get('#showRegister').click();

    cy.get('#registerName').type('Usuário Teste');
    cy.get('#registerEmail').type('teste@teste.com');
    cy.get('#registerPassword').type('123456');

    cy.contains('Cadastrar').should('exist');

    cy.get('#showLogin').click();
    cy.get('#login-container').should('be.visible');
  });

  // --- LOGIN SIMULADO ---
  it('Faz login e exibe o menu principal', () => {
    cy.get('#loginEmail').type('teste@teste.com');
    cy.get('#loginPassword').type('123456');
    cy.contains('Entrar').click();

    // Verifica se o header aparece
    cy.get('#mainHeader').should('exist');
  });

});
