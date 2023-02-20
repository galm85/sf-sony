'use strict'

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');


module.exports.render = (context)=>{

    let model = new HashMap();
    let content = context.content;

    //  model.image = ImageTransformation.getScaledImage(content.image.value);
    model.image = content.image.absURL
    model.title = content.title;
    model.alt = content.alt;


    return new Template('experience/components/custom_components/fullBanner').render(model).text;


}