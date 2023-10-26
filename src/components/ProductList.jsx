import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsList } from '../features/products'
import { addOneToCart } from '../features/cart'

export default function ProductList() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    if(!products.items) {
        dispatch(getProductsList())
    }

    console.log(products)
  return (
    <div className='px-6'>
        <h1 className='text-orange-200 text-2xl mb-6'>Discover our products</h1>
        <ul className='grid min-[500px]:grid-cols-2 md:grid-cols-3 gap-4'>
            {products.items && products.items.map(element => (
                <li key={element.id} className='p-4 bg-orange-300 rounded'>
                    <img src={`/images/${element.img}.png`} className="mb-4" alt={element.title}/>
                    <div className='flex justify-between items-center mb-6'>
                        <p className='text-orange-700 text-lg'>{element.title}</p>
                        <p className='text-orange-900 font-bold'>{element.price}</p>
                    </div>
                    <button 
                    onClick={() => dispatch(addOneToCart(element.id))}
                    className={`${element.picked ? "bg-green-700" : "bg-orange-600"} w-full rounded text-orange-100 p-2 inline-flex items-center justify-center px-2`}>
                        {element.picked ? "Item picked ✓" : "Add to cart"}
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}
