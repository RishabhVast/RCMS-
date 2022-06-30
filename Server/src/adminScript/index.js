
const adminData = require('./users')();

function ifEmptyCreate(name, data){
    return async() => {
        try {
            let users = await this.service(name).find({ query: {isAdmin: true} });
        
            if(users.total === 0) {
                try{
                    let createdRecord = await this.service(name).create(data);
                    console.log(createdRecord.adminData);
                }
                catch(e) {
                    console.log(e);
                }   
                
            } else {
                console.log(`Admin Exist`);
            }
    
        } 
        catch(e) { 
            console.log(e);
        } 
    }
}

module.exports = function() {
    const app = this;
    ifEmptyCreate = ifEmptyCreate.bind(this);

    try{
        app.configure(ifEmptyCreate('users', adminData));
    }
    catch(e) {
        console.log(`in the app`,e);
    }
    
}