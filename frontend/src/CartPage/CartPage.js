import CartItem from './CartItem'
import './cartPage.css'

const CartPage = ()=>{
    return (
        <div className='cartPage'>
            <h2 className='text-center'>My Cart</h2>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
}

export default CartPage