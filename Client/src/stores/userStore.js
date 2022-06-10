import create from 'zustand';
import axios from  "../http.common"


const useStore = create((set) => ({


  users : [],
  

 retrieveUser :  async ()=>{

   const response =  await axios.get('users');
   const { data } = response.data
   set((state)=> ({ users : (state = data)}))
 }


 
}));

export default useStore;

  
