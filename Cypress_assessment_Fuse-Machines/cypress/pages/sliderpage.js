import * as obj from "../support/obj_actions.js";

export class SlidePage{

    checkSliderVal( val ){
        obj.checkElmVal( "#slider3 > div > input", val );
        obj.clickElm( "#slider3 > div > output#rangeSuccess" );
        obj.checkText( "#slider3 > div > output#rangeSuccess", val );
    }
    changeSliderVal( val ){
        obj.moveSlider( "#slider3 > div > input", val );

    }
}