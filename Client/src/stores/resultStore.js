import create from 'zustand';
import axios from '../http.common'


const resultStore =  create((set)=>({

    
    results : [],


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
