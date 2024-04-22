/// <reference types="cypress" />

describe('Verificar aspectos de una generación de Pokémon', () => {
    it('Debería verificar aspectos de una generación de Pokémon', () => {
      const generationId = 1; 
      const url = `https://pokeapi.co/api/v2/generation/${generationId}/`;
      cy.request({
        method: 'GET',
        url: url,
      }).then((response) => {
        expect(response.status).to.equal(200);
    
        expect(response.body).to.have.property('id', generationId);

        expect(response.body).to.have.property('name').that.is.a('string').and.is.not.empty;

        expect(response.body).to.have.property('main_region').that.is.an('object').and.is.not.empty;

        expect(response.body).to.have.property('moves').that.is.an('array').and.is.not.empty;

        expect(response.body).to.have.property('pokemon_species').that.is.an('array').and.is.not.empty;
      });
    });
  });
  