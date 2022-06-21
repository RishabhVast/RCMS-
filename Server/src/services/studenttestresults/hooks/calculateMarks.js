module.exports = function () {
   const  calculateMarks = (hook) => {
        var max = Math.max(
            ...hook.data.map(obj => obj.obtainedMarks)
        );
        const totalMarks = hook.data.reduce((total, student) => {
          console.log(student.obtainedMarks);

          return total + Number(student.obtainedMarks);
        }, 0)
        console.log(`average marks`,totalMarks/hook.data.length);
        console.log(`max marks`,max);
        try {
            console.log(hook)
            hook.app.service('tests').patch(hook.data[0].test,{$set: {averageMarks: totalMarks/hook.data.length, highestMarks: max}})
           
        }
        catch(e) {
            console.log(e);
        }
        
      }
    return calculateMarks
}