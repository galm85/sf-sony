'use strict'

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');

const renderId = (name)=>{
    name = name.trim();
    name = name.toLowerCase().replace(/[^a-z\s]/g, "");
    return name.replace(/\s(?=\S)/g, "_").trim();
  
}

module.exports.render = (context)=>{

    let model = new HashMap();
    let content = context.content;

    model.input_type = content.input_type;
    model.input_label = content.input_label;
    model.input_id = renderId(content.input_label);
    model.input_name = renderId(content.input_label);
   

    return new Template('experience/components/custom_components/customInput').render(model).text;

}