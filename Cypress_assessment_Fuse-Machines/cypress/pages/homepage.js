import * as obj from "../support/obj_actions.js";

export class HomePage{
    navigate(){
        
        cy.visit("/");
        
    }
    selectObjByTxt( objTxt, url ){
        obj.clickElmByTxt( objTxt, url );
        
    }
}