import create from 'zustand';
import axios from '../http.common'


const resultStore =  create((set)=>({

    


    //for generate report
    report : [],
    //for all result according to test id in the result

    results : [],


    //for the result according to criteria in report 

    fresults : [],

    retrieveResult : async (filter)=>{
        console.log(`in the resultt` ,filter);
        const response = await axios.get(`studenttestresults/`,{  
        params : {
            
            'test._id': filter.test
        },   
    });

        const { data }  = response.data 
        set((state) => ({ results : (state = data )}))
    },



    //needed for the report select filters
    retrievefilterResult : async (filter)=>{
       
        const response = await axios.get(`studenttestresults/`,{  
        params : {
            'division._id': filter.division,
            'standard._id': filter.standard,
            'student._id': filter.student
             
        }, 
    }   );
   
        const { data }  = response.data 
        set((state) => ({ fresults : (state = data )}))
    },



    //for the generate report click
    retrieveReport : async (filter)=>{
        console.log(filter.student , filter.test);
      const response = await axios.get(`studenttestresults`,  {
        
        params : {
       'student._id' : filter.student,
       'test.name' : filter.test
    },
 }
  )

     const { data } = response.data
     set((state)=> ({report : (state = data)}))
    },


   
    
  
  


    updateResult : async (data)=>{
        const response = await axios.put(`/studenttestresults/${data._id}`, data);
        console.log(`in the update`, response); 
         return response 
    },

    deleteResult :  async (_id)=>{
        const response = await axios.delete(`/studenttestresults/${_id}`);
        console.log(`in the delete`, response);
        return response
    }
   
}));

 
export default resultStore;
