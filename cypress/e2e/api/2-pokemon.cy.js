/// <reference types="cypress" />

describe('Obtener información del Pokémon Pikachu', () => {
    it('Debería obtener información del Pokémon Pikachu por su ID', () => {
      const pokemonId = 25; // ID de Pikachu
      cy.request({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.equal(200);        
          const pokemon = response.body;          
          // Verificar que el nombre del Pokémon sea "Pikachu"
          expect(pokemon).to.have.property('name').and.to.equal('pikachu');          
          // Verificar que la experiencia base del Pokémon sea 112
          expect(pokemon).to.have.property('base_experience').and.to.equal(112);          
          // Verificar que la altura del Pokémon sea 4
          expect(pokemon).to.have.property('height').and.to.equal(4);          
          // Verificar que el peso del Pokémon sea 60
          expect(pokemon).to.have.property('weight').and.to.equal(60);        
      });
    });
  });
  