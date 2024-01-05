"use client"
import useCartStore from '@/utils/store/cart';
import React from 'react'

const Tr = ({item}) => {

  const { increaseQuantity,decreaseQuantity,removeItemFromCart } = useCartStore();
  return (
    <tr className="table_row">
    <td className="column-1">
      <div onClick={()=>removeItemFromCart(item.id)} className="how-itemcart1">
        <img src={item?.images[0].url} alt="IMG" />
      </div>
    </td>
    <td className="column-2">{item.title}</td>
    <td className="column-3">₹{item.discountPrice}</td>
    <td className="column-4">
      <div className="wrap-num-product flex-w m-l-auto m-r-0">
        <div onClick={()=>decreaseQuantity(item.id)} className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
          <i className="fs-16 zmdi zmdi-minus" />
        </div>
        <input
          className="mtext-104 cl3 txt-center num-product"
          type="number"
          name="num-product1"
          onChange={()=>true}
          value={item.quantity}
        />
        <div onClick={()=>increaseQuantity(item.id)} className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
          <i className="fs-16 zmdi zmdi-plus" />
        </div>
      </div>
    </td>
    <td className="column-5">₹ {(item.discountPrice*item.quantity).toFixed(2)}</td>
  </tr>
  )
}

export default Tr