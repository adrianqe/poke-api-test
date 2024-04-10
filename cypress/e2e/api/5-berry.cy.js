/// <reference types="cypress" />

describe('Obtener información sobre una baya específica', () => {
    it('Debería devolver los detalles de la baya', () => {
      const berryIdentifier = 'cheri';
      cy.request({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/berry/${berryIdentifier}/` ,
      }).then((response) => {
        expect(response.status).to.equal(200);
        // Verificar las propiedades de la respuesta
        expect(response.body).to.have.property('id');
        // Verificar que la respuesta incluya el nombre del tipo de la baya
        expect(response.body).to.have.property('name').and.to.equal('cheri');
        //Verificar que la respuesta incluya el tiempo de crecimiento de la baya
        expect(response.body).to.have.property('growth_time').and.to.equal(3);
        //Verificar que la respuesta incluya la cantidad máxima de recolección de la baya
        expect(response.body).to.have.property('max_harvest').and.to.equal(5);
        //Verificar que la respuesta incluya el poder de regalo natural de la baya
        expect(response.body).to.have.property('natural_gift_power').and.to.equal(60);
        // Verificar el enlace a la URL de la baya
        expect(response.body.item).to.have.property('url').and.to.equal('https://pokeapi.co/api/v2/item/126/');
        // Verificar que la respuesta incluya un enlace a la URL del tipo de la baya
        expect(response.body.natural_gift_type).to.have.property('url').and.to.equal('https://pokeapi.co/api/v2/type/10/');
      });
    });
  });
  