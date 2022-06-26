import create from 'zustand';
import axios from  "../http.common"


const standardStore = create((set) => ({

   standards :[],
   token  : {},




    
  retrieveStandards : async () => {
 
    const response = await axios.get("/standards"); 
    const {data} = response.data;
    set((state) => ({ standards: (state = data) }));
    return response
  
},


 addStandard : async (data)=>{
    
      const response = await axios.post("/standards" , data);
      console.log(`the added response`,response);
      return response
      
  
 },

 updateStandard : async (data)=>{
   try {
     const response = await axios.put(`/standards/${data._id}` ,data);
     console.log(` this is update`);
     console.log(` the update `, response);
      return response;
   } catch (error) {
     
   }
 },


 deleteStandard : async (_id)=>{
   try {
     const response = await axios.delete(`/standards/${_id}`);
     console.log(`this is delete `);
     console.log(` the delete response` , response);
     return response;


   } catch (error) {
     console.log(error);
     
   }
 }


}));

export default standardStore;

  
