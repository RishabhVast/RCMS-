module.exports = function () {
    return async(context)=>{
        const testId = context.data.test;
        const testService = context.app.service('tests');
        const test = await testService.get(testId);
         context.data.test = test;


         return context;

    }
    
}