import React from 'react';
import { Link } from 'react-router-dom';
const Blog = () => {
    return (

        <div className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
            <div className="container">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                            <span className="font-semibold text-lg text-primary mb-2 block">
                                Our Blogs
                            </span>
                            <h2
                                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                            >
                                Our Recent Blog
                            </h2>
                            <p className="text-base text-body-color">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap ml-24 mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-4699.jpg?w=740&t=st=1665516210~exp=1665516810~hmac=85318f796231f540a55591f8e16725618e4dd8c84db2f4594c40ce071dbe52b6"
                                    alt="image"
                                    className="w-full"
                                />

                            </div>
                            <div>
                                <span
                                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                    
                     mb-5
                     "
                                >
                                    Dec 22, 2023
                                </span>
                                <h3>
                                    <Link
                                        to="/blog1"
                                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                                    >
                                        What is the purpose of react router?
                                    </Link>
                                </h3>
                                <p className="text-base text-body-color">
                                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=740&t=st=1665516888~exp=1665517488~hmac=f856df244607f8e5c907d3c313aa05739817c89f94d5adfe5298132669ce61b0"
                                    alt="image"
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <span
                                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                    
                     mb-5
                     "
                                >
                                    Mar 15, 2023
                                </span>
                                <h3>
                                    <Link
                                        to="/blog2"
                                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                                    >
                                        How dose context api work?
                                    </Link>
                                </h3>
                                <p className="text-base text-body-color">

                                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=740&t=st=1665516912~exp=1665517512~hmac=26203cdace1c4ab509ac56241453491263fce7c53e79f6f99e9742eed95864dc"
                                    alt="image"
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <span
                                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                   
                     mb-5
                     "
                                >
                                    Jan 05, 2023
                                </span>
                                <h3>
                                    <Link
                                        to="/blog3"
                                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                                    >
                                        How does useRef hook work?
                                    </Link>
                                </h3>
                                <p className="text-base text-body-color">
                                    How does useRef hook work? The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Blog;