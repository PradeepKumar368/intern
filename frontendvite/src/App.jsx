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
import CourseForm from './components/Teacher/newcourse';
import MyCourses from './components/MyCourses/mycourses';


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
          <Route path="/coursecreate" element={<CourseForm />} />
          <Route path="/mycourses" element={MyCourses} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;