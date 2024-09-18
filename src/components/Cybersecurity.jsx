import React from 'react'
import courses from './data/courses';
import Coursecard from './Coursecard';

const Cybersecurity = () => {
  return (
    <div className="course-list">
      {courses
        .filter((course) => course.category === "cybersecurity")
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


export default Cybersecurity
