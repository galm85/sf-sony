'use strict'

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');


module.exports.render = (context)=>{
    
    let model = new HashMap();
    let content = context.content;
    
    model.regions = PageRenderHelper.getRegionModelRegistry(context.component);
    model.form_name = content.form_name;
    model.form_action = content.form_action;
    model.form_button = content.form_button_label;
    

    

    return new Template('experience/components/custom_components/customForm').render(model).text;




}