import React, { useEffect, useState } from 'react';
import Nav from './Nav';
//import { FaPencilAlt, FaTrashAlt, FaEye, FaPlusCircle, FaPlus } from 'react-icons/fa';
//import { Link } from 'react-router-dom';
function CartList() {
    
    const [cartItems, setCartItems] = useState([]);


    const getCartItems = async () => {
        const response = await fetch('http://localhost:3001/cart');
        const FinalData = await response.json();
        setCartItems(FinalData)
    }

    useEffect(() => {
        getCartItems();
    }, [])

    return (
        <div className='admin-panel'>
            <Nav />
            <div className='admin-panel-main'>
              <div className='row mb-4'>
                <div className='col-10'>
                <h3 className='adminTitle'>Cart</h3>
                </div>
            </div>

    

                {cartItems.map((item) => (
                    <div className='serviceList'>
                        <div className="list-group">
                            <ul>
                                <li className="list-group-item list-group-item-action">
                                    ID: {item._id} 
                                    <li className="list-unstyled">
                                        Service ID: {item.serviceId}</li>

                                </li>
                            </ul>
                        </div>
                    </div>

                ))} </div>

        </div>
    )

};

  
  export default CartList;