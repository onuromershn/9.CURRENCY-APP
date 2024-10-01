import React from 'react'
import '../css/Currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";


function Currency() {
  return (
    <div className='currency-div'>

        <div className='currency-title'>
            <h3>EXCHANGE RATE APPLICATION</h3>
        </div>
        
        <div className='currency-calculate'>
            <input type="number" className='amount'/>
            <select className='from-currency-option' name="" id="">
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">TL</option>
            </select>

            <FaRegArrowAltCircleRight className='right-arrow'/>

            <select className='to-currency-option' name="" id="">
                <option value="">TL</option>
                <option value="">USD</option>
                <option value="">EUR</option>
            </select>

            <input type="number"  className='result'/>

        </div>
        <div>
            <button className='exchange-button'>EXCHANGE</button>
        </div>

    </div>
  )
}

export default Currency