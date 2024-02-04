import React,{ useState} from 'react'

const PercentageValues = ({amount,tip,tipHandler,children}) => {

    return (
        <div>
            <label htmlFor=""><h2>{children}</h2></label>

            <select name="" id="" onChange={tipHandler} value={tip}>
                <option value="0">Dissatisfied (0%)</option>
                <option value="10">Satisfied (10%)</option>
                <option value="15">Good (15%)</option>
                <option value="20">Amazing (20%)</option>
            </select>

        </div>
    )
}

export default PercentageValues
