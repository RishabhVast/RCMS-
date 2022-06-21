const { hooks } = require("@feathersjs/authentication/lib");


module.exports = function () {
    return async(context)=>{
        if (Array.isArray(context.data)){
            for(const student of context.data) {
                const gradeId = student.grade;
                const gradeService = context.app.service('grades');
                const grade = await gradeService.get(gradeId);
                student.grade = grade;
            }
        }
        else {
            const gradeId = context.data.grade;
            const gradeService = context.app.service('grades');
            const grade = await gradeService.get(gradeId);
            context.data.grade = grade;
        }
         return context;
    }
    
}