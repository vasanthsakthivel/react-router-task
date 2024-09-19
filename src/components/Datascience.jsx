import Coursecard from "./Coursecard";
import courses from "./data/courses";


const Datascience = () => {
  return (
    <div className="course-list">
      {courses
        .filter((course) => course.category === "datascience")
        .map((course) => (
          <Coursecard
            key={course.id} 
            title={course.title} 
            image={course.image}
            description={course.description} 
          />
      ))}
    </div>
  );
};
export default Datascience
