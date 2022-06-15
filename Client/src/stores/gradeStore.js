import axios from  "../http.common"
import  create from 'zustand';


const gradeStore = create((set)=>({

grades : [],


retriveGrades : async ()=>{
    const response =  await axios.get('grades');
    console.log(` in the retrieve`, response);
    const { data } = response.data
    set((state)=> ({grades : (state = data)}));

},


addGrade : async (data)=>{
    const response = await axios.post('grades', data);
    console.log(` in the add response`, response);
    return response;

},


updateGrade : async(data)=>{
    const response = await axios.put(`/grades/${data._id}` , data);
    console.log(` in the update`, response);
    return response;


    
},


deleteGrades : async (_id)=>{
    const response = await axios.delete(`/grades/${_id}`);
    console.log(`in the delete`, response);
}
}))

export default gradeStore;