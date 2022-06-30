  
import create from 'zustand';
import axios from '../http.common';



const useStore = create((set)=>({


     students : [],
     fstudents : [],


    retrieveStudents : async ()=>{
        const response = await axios.get('students', { headers: { "Authorization": sessionStorage.getItem("token") }});   
        const {data} = response.data
        set((state) => ({students : (state = data)}))
        return response;

    },

 
     // for getting filtered students in resultform
    filterStudent : async (filter)=>{
        console.log(`in the store`,( filter.standard));
        console.log(`in the store`,( filter.division));
   
        const response = await axios.get(`students/`,{  
        headers: { "Authorization": sessionStorage.getItem("token") },
        params : {
            
            'standard._id': filter.standard,
            'division._id': filter.division

           
        }
    },   
   );

        const { data }  = response.data 
        set((state)=> ({ fstudents : (state = data )}))
    },



    addStudents : async (data)=>{
        const response = await axios.post('students', data , { headers: { "Authorization": sessionStorage.getItem("token") }});
        console.log(` in the add`, response);
        return response;

    },


    updateStudents :  async(data)=>{
        const response = await axios.put(`/students/${data._id}`, data , { headers: { "Authorization": sessionStorage.getItem("token") }});
        console.log(` in the update `, response);
        return response;
    },


    deleteStudents : async(_id)=>{
        const response = await axios.delete(`/students/${_id}`, { headers: { "Authorization": sessionStorage.getItem("token") }});
        console.log(`in the delete`, response);
        return response;
    }

}));

export default useStore;
