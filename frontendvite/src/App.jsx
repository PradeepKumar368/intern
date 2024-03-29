// Import necessary components and styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css'; // Update the path accordingly
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/LandingPage/SignUp/SignUp'; // Import SignUp component
import Login from './components/LandingPage/Login/Login'; // Import Login component
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherSignup from './components/Teacher/signup_teacher';
import TeacherLogin from './components/Teacher/login_teacher';
import CoursePlayer from './components/Courses/CoursePlayer/CoursePlayer';
import ViewCourses from './components/Courses/ViewCourses';
import NewVideo from './components/Teacher/NewVideo';
import TeacherDashboard from './components/Teacher/Dashboard_teacher/Teacher_dashboard';
import CourseCreate from './components/Courses/CreateCourse';
import EditCourse from './components/Courses/EditCourse';
import EditLecture from './components/Courses/EditLectures';
import CourseCategory from './components/Courses/Courses_Category/coursecategory';
import Coursedetailspage from './components/CourseDetailsPage/coursedetailspage';
import Foter from './components/LandingPage/Footer/footer';
import Cart from './components/Cart/cart';
import TeacherProfileSettingsPage from './components/Teacher/Dashboard_teacher/TeacherProfileSettingsPage';

const App = () => {
  return (
    <Router>
      <div>
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
          <Route path="/lecture" element={<EditLecture/>} />
          <Route path="/category" element={<CourseCategory/>} />
          <Route path="/coursedetails/:courseId" element={<Coursedetailspage/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/teacherprofile&settings/:teacher_id" element={<TeacherProfileSettingsPage/>}/>
        </Routes>
        <Foter/>
      </div>
    </Router>
  );
};

export default App;