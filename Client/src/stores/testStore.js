import create from "zustand";
import axios from '../http.common'



const testStore = create((set)=>({
  
     tests : [],
    tresults : [],
    test :  {},


    retrieveTestData : async (filter)=>{
        console.log(filter);
        const response =  await axios.get("tests" ,{
        
       
            params : {
                
                'standard._id': filter.standard,
                'division._id': filter.division,

            },   
        });
       
        const { data } = response.data
        set((state)=> ({ tresults : (state = data )}))
    },


     retrieveTest : async ()=>{
        const response = await  axios.get('tests')
        const { data } = response.data
     
        set((state)=> ({ tests : (state = data)}))

     },

    

      
    getTest : async (_id)=>{
        const response = await axios.get(`tests/${_id}`);
        console.log(response);
        const {  data }  = response
        set((state)=> ({ test :(state = data)}))

    },


    
    addTest : async (data)=>{
        const response = await axios.post('tests', data);
       
        return response
    },

    updateTest :  async (data)=>{
        const response = await axios.put(`tests/${data._id}`,data);
        console.log(`in the update`, response);
        return response;

    },


    deleteTest : async (_id)=>{
        const response = await axios.delete(`tests/${_id}`);
        console.log(`in the delete`, response)
        return response;

    }


}));

export default testStore;

