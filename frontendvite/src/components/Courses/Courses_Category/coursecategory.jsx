import { Link } from 'react-router-dom';
import CourseCard from '../../Course_card/coursecard'; // Import the CourseCard component

const CourseCategory = () => {
  // Sample data for categories and courses
  const categories = ['Programming', 'Web Development', 'Data Science', 'Design', 'Marketing'];
  const featuredCourses = [
    { id: 1, title: 'Course 1', description: 'Description of Course 1', price: 49.99, mode: 'Online', category: 'Programming', image: 'https://via.placeholder.com/300' },
    // Add more featured courses as needed
  ];

  // Function to render course cards
  const renderCourseCards = (courses) => {
    return courses.map(course => (
      <CourseCard key={course.id} course={course} />
    ));
  };

  return (
    <section className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        {/* Course categories as tags */}
        <div className="flex flex-wrap mb-10">
          {categories.map(category => (
            <Link to={`/category/${category}`} key={category} className="mr-4 mb-4 bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">{category}</Link>
          ))}
        </div>
        
        {/* Featured courses */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Featured Courses</h2>
          <div className="flex flex-wrap -m-4">
            {renderCourseCards(featuredCourses)}
          </div>
        </div>
        
        {/* Most Popular Courses */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Most Popular</h2>
          <div className="flex flex-wrap -m-4">
            {renderCourseCards(featuredCourses)}
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">For You</h2>
          <div className="flex flex-wrap -m-4">
            {renderCourseCards(featuredCourses)}
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Offline</h2>
          <div className="flex flex-wrap -m-4">
            {renderCourseCards(featuredCourses)}
          </div>
        </div>
        {/* You can add similar sections for "Most Popular" and "For You" courses */}
      </div>
    </section>
  );
};

export default CourseCategory;
