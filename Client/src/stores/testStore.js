import create from "zustand";
import axios from '../http.common'



const testStore = create((set)=>({

    tests : [],
    test :  {},


    retrieveTest : async ()=>{
        const response =  await axios.get("tests");
        console.log(`in the retrieve`, response);
        const { data } = response.data
        set((state)=> ({ tests : (state = data )}))
    },

      
    getTest : async (_id)=>{
        const response = await axios.get(`tests/${_id}`);
        console.log(response);
        const {  data }  = response
        set((state)=> ({ test :(state = data)}))

    },


    
    addTest : async (data)=>{
        const response = await axios.post('tests', data);
        console.log(`in the add`, response);
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

