import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as obj from "../../support/obj_actions";
import { HomePage } from "../../pages/homepage";
import { SlidePage } from "../../pages/sliderpage";
import { InputForm } from "../../pages/inputFormpage";

const homePage = new HomePage();
const slidePage = new SlidePage();
const inputForm = new InputForm();

Given( "User navigate to home page", () => {
    // cy.visit( "/");
    homePage.navigate();
})

When( "Change view to {string}", ( viewType )=>{
    cy.viewport( viewType );
})
When( "User navigate to sliders page", () => {
    homePage.selectObjByTxt("Drag & Drop Sliders" , "drag-drop-range-sliders-demo");
})
When( "User navigate to input-form page",()=>{
    homePage.selectObjByTxt("Input Form Submit" , "input-form-demo");
})
When( "User move slider to {string}",  (updateVal ) => {
    slidePage.changeSliderVal( updateVal );
})
When( "User fill input form", ()=>{
    inputForm.fillForm();
    inputForm.submitForm();
})
When("User accessibility of navigating to input-form page", ()=>{
    homePage.selectObjByTxt("Input Form Submit" , "input-form-demo");
    cy.injectAxe();
    cy.checkA11y();
})

Then( "Slider has value as {string}", ( selectedVal) => {
    slidePage.checkSliderVal( selectedVal );
})
Then( "Use successfully submit form", () => {
    inputForm.validateSuccessMsg();
})

