import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseItem from './CourseItem/CourseItem';




const Home = () => {
    const courseItem = useLoaderData().data;
    console.log(courseItem);


    return (
        <div>
            <h3>This is Home:{courseItem.length}</h3>
            {
                courseItem.map(course => <CourseItem
                    key={course.id}
                    course={course}
                >

                </CourseItem>)
            }
        </div>
    );
};

export default Home;