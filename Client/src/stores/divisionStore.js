import create from 'zustand';
import axios from  "../http.common";


const useStore = create((set)=>({

divisions : [],



retrieveDivisions : async ()=>{
    try {

    const response =  await axios.get("/divisions");
     const { data } = response.data
    set((state)=> ({ divisions  : (state =  data)}));
   
    } catch (error) {
        console.log(error);
    }

},


addDivision : async (data)=>{
    try {
        
        const response = await axios.post("/divisions" , data);
        console.log(` in the addDivision`, response);

        return response;

    } catch (error) {
    console.log(error);
    }
},


updateDivision : async (data)=>{
    try {
        
        const response = await axios.put(`/divisions/${data._id}` ,data );
        console.log(`in the update`, response);
        return response;
    } catch (error) {

        console.log(error);
        
    }
},


deleteDivision : async(_id)=>{
    try {
        const  response = await  axios.delete(`/divisions/${_id}`);
        console.log(` in the delete`, response);
        return response;
        
    } catch (error) {
        console.log(error);
    }
}
  

}));

export default  useStore;