it('meldCX browser open', function(){


cy.visit('https://www.meldcx.com/',{timeout: 70000})
cy.get('#w-dropdown-toggle-8 > img').click()
cy.get('#w-dropdown-toggle-13 > :nth-child(2)').click()
cy.get('.mobile-nav---buttons > [href="/get-started"]',{timeout:5000}).click()



})