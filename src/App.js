import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Coursess from "./pages/Courses";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Applayout from "./layouts/Applayout";
import Adminlayout from "./layouts/Adminlayout";
import AdminCourses from "./pages/AdminCourses";
import AdminUsers from "./pages/AdminUsers";
import "./styles"
function App() {
  return (
    <BrowserRouter>
      <Switch>
         {/* Route Admin */}

         <Route path="/admin">
            <Adminlayout>
              <Switch>
                <Redirect exact from="/admin" to="/admin/courses" />
                <Route path="/admin/courses">
                  <AdminCourses />
                </Route>
                <Route path="/admin/users">
                  <AdminUsers />
                </Route>
              </Switch>
            </Adminlayout>
          </Route>
          {/* Route Main */}
        <Route path="/">
         
          
          <Applayout >
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/courses/:category">
                <Coursess />
              </Route>
              <Route path="/course/:courseId">
                <Course />
              </Route>
            </Switch>
          </Applayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
