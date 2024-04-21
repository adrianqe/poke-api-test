/// <reference types="cypress" />

describe('Obtener información sobre una baya específica', () => {
    it('Debería devolver los detalles de la baya', () => {
      const berryIdentifier = 'cheri';
      cy.request({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/berry/${berryIdentifier}/` ,
      }).then((response) => {
        expect(response.status).to.equal(200);

        expect(response.body).to.have.property('id');

        expect(response.body).to.have.property('name').and.to.equal('cheri');
 
        expect(response.body).to.have.property('growth_time').and.to.equal(3);

        expect(response.body).to.have.property('max_harvest').and.to.equal(5);

        expect(response.body).to.have.property('natural_gift_power').and.to.equal(60);

        expect(response.body.item).to.have.property('url').and.to.equal('https://pokeapi.co/api/v2/item/126/');

        expect(response.body.natural_gift_type).to.have.property('url').and.to.equal('https://pokeapi.co/api/v2/type/10/');
      });
    });
  });
  