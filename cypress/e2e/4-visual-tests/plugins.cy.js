//const { afterEach } = require("mocha")
import { describe, it } from 'mocha';

beforeEach(() => {

    cy.eyesOpen({
        appName: 'To-do list'
    })

})


it('plugin', () => {
   
    cy.visit('https://demo.playwright.dev/todomvc')

    cy.eyesCheckWindow()

})

afterEach(() => {

    cy.eyesClose()

})