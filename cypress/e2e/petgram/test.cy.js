// cypress/integration/home/home.spec/js
'use strict';

describe('Petgram', ()=>{
    it('Ver si funciona', ()=> {
        cy.visit('/')
    })

    it('Navegar a una categoría y vemos fotos', ()=> {
        cy.visit('/pet/1')
        cy.get('article')
    })

    it('Si podemos navegar con la navbar al home', ()=> {
        cy.visit('/pet/1') //Entramos a una categoria
        cy.get('nav a').first().click() //Elegimos del "NAV" un elemento Anchor <a> que está en la posición 0 y hace click
        cy.url().should('include', '/') //El resultado deberá ser "/"
    })

    it('Los usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs', ()=> {
        cy.visit('/favs')
        cy.get('form').should('have.length', 2)
    })
})

