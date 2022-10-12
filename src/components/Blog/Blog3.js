import React from 'react';

const Blog3 = () => {
    return (
        <div>

            <div class="bg-gray-100 dark:bg-gray-900  py-14">

                <span >
                    <h1 tabindex="0" class="focus:outline-none text-center text-3xl lg:text-5xl tracking-wider text-gray-900 dark:text-white">Latest from our Blog</h1>
                </span>
                <div aria-label="Group of cards" class="focus:outline-none mt-12 lg:mt-24">
                    <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 xl:grid-cols-1 gap-8">

                        <div class="bg-white dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                            <h1 tabindex="0" class="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider"> How does useRef hook work?
                            </h1>
                            <p tabindex="0" class="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">How does useRef hook work?
                                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.What is useRef in React hooks?
                                The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called .How does useRef store data?
                                Storing element references with useRef

                                To do this, create the ref, and then pass it into the element: const Component  With this reference, you can do lots of useful things like: Grabbing an element's height and width.</p>



                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Blog3;