describe('Find a Clinic', function() {
    it('Search for Denver. Check that first result is Childrens Hospital Colorado then go to request an appointment form.', function() {
        cy.visit('https://www.cochlear.com/us/en/home')

        cy.wait(1000)

        cy.contains('Find a clinic').click({
            force: true
        })

        cy.wait(2000)

        cy.url().should('include', '/find-a-clinic')

        cy.wait(2000)

        cy.get('#clinic-search-input')
            .clear()
            .type('Denver, co, usa')
            .should('have.value', 'Denver, co, usa')

        cy.wait(2000)

        cy.get('#clinic-search-input').type('{downarrow}{enter}');

        cy.wait(2000)

        cy.get('#clinicList').find('li:eq(0)').click({
            force: true
        })

        cy.wait(2000)

        cy.get('.clinicDetails__clinic-name').contains('Children\'s Hospital Colorado')

        cy.wait(2000)

        cy.get('#clinicList').find('li:eq(0)').find('.btn--primary').click({
            force: true
        })

    })
})