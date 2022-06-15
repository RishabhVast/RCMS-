
import create from 'zustand';
import axios from '../http.common';



const useStore = create((set)=>({


    students : [],



    retrieveStudents : async ()=>{
        const response = await axios.get('students');   
        const {data} = response.data
        set((state)=> ({students : (state = data)}))
        return response;

    },


    addStudents : async (data)=>{
        const response = await axios.post('students', data);
        console.log(` in the add`, response);
        return response;

    },


    updateStudents :  async(data)=>{
        const response = await axios.put(`/students/${data._id}`, data);
        console.log(` in the update `, response);
        return response;
    },


    deleteStudents : async(_id)=>{
        const response = await axios.delete(`/students/${_id}`);
        console.log(`in the delete`, response);
        return response;
    }

}));

export default useStore;
