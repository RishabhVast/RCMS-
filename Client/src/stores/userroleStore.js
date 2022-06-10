import create from 'zustand';
import axios from  "../http.common";


const useStore = create((set)=>({


     userroles : [],


     retrieveUserRole : async ()=>{
         const response = await axios.get('userroles');
         const { data }  = response.data
       
         set((state)=> ({ userroles : (state = data)}))

     },


     addUser : async (data)=>{
         const response = await axios.post('/userroles', data);
         console.log(` in the addstore`, response);
         return response;

     },

     updateUserrole : async (data)=>{
         const response = await axios.put(`userroles/${data._id}`, data);
         console.log(` in the response `, response);
         return response;

     },


     deleteUserrole : async (_id)=>{
         const response = await axios.delete(`userroles/${_id}`);
         console.log(` in the response`, response);
         return response;
     }
}));

export default useStore;
