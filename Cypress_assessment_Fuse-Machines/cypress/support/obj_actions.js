//      Validate element existance
export function checkExistance( selectorVal ){
    cy.get(selectorVal).should('exist');
}
//      Validate element with text exist
export function checkExistanceWithText( textVal ){
    cy.contains( textVal ).should("exist");
}
//      Validate text in the element
export function checkText( selectorVal, expText ){
    cy.get( selectorVal ).scrollIntoView().invoke( 'text' ).then( (txtVal) => {
        expect( txtVal ).to.eql( expText );
    });
}
//      Validate portion of text in the element
export function checkTextContains( selectorVal, expTxt ){
    cy.get( selectorVal ).invoke( 'text' ).then( (txtVal) => {
        expect( txtVal ).to.include( expTxt );
    });
}
//      Validate property of element
export function checkElmProperty( selectorVal, propName, propVal ){
    cy.get( selectorVal ).invoke( 'attr', propName ).should( 'equal', propVal );
}
//      Type value in an element
export function typeValue( selectorVal, inputVal ){
    cy.get( selectorVal ).click().type( inputVal ).should('have.value', inputVal );
}
//      Type value and click on Enter 
export function typeAndEnterVal( selectorVal, inputVal ){
    cy.get( selectorVal ).click().type( inputVal +'{enter}');
}
//      Perform click on an element
export function clickElm( selectorVal ){
    cy.get( selectorVal ).click();
}
//      Perform click with display test on an element
export function clickElmByTxt( txt , updatedUrl="" ){
    cy.contains( txt ).click();
    if( updatedUrl != ""){
        cy.url().should( "contain", updatedUrl );
    }
}
//      Perform force click on an element
export function forceClick( selectorVal ){
    cy.get( selectorVal ).click( {force:true} );
}
//      Verify that the element checked
export function validate_check( selectorVal ){
    cy.get( selectorVal ).check({force:true}).should('be.checked');
}
//      Select an item from select object
export function makeSelection( selectorVal, optName){
    cy.get( selectorVal, {timeout:5000} ).select( optName );
}
//      Validate element selected
export function checkSelected( selectorVal ){
    cy.get( selectorVal ).should('be.selected');
}
//      Validate that specified value is unseleced
export function checkUnselected( selectorVal ){
    cy.get( selectorVal ).should('not.be.selected' );
}
//      Validate current selected value 
export function checkElmVal( selectorVal , expVal ){
    cy.get( selectorVal ).invoke( 'val' ).should( 'eq', expVal );
}
//      Change selection from slider
export function moveSlider( selectorVal, inputVal ){
    // cy.scrollTo( 'topLeft' );
    const valueSetter = Object.getOwnPropertyDescriptor( window.HTMLInputElement.prototype, "value").set;

    cy.get( selectorVal ).invoke( 'show',).then(
        ( $slider )=>{
            valueSetter.call( $slider[0], inputVal)
        }).trigger('change').click()
        .scrollIntoView();
    
}