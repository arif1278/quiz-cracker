import { createBrowserRouter } from 'react-router-dom'
import Blog from '../components/Blog/Blog'
import ErrorPage from '../components/Home/ErrorPage/ErrorPage'
import Home from '../components/Home/Home'
import QuizQuestions from '../components/QuizQuestions/QuizQuestions'
import Root from '../components/Root/Root'
import Statistics from '../components/Statistics/Statistics'
import { cartData, dynamicCartData } from '../components/Loader/Loader'
import Blog1 from '../components/Blog/Blog1'
import Blog2 from '../components/Blog/Blog2'
import Blog3 from '../components/Blog/Blog3'
import Quiz from '../Quiz/Quiz'




const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        loader: cartData,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/quiz',
                loader: cartData,
                // ()=>{
                //   return fetch("https://openapi.programming-hero.com/api/quiz")
                //  } 
                element: <Quiz></Quiz>
            },
            {
                path: '/quiz:quizId',
                loader: dynamicCartData,
                //  async({params})=>{
                //     return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
                //  },
                element: <QuizQuestions></QuizQuestions>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/blog1',
                element: <Blog1></Blog1>
            },
            {
                path: '/blog2',
                element: <Blog2></Blog2>
            },
            {
                path: '/blog3',
                element: <Blog3></Blog3>
            },

        ],
    },
])

export default router