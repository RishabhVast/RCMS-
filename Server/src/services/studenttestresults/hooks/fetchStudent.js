module.exports = function () {
    return async(context)=>{
        const studentId = context.data.student;
        const studentService = context.app.service('students');
        const student = await studentService.get(studentId);
         context.data.student = student;


         return context;

    }
    
}