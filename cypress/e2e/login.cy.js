/// <reference types="cypress" />

import {highlight} from "cypress-highlight";

describe('Test', () => {
    it('passes', () => {
        cy.goToApp();
        cy.login('standard')

    })

    it('finds word products', () => {
        cy.findByText("Products").should("exist")
    })

    it('find some items on product page', () => {
         cy.findAllByText("Sauce Labs Backpack").should('exist')

    })

    it('find the robot logo next to products', ()=>{
        cy.xpath("//div[@class='peek']").should("exist")
    })

    it('checks dropdown for all containings', ()=>{
        cy.xpath("//select[@class='product_sort_container']//option").contains("Name (A to Z)")
        cy.xpath("//select[@class='product_sort_container']//option").contains("Name (Z to A)")
        cy.xpath("//select[@class='product_sort_container']//option").contains("Price (low to high)")
        cy.xpath("//select[@class='product_sort_container']//option").contains("Price (low to high)")
    })

    it('add to card first item', ()=>{
        cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click()
    })

    it('check functionality of dropdown', ()=>{
        cy.get('[data-test="product_sort_container"]').select(1)
        cy.get('[data-test="product_sort_container"]').select(2)
        cy.get('[data-test="product_sort_container"]').select(3)
        cy.get('[data-test="product_sort_container"]').select(0)
    })

})