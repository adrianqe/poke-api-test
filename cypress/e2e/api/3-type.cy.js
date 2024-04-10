/// <reference types="cypress" />

describe('Obtener información de la especie de Pokémon Wormadam', () => {
    it('Debería obtener información de la especie de Pokémon Wormadam por su ID', () => {
      const pokemonSpeciesName = 'wormadam';
      cy.request({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon-species/${pokemonSpeciesName}`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.equal(200);
        const pokemonSpecies = response.body;
        expect(pokemonSpecies).to.have.property('name', 'wormadam');
        expect(pokemonSpecies).to.have.property('capture_rate').and.to.equal(45);
        expect(pokemonSpecies).to.have.property('base_happiness').and.to.equal(70);  
        expect(pokemonSpecies).to.have.property('is_legendary').and.to.be.false;
      });
    });
  });
