import React from 'react'
import courses from './data/courses';
import Coursecard from './Coursecard';

const Career = () => {
  return (
    <div className="course-list">
      {courses
        .filter((course) => course.category === "career")
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

export default Career
