import create from 'zustand';
import axios from  "../http.common"


const useStore = create((set) => ({
  users : [],
  loading: false,
  hasErrors: false, 



  // login function  created for doing post in login
  login: async (data) => {
    try {
      const response = await axios.post('/authentication', {...data, strategy: 'local'});
      sessionStorage.setItem("token" , response.data.accessToken);
      set((state)=>({users : (state.users = response.data.user)}))
     
    }

 catch (err) {
    set(() => ({ hasErrors: true, loading: false }));
  }

  }
  
}));

export default useStore;

  
