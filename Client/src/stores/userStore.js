import create from 'zustand';
import axios from  "../http.common";;



const useStore = create((set) => ({


  users : [],
  

 retrieveUser :  async ()=>{

   const response =  await axios.get('users');
   const { data } = response.data
   set((state)=> ({ users : (state = data)}))
 },

 addUser : async (data)=>{
  const response = await axios.post('users', data);
  console.log(` in the add`, response);
  return response;
 }

 
}));

export default useStore;

  
