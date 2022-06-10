import create from 'zustand';
import axios from  "../http.common";


const useStore = create((set)=>({


    subjects : [],



    retrieveSubjects : async () =>{
        const response = await axios.get("/subjects");
        const { data }= response.data;
        set((state)=> ({ subjects : (state = data)}))
    },


    addSubject :  async (data)=>{
        const  response = await axios.post("/subjects", data);
        console.log(`in the add `, response); 
        return response;
    },


    updateSubject : async (data) =>{
        const response = await axios.put(`/subjects/${data._id}` , data);
        console.log(` in the update` , response);
        return response;
    },


   deleteSubject : async (_id) =>{
       const response = await axios.delete(`/subjects/${_id}`);
       console.log(`in the delete`, response);
       return response;
   }

}));

export default useStore;