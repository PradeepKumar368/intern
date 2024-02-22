// Import necessary components and styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css'; // Update the path accordingly
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/SignUp/SignUp'; // Import SignUp component
import Login from './components/Login/Login'; // Import Login component
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/Navbar';
import TeacherSignup from './components/Teacher/signup_teacher';
import TeacherLogin from './components/Teacher/login_teacher';
import CoursePlayer from './components/CoursePlayer/CoursePlayer';
import ViewCourses from './components/Courses/ViewCourses';
import NewVideo from './components/Teacher/NewVideo';
import TeacherDashboard from './components/Teacher/Dashboard_teacher/Teacher_dashboard';
import CourseCreate from './components/Courses/CreateCourse';
import EditCourse from './components/Courses/EditCourse';
import CourseCategory from './components/Courses_Category/coursecategory';
import Coursedetailspage from './components/CourseDetailsPage/coursedetailspage';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<Login />} /> {/* Add Login route */}
          <Route path="/signup" element={<SignUp />} /> {/* Add SignUp route */}
          <Route path="/teachersignup" element={<TeacherSignup/>}/>
          <Route path="/teacherlogin" element={<TeacherLogin/>}/>
          <Route path="/courseplayer/:courseId" element={<CoursePlayer/>}/>
          <Route path="/ViewCourses" element={<ViewCourses/>} />
          <Route path="/newVideo" element={<NewVideo/>} />
          <Route path="/teacherdashboard" element={<TeacherDashboard/>} />
          <Route path="/coursecreate" element={<CourseCreate/>} />
          <Route path="/editcourse" element={<EditCourse/>} />
          <Route path="/category" element={<CourseCategory/>} />
          <Route path="/coursedetails" element={<Coursedetailspage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;