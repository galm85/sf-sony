'use strict'


const server = require('server');
const psplusSubForm = server.forms.getForm('psplusRegister');
var CustomObjectMgr = require('dw/object/CustomObjectMgr');
var Transaction = require('dw/system/Transaction');

server.get('Show',(req,res,next)=>{
    psplusSubForm.clear();
    res.render('/forms/psplusSub',{psplusSubForm:psplusSubForm});

    next();
});


server.post('HandleSub',(req,res,next)=>{

    let customObject = CustomObjectMgr.createCustomObject('psplus-subsciption',psplusSubForm.email.value);
    customObject.custom.firstName = psplusSubForm.firstName.value;
    customObject.custom.lastName = psplusSubForm.lastName.value;

    Transaction.begin();
    try{
        Transaction.commit();
        res.setViewData({submessage:'subscribe'})

    }catch(e){
        Transaction.rollback();
        res.setViewData({submessage:'no sub'})
    }

    // res.render('/forms/psplusSub',{psplusSubForm:psplusSubForm});
    next();
})



module.exports = server.exports();