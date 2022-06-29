import create from 'zustand';
import axios from  "../http.common"


const useStore = create((set) => ({
  users : [],
  


  // login function  created for post in login
  login: async (data) => {
    try {
      const response = await axios.post('/authentication', {...data , strategy: 'local'});
      sessionStorage.setItem("token" , response.data.accessToken);
      console.log(response);
      set((state)=>({users : (state.users = response.data.user)}))
     
    }

 catch (err) {
    console.log(err);
  }

  }
  
}));

export default useStore;

  
