import React from 'react';
import './CourseList.css';
const CourseList = ({course}) => {
    console.log(course)
    return (
        <div>
           
            {
                <p>{course.id}</p>
            }
        </div>
    );
};

export default CourseList;