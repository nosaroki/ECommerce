import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateItemFromSelect, removeFromCart } from '../features/cart'


export default function Cart({onClose}) {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

  return (
    <div
    onClick={onClose} 
    className='z-10 fixed inset-0 bg-orange-100/75 flex justify-center items-center'>
        <div onClick={(e) => e.stopPropagation()}
        className='relative z-20 bg-orange-200 text-orange-800 min-w-[400px] md:min-w-[700px] px-10 pt-10 pb-6 rounded border border-orange-700 mb-[10vh]'>
            <button 
            onClick={onClose} 
            className='absolute top-2 right-2 w-7 h-7 bg-red-600 text-orange-100 rounded flex justify-center'>x</button>
            <ul>
                {cart.cartItems.length > 0 ? cart.cartItems.map(element => (
                    <li key={element.id}
                    className='flex items-center mb-4'>
                        <img 
                        className='w-16 h-16 rounded'
                        src={`/images/${element.img}.png`} alt={element.title} />
                        <p className='mr-auto ml-2 text-lg font-semibold'>{element.title}</p>
                        <select name="quantity"
                        onChange={e => dispatch(updateItemFromSelect({value: e.target.value, id: element.id}))}
                        className='w-20 p-2 rounded mr-4'
                        value={element.quantity}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <button  onClick={e => dispatch(removeFromCart(element.id))}

                        className='bg-orange-400 px2 inline-flex items-center justify-center rounded p-2'>Remove from cart</button>
                    </li>
                ))
            :
            <li className='text-orange-800 mb-4'>Add items to your cart</li>           
            }
            </ul>
            <p className='text-xl '>Your total : <span className='font-semibold'>{cart.cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)}$</span></p>
            <button  className='block mx-auto bg-orange-400 text-orange-800 rounded px-4 py-2 mt-7'>Proceed to checkout</button>
        </div>
    </div>
  )
}
