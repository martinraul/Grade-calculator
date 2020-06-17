
const URL = "192.168.0.104:8080";

context('grade-calculator', () => {
    before(() => {
        cy.visit(URL);
    });
    it('se asegura que haya un formulario', () => {
        cy.get('#form').find('.grade');
    });
    it('se asegura que funcione los botones', () => {
        cy.get('#average-button').click();
        cy.get('#add-button').click();
        cy.get('#reset-button').click();
    });
    it('se asegura que calcule average/menor/mayor ', () => {
        cy.get('#form > li:nth-child(1) > input')
            .type('10').should('have.value', '10')
        cy.get('#form > li:nth-child(2) > input')
            .type('8').should('have.value', '8')
        cy.get('#form > li:nth-child(3) > input')
            .type('15').should('have.value', '15')
        cy.get('#average-button').click();
        cy.get('#min-button').click();
        cy.get('#max-button').click();
    });
    it('se asegura que funcione boton reset', () => {
        cy.get('#reset-button').click();
    });
    it('se asegura que calcule average/menor/mayor despues de apretar reset ', () => {
        cy.get('#form > li:nth-child(1) > input')
            .type('10').should('have.value', '10')
        cy.get('#form > li:nth-child(2) > input')
            .type('8').should('have.value', '8')
        cy.get('#form > li:nth-child(3) > input')
            .type('15').should('have.value', '15')
        cy.get('#average-button').click();
        cy.get('#min-button').click();
        cy.get('#max-button').click();
    });
    it('se asegura que funcione boton reset otra vez', () => {
        cy.get('#reset-button').click();
    });
    it('se asegura que alerte campos vacios al calcular average', () => {
        cy.get('#average-button').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal("You must fill at least 1 field");
          })
    });
    it('se asegura que alerte campos vacios al calcular minimo', () => {
        cy.get('#min-button').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal("You must fill at least 1 field");
          })
    });
    it('agrega 1 nuevos campos', () => {
        cy.get('#add-button').click();
        cy.get("#form > li:nth-child(6) > input")
    });
    
    it('agrega 2 nuevos campos', () => {
        cy.get('#add-button').click();
        cy.get("#form > li:nth-child(7) > input")
    });
    it('se asegura que funcione boton reset otra vez', () => {
        cy.get('#reset-button').click();
    });


});
