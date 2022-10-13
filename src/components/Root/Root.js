

import { Outlet, useLoaderData } from 'react-router-dom'
import { createContext } from 'react'
import Header from '../../Header/Header'



export const CartData = createContext([])

const Root = () => {
    const card = useLoaderData()

    return (

        <div className="bg-gray-100">
            <CartData.Provider value={card}>
                <Header></Header>
                <Outlet></Outlet>
            </CartData.Provider>
        </div>
    )
}

export default Root