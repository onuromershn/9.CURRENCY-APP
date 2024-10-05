import React, { useState, useEffect  } from 'react';
import '../css/Currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';
import { API_KEY } from '../../config';


let BASE_URL =  "https://api.freecurrencyapi.com/v1/latest";


function Currency() {

  const [amount,setAmount] = useState(0);
  const [fromCurrency,setFromCurrency] = useState('USD');
  const [toCurrency,setToCurrency] = useState('TRY');
  const [result,setResult] = useState(0);
  const [currencies,setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        setCurrencies(Object.keys(response.data.data)); 
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };
    fetchCurrencies();
  }, [fromCurrency]);

  const exchange = async () => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const result = ((response.data.data[toCurrency]) * amount).toFixed(2);
    setResult(result);
  }

  return (
    <div className='currency-div'>

        <div className='currency-title'>
            <h3>EXCHANGE RATE APPLICATION</h3>
        </div>
        
        <div className='currency-calculate'>
            <input value={amount} onChange={(e)=> setAmount(e.target.value)} type="number" className='currency-amount'/>
            <select value={fromCurrency} onChange={(e)=> setFromCurrency(e.target.value)}  className='from-currency-option'>
              {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
            </select>

            <FaRegArrowAltCircleRight className='right-arrow'/>

            <select value={toCurrency} onChange={(e)=> setToCurrency(e.target.value)} className='to-currency-option'>
              {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
            </select>

            <input value={result} onChange={(e) => setResult(e.target.value)} type="number"  className='result'/>

        </div>
        <div>
            <button onClick={exchange} className='exchange-button'>EXCHANGE</button>
        </div>

    </div>
  )
}

export default Currency