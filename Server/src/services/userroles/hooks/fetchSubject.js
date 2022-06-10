module.exports = function () {
    return async(context)=>{
        const subjectId = context.data.subject;
        const subjectService = context.app.service('subjects');
        const subject = await subjectService.get(subjectId);
         context.data.subject = subject;


         return context;

    }
    
}