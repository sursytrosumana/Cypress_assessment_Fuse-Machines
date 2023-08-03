import * as obj from "../support/obj_actions.js";

export class InputForm{
    nameEdit = "#name";
    mailEdit = "#inputEmail4";
    pwdEdit = "#inputPassword4";
    companyEdit = "#company";
    webSiteEdit = "input[name='website']";
    // countrySelect = "#seleniumform > div:nth-child(3) > div.form-group.w-6\/12.smtablet\:w-full.pr-20.smtablet\:pr-0 > select";
    countrySelect = "select[name='country']";
    cityEdit = "#inputCity";
    address1Edit = "#inputAddress1";
    address2Edit = "#inputAddress2";
    stateEdit = "#inputState";
    zipCodeEdit = "#inputZip";
    submitBtn = "#seleniumform > div.text-right.mt-20 > button";
    submitBtn = ".bg-lambda-900";
    successMsgElm = ".success-msg";

    // submitBtn = "button[type='submit']";
    
    // *[@id="seleniumform"]/div[6]/button"
    fillForm(){
        cy.fixture("form_data").then( (data) => {
            obj.typeValue( this.nameEdit, data.name );
            obj.typeValue( this.mailEdit, data.mailId );
            obj.typeValue( this.pwdEdit, data.password );
            obj.typeValue( this.companyEdit, data.company );
            obj.typeValue( this.webSiteEdit, data.website );
            obj.makeSelection( this.countrySelect, data.country);
            obj.typeValue( this.cityEdit, data.city );
            obj.typeValue( this.address1Edit, data.address1 );
            obj.typeValue( this.address2Edit, data.address2 );
            obj.typeValue( this.stateEdit, data.state );
            obj.typeValue( this.zipCodeEdit, data.zipCode );
        });
    }
    submitForm(){
        obj.clickElm( this.submitBtn );
    }    
    validateSuccessMsg(){
        cy.fixture( "form_data").then( (data) => {
            obj.checkText( this.successMsgElm, data.successMsg)
        });
        
    }
    
}