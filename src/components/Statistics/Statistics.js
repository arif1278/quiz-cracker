import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const [course, SetCourse] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const chartcourse = data.data.data;
                const courseData = chartcourse.map(course => {

                    const courses = {
                        name: course.name,
                        quiz: course.total
                    }
                    return courses;
                }

                )
                SetCourse(courseData)
            })
    }, [])

    return (
        <div className='flex justify-center'>
            <LineChart width={370} height={300} data={course} margin={{ top: 2, right: 10, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="quiz" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;