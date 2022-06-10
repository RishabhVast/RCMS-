import create from 'zustand';
import axios from  "../http.common";



const useStore =  create((set)=> ({


    roles : [],


    retrieveRoles : async ()=>{
        const response =  await axios.get('/roles');
        const { data }= response.data;
        set((state)=> ({ roles : (state = data)}))
    },


    addRole : async (data)=>{
        const response = await axios.post('/roles' , data);
        console.log(`in the add `, response); 
        return response;
    },


    updateRole : async(data)=>{
        const response = axios.put(`/roles/${data._id}`, data);
        console.log(` in the update` , response);
        return response;
    },


    deleteRole : async(_id)=>{
        const response = axios.delete(`/roles/${_id}`);
        console.log(`in the delete`, response);
        return response;
    }
}));

export default useStore;