module.exports = function () {
    return async(context)=>{
        const gradeId = context.data.grade;
        const gradeService = context.app.service('grades');
        const grade = await gradeService.get(gradeId);
         context.data.test = grade;


         return context;

    }
    
}