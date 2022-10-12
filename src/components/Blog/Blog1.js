import React from 'react';

const Blog1 = () => {
    return (
        <div>

            <div class="bg-gray-100 dark:bg-gray-900  py-14">

                <span >
                    <h1 tabindex="0" class="focus:outline-none text-center text-3xl lg:text-5xl tracking-wider text-gray-900 dark:text-white">Latest from our Blog</h1>
                </span>
                <div aria-label="Group of cards" class="focus:outline-none mt-12 lg:mt-24">
                    <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 xl:grid-cols-1 gap-8">

                        <div class="bg-white dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                            <h1 tabindex="0" class="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider"> What is the purpose of react router?</h1>
                            <p tabindex="0" class="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.What are the main features of React Router?
                                At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different s as it changes, and it also gives you tools to update the location using  s and the history API.Is React Router mandatory?
                                Image result for what is the purpose of react router
                                Is React Router necessary? React router can be an overkill for certain projects where all you need is basic navigation and routing functionalities. In that context, React Router is not necessary at all.</p>



                        </div>
                    </div>


                </div>

            </div>
        </div>





    );
};

export default Blog1;