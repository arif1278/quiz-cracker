import React from 'react';

const Blog2 = () => {
    return (
        <div>

            <div class="bg-gray-100 dark:bg-gray-900  py-14">

                <span >
                    <h1 tabindex="0" class="focus:outline-none text-center text-3xl lg:text-5xl tracking-wider text-gray-900 dark:text-white">Latest from our Blog</h1>
                </span>
                <div aria-label="Group of cards" class="focus:outline-none mt-12 lg:mt-24">
                    <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 xl:grid-cols-1 gap-8">

                        <div class="bg-white dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                            <h1 tabindex="0" class="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider">  How dose context api work?</h1>
                            <p tabindex="0" class="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Why is the context API useful?
                                Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.What are some applications of using context API?
                                Context API is introduced in React 16.3. The Context API is used to share the data with multiple components, without having to pass data through props manually. The React Context API allows us to produce the global data and share it across the application.</p>



                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Blog2;