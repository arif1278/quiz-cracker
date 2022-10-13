import React from 'react';
import { Link } from 'react-router-dom';
const Blog = () => {
    return (

        <div className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
            <div className="container">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">

                            <h2
                                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-orange-500
                  mb-4
                  "
                            >
                                Our Blogs
                            </h2>
                            <p className="text-base text-body-color">
                                Great Blog attract an audience. But Great content makes them stay!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap ml-24 mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://img.freepik.com/free-vector/react-native-mobile-app-abstract-concept-illustration-cross-platform-native-mobile-app-development-framework-javascript-library-user-interface-operating-system_335657-3350.jpg"
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
                                        How is the Stands of react router?
                                    </Link>
                                </h3>
                                <p className="text-base text-body-color">
                                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhP0WP7o5CjAT4rWOs04MzzKDLxTeI2A6dQ&usqp=CAU"
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
                                        Hows to work context api?
                                    </Link>
                                </h3>
                                <p className="text-base text-body-color">

                                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/03/og-Cordova-vs-React-Native.png"
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
                                    useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
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