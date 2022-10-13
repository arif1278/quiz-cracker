import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../components/QuizCard/QuizCard';



const Quiz = () => {
    const quiz = useLoaderData();

    return (
        <div className='grid lg:grid-cols-2 gap-4 md:grid-cols-2 lg:ml-5 lg:mr-16 lg:mt-16 '>
            {
                quiz.data.map(course => <QuizCard
                    course={course} key={course.id}
                >

                </QuizCard>)
            }
        </div>
    );
};

export default Quiz;