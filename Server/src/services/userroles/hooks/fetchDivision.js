module.exports = function () {
    return async(context)=>{
        const divisionId = context.data.division;
        const divisionService = context.app.service('divisions');
        const division = await divisionService.get(divisionId);
         context.data.division = division;


         return context;

    }
    
}