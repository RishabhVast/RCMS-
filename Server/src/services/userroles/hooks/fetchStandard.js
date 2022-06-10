module.exports = function () {
    return async(context)=>{
        const standardId = context.data.standard;
        const standardService = context.app.service('standards');
        const standard = await standardService.get(standardId);
         context.data.standard = standard;


         return context;

    }
    
}