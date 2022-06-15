import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login"

import  Role    from "./component/pages/Roles";
import  RoleForm from './component/forms/RoleForm'
import  Register  from "./component/forms/Register";
import  Students  from "./component/pages/Students";
import  Classtdash  from "./component/pages/Classtdash";
import  Login     from "./component/pages/Login";
import  Home      from "./component/pages/Home";
import  Users     from "./component/pages/Users";
import  StandardForm from "./component/forms/StandardForm";
import  DivisionForm from "./component/forms/DivisionForm";
import  Subjects     from "./component/pages/Subjects";
import  Standards    from "./component/pages/Standards";
import  Divisions    from "./component/pages/Divisions";
import  Grades       from "./component/pages/Grades"
import  GradeForm    from "./component/forms/GradeForm"
import  SubjectForm    from "./component/forms/SubjectForm"
import UserRole from "./component/pages/UserRole";
import UserroleForm from "./component/forms/UserroleForm";
import Classteacher from "./component/pages/Classteacher";
import Subteacher from "./component/pages/Subteacher";
import Subtdash from "./component/pages/Subtdash";
import Studentform from "./component/forms/Studentform";

function App() {
  return (
    <div className="App">
  
  {console.log(` in the app component`)}
      <Routes>
      <Route> 
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
         
         
       
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
          
          {/* division */}
          <Route path="divisions" element={<Divisions />} />
          <Route path="division/dform" element={<DivisionForm/>} />
          <Route path="division/dform" element={<DivisionForm/>} />
          <Route path="division/dform/:divisionId" element={<DivisionForm/>} />
          {/* grades */}
          <Route path="grades" element={<Grades />} />
          <Route path="gradeform" element={<GradeForm/>} />
          <Route path="gradeform/:gradeId" element={<GradeForm/>} />

          {/* userroles */}
          <Route path="userrole" element={<UserRole />} />
          <Route path="userroleform" element={<UserroleForm/>} />
          <Route path="userroleform/:userroleId" element={<UserroleForm/>} />
          {/* register */}
          </Route>

          <Route path="/classteacher"  element={<Classteacher />} >
          <Route path="dashboard" element={<Classtdash />} />
          <Route path="students" element={<Students />} />
          <Route path="studentsform" element={<Studentform />} />

       
          </Route>
         
           <Route path="/subteacher" element={<Subteacher />} >
            
           <Route path="subtdashboard" element={<Subtdash />} />
         


           </Route>
           <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <h1>There's nothing here!</h1></main>
            }
          />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
