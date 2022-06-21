module.exports = function () {
    return async(context)=>{
        if (Array.isArray(context.data)){
            for(const studentRecords of context.data) {
                const studentId = studentRecords.student;
                const studentService = context.app.service('students');
                const student = await studentService.get(studentId);
                studentRecords.student = student;
            }
        }
        else {
            const studentId = context.data.student;
            const studentService = context.app.service('students');
            const student = await studentService.get(studentId);
            context.data.student = student;
        }
         return context;
    }
    
}