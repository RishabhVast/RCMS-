module.exports = function () {
  const  calculateMarks = (hook) => {
       var max = Math.max(
           ...hook.data.map(obj => obj.obtainedMarks)
       );
       const totalMarks = hook.data.reduce((total, student) => {
         console.log(`in the hoook `,...hook.data);

         return total + Number(student.obtainedMarks);
       }, 0)
    
       try {
           console.log(hook)
           hook.app.service('tests').patch(hook.data[0].test,{$set: {averageMarks: totalMarks/hook.data.length, highestMarks: max}})
          // hook.app.service('studenttestresults').patch(hook.data[0].test,{$set: {averageMarks: totalMarks/hook.data.length, highestMarks: max}})
          
       }
       catch(e) {
           console.log(e);
       }
       
     }
   return calculateMarks
}