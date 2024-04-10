/// <reference types="cypress" />

describe('Verificar aspectos de una generación de Pokémon', () => {
    it('Debería verificar aspectos de una generación de Pokémon', () => {
      const generationId = 1; // ID de la generación que queremos verificar
      // Construir la URL del endpoint basada en el ID de la generación
      const url = `https://pokeapi.co/api/v2/generation/${generationId}/`;
      cy.request({
        method: 'GET',
        url: url,
      }).then((response) => {
        expect(response.status).to.equal(200);
        // Verificar las propiedades de la respuesta
        expect(response.body).to.have.property('id', generationId);
        //Verificar que la respuesta incluya el nombre de la generaciónn y que sea un string no vacío
        expect(response.body).to.have.property('name').that.is.a('string').and.is.not.empty;
        //Verificar que la respuesta incluya la region principal introducida en esta version 
        expect(response.body).to.have.property('main_region').that.is.an('object').and.is.not.empty;
        //Verificar que la respuesta incluya los movimientos introducidos en esta generación
        expect(response.body).to.have.property('moves').that.is.an('array').and.is.not.empty;
        //Verificar que la respuesta incluya las especies de Pokémon introducidas en esta generación
        expect(response.body).to.have.property('pokemon_species').that.is.an('array').and.is.not.empty;
      });
    });
  });
  