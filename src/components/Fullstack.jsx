import Coursecard from "./Coursecard";
import courses from "./data/courses";


const FullStack = () => {
  return (
    <div className="course-list">
      {courses
        .filter((course) => course.category === "fullstack")
        .map((course) => (
          <Coursecard
            key={course.id} 
            title={course.title} 
            description={course.description} 
          />
      ))}
    </div>
  );
};

export default FullStack;