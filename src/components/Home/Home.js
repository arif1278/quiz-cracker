import React, { useContext } from "react";
import { Link } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";
import { CartData } from "../Root/Root";




const Home = () => {
    const quiz = useContext(CartData)

    return (

        <div>


            <div className=" flex flex-col items-center  py-16 pb-24 text-center lg:pb-56 md:py-32 md:px-10 lg:px-2 text-gray-900">
                <h1 className="lg:text-7xl font-bold leading-none text-6xl xl:max-w-6xl text-gray-800">
                    Go out for  <span className=" text-orange-700 "> knowledge and service</span>
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                    More and more practice will bring better things.
                    So work should be done more than words. There is no alternative to work.
                </p>
                <div className="flex flex-wrap justify-center">
                    <Link to="/quiz">
                        <button
                            type="button"
                            className="px-8 py-3 m-2 text-lg font-semibold rounded-md text-gray-900 hover:bg-orange-400 text-white text-bold bg-orange-800"
                        >
                            Start Quiz
                        </button>
                    </Link>
                    <Link to="/about">
                        <button
                            type="button"
                            className="px-8 py-3 m-2 text-lg border rounded-md hover:bg-purple-400 bg-purple-600 text-gray-900"
                        >
                            Learn more
                        </button>
                    </Link>
                </div>
                <h2 className="text-2xl mt-4"> <span className=" text-3xl font-bold ">Used by 50 million+ people</span> around the world</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:ml-8 lg:mr-8 gap-6  '>
                    {
                        quiz.data.map(course => <QuizCard
                            course={course} key={course.id}
                        ></QuizCard>)
                    }
                </div>
            </div>

        </div>


    );
};

export default Home;