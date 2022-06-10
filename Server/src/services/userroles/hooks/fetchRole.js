module.exports = function () {
    return async(context)=>{
        const roleId = context.data.role;
        const roleService = context.app.service('roles');
        const role = await roleService.get(roleId);
         context.data.role = role;


         return context;

    }
    
}