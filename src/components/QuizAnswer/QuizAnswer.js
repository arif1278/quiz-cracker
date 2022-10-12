import React, { useState } from "react";
import Swal from 'sweetalert2'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
const QuizAnswer = ({ questions }) => {

    const { correctAnswer, question, options } = questions;

    const [answer, setAnswer] = useState(false);
    const handleanswer = (props) => {

        if (correctAnswer === props) {
            Swal.fire({
                icon: 'success',
                title: 'Greate...',
                text: 'Correct answer!',

            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong answer!',

            })
        }

    };

    return (
        <div className=" m-6  bg-slate-50  lg:p-16">
            <h5 className="mb-2 text-4xl font-bold  mb-16 tracking-tight  dark:text-white">
                {question}
            </h5>
            <div className="  bg-slate-50">
                {options.map((optionquestions) => (
                    <div className="flex justify-center " >
                        <button
                            onClick={() => handleanswer(optionquestions)}
                            className="ml-2 flex  justify-center hover:bg-sky-500 bg-blue-400 w-2/4 rounded-md  p-8 mb-4 text-3xl text-sm font-medium text-black dark:text-gray-300"
                        >{optionquestions} </button>
                    </div>
                ))}

            </div>


            <div className="flex justify-center  " onClick={() => setAnswer(!answer)}> <h1 className="text-center text-2xl mr-6 font-bold ">Show correct answer</h1>

                {
                    answer ? <EyeSlashIcon className=" w-8  icon" /> : <EyeIcon className=" w-8 icon" />
                }

            </div>
            <h2 className={`ml-2 mt-5 text-3xl font-medium text-gray-900 ${answer ? answer : 'hidden'} dark:text-gray-300`}>
                Correct answer: {correctAnswer}
            </h2>
        </div>
    );
};

export default QuizAnswer;
