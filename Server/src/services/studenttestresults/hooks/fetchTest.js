module.exports = function () {
    return async(context)=>{
        if (Array.isArray(context.data)){
            for(const studentRecords of context.data) {
                const testId = studentRecords.test;
                const testService = context.app.service('tests');
                const test = await testService.get(testId);
                studentRecords.test = test;
            }
        }
        else {
            const testId = context.data.test;
            const testService = context.app.service('tests');
            const test = await testService.get(testId);
            context.data.test = test;
        }
         return context;
    }
}