import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login"

import  Role    from "./component/pages/Roles";
import  RoleForm from './component/forms/RoleForm'
import  Register  from "./component/forms/Register";
import  Students  from "./component/pages/Students";
import  Login     from "./component/pages/Login";
import  Home      from "./component/pages/Home";
import  Users     from "./component/pages/Users";
import  StandardForm from "./component/forms/StandardForm";
import  DivisionForm from "./component/forms/DivisionForm";
import  Subjects     from "./component/pages/Subjects";
import  Standards    from "./component/pages/Standards";
import  Divisions    from "./component/pages/Divisions";
import  Grades       from "./component/pages/Grades"
import  SubjectForm    from "./component/forms/SubjectForm"
import UserRole from "./component/pages/UserRole";
import UserroleForm from "./component/forms/UserroleForm";

function App() {
  return (
    <div className="App">
  
  {console.log(` in the app component`)}
      <Routes>
      <Route> 
          <Route path="/" element={<Login />} />
         
       
          <Route path="/home" element={<Home />} >
          <Route path="users" element={<Users />} />
         {/* subjects */}
          <Route path="subjects" element={<Subjects />} />
          <Route path="subject/form" element={<SubjectForm />} />
          <Route path="subject/form/:subjectId" element={<SubjectForm/>} />
          {/* standards */}
          <Route path="standards" element={<Standards />} />
          <Route path="standard/form" element={<StandardForm/>} />
          <Route path="standards/form/:standardId" element={<StandardForm/>} />
          {/* role */}
          <Route path="role" element={<Role />} />
          <Route path="role/form" element={<RoleForm />} />
          <Route path="role/form/:roleId" element={<RoleForm/>} />
          <Route path="students" element={<Students />} />
          {/* division */}
          <Route path="divisions" element={<Divisions />} />
          <Route path="division/dform" element={<DivisionForm/>} />
          <Route path="division/dform" element={<DivisionForm/>} />
          <Route path="division/dform/:divisionId" element={<DivisionForm/>} />
          {/* grades */}
          <Route path="grades" element={<Grades />} />
          {/* userroles */}
          <Route path="userrole" element={<UserRole />} />
          <Route path="userroleform" element={<UserroleForm/>} />
          <Route path="userroleform/:userroleId" element={<UserroleForm/>} />
          {/* register */}
          <Route path="register" element={<Register />} />
          
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <h1>There's nothing here!</h1></main>
            }
          />
           </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
