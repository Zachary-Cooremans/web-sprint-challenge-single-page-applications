describe ('Pizza test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    const submitBtn = () => cy.get('button[id=submit]')
    const pizzaRedirect = () => cy.get('button[id=order-pizza]')
    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select[name=size]')
    const sauceInput = () => cy.get('input[name=sauce]')

    const pepperoniInput = () => cy.get('input[name=pepperoni')
    const sausageInput = () => cy.get('input[name=sausage]')
    const canadianInput = () => cy.get('input[name=canadian]')
    const italianInput = () => cy.get('input[name=italian]')
    const chickenInput = () => cy.get('input[name=chicken]')
    const onionsInput = () => cy.get('input[name=onions]')
    const greenInput = () => cy.get('input[name=green]')
    const tomatoesInput = () => cy.get('input[name=tomatoes]')
    const olivesInput = () => cy.get('input[name=olives]')
    const garlicInput = () => cy.get('input[name=garlic]')
    const artichokeInput = () => cy.get('input[name=artichoke]')
    const cheeseInput = () => cy.get('input[name=cheese]')
    const pineappleInput = () => cy.get('input[name=pineapple]')
    const extraInput = () => cy.get('input[name=extra]')

    const glutenInput = () => cy.get('input[name=gluten]')

    const specialInput =() => cy.get('input[name=special]')

    it('Inputs work', () => {
        pizzaRedirect().click()

        nameInput()
        .type('Zachary Cooremans')
        .should("have.value", 'Zachary Cooremans')

        sizeInput()
        .select('large')
        .should('have.value', 'large')

        sauceInput()
        .check('bbqSauce')
        .should('have.value', 'bbqSauce')

        
        pepperoniInput().check()
        extraInput().check()
        canadianInput().check()
        garlicInput().check()
        olivesInput().check()
        sausageInput().check()
        onionsInput().check()
        greenInput().check()
        italianInput().check()
        chickenInput().check()
        greenInput().uncheck()
        extraInput().uncheck()

        glutenInput().check().uncheck()

        specialInput()
        .type("Please text when arrives")
        .should("have.value", "Please text when arrives")

        submitBtn().click()

    })

})