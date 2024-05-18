import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";
const cartItems=[
  {
    productId:"asshjsavsa",
    photo:"https://rukminim2.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70&crop=false",
    name:"MacBook-air",
    price:3000,
    quantity:2,
    stock:10,
  }
];
const subtotal=4000;
const tax=Math.round(subtotal*0.18);
const shippingcharges=250;
const discount=400;
const total=subtotal+ tax+shippingcharges;
const Cart = () => {
  const [couponCode,setcouponCode]=useState<string>("");
  const [isValidCouponCode,setIsValidCouponCode]=useState<boolean>(false);

  useEffect(()=>{
    const timeOutID=setTimeout(()=>{
          if(Math.random()> 0.5)setIsValidCouponCode(true);
          else setIsValidCouponCode(false);
    },)

    return () => {
      clearTimeout(timeOutID);
      setIsValidCouponCode(false);
    }
  },[couponCode])

  
  return (
    <div className="cart">
      <main>
        { cartItems.length > 0 ? (
         cartItems.map((i,idx) =>  <CartItem key={idx} cartItem={i}/>)
         
        ) :(
          <h1>No Items Added</h1>
        )}
        
      </main>
      <aside>
        <p>Subtotal:₹{subtotal}</p>
        <p>Tax:₹{tax}</p>
        <p>Shipping Charges:₹{shippingcharges}</p>
        <p>
           Discount:<em> -₹{discount}</em>
        </p>
        <p>
          <b>Total:₹{total}</b>
        </p>
        <input type="text" placeholder="Coupon Code" value={couponCode} onChange={(e)=> setcouponCode(e.target.value)}/>

        {couponCode &&
          ( isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) :(
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          )
        )
        }
        {
          cartItems.length >0 && <Link to="/shipping"></Link>
        }
      </aside>
    </div>
  )
}

export default Cart