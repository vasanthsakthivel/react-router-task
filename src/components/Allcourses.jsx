import Coursecard from "./Coursecard";
import courses from "./data/courses";



const Allcourses= () => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <Coursecard
          key={course.id} 
          title={course.title} 
          description={course.description} 
        />
      ))}
    </div>
  );
};

export default Allcourses
