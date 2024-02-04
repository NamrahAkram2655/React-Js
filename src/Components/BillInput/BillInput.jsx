import React,{useState} from 'react'

const BillInput = ({amount, inputhandler}) => {
   
    return (
        <div>
            <label htmlFor=""><h2>How much was the bill? </h2></label>
            <input type="number" placeholder='amount...' onChange={inputhandler} value={amount} />
        </div>
    )
}

export default BillInput
