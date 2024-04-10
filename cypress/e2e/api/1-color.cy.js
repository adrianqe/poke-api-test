/// <reference types="cypress" />

describe('Obtener información sobre el color de un Pokémon mediante su ID de color o nombre', () => {
  it('Debería devolver el color y los pokemon asociados a ese color', () => {
    const colorID = '3'; // ID del color que queremos obtener
    cy.request({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon-color/${colorID}/`,
    }).then((response) => {
      expect(response.status).to.equal(200);
      // Verificar las propiedades de la respuesta
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('names').that.is.an('array').and.is.not.empty;
      expect(response.body).to.have.property('pokemon_species').that.is.an('array').and.is.not.empty;
      // Verificar las propiedades de las especies de Pokémon asociadas
      response.body.pokemon_species.forEach((pokemonSpecies) => {
        expect(pokemonSpecies).to.have.property('name').that.is.a('string').and.is.not.empty;
        expect(pokemonSpecies).to.have.property('url').that.is.a('string').and.is.not.empty;
      });
    });
  });
});

  
  