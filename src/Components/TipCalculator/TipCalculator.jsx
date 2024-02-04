import { useState } from 'react';
import React from 'react'
import BillInput from '../BillInput/BillInput'
import PercentageValues from '../PercentageValues/PercentageValues';
import Result from '../Result/Result';
import Reset from '../Reset/Reset';

const TipCalculator = () => {
    const [amount, setamount] = useState(0);

    const inputhandler = (e) => {
        setamount(Number(e.target.value));
    }

    const [tip, setTip] = useState(0);

    const tipHandler = (e) => {
        setTip(Number(e.target.value));
    }

    const [frndtip, setfrndTip] = useState(0);

    const tipHandlerfriend = (e) => {
        setfrndTip(Number(e.target.value));
    }

    let result = amount * (Number(tip + frndtip) / 2 / 100);

    const ResetHandler = () => {
        setamount(0);
        setTip(0);
        setfrndTip(0);
    }

    return (
        <div>
            <BillInput amount={amount} inputhandler={inputhandler} />

            <PercentageValues amount={amount} tip={tip} tipHandler={tipHandler}>How much did you like the service?</PercentageValues>

            <PercentageValues amount={amount} tip={frndtip} tipHandler={tipHandlerfriend}>How much did you like the service?</PercentageValues>

            {amount > 0 ?
                <div>
                    <Result amount={amount} result={result} />
                    <Reset ResetHandler={ResetHandler} />
                </div>
                : ""
            }

        </div>
    )
}

export default TipCalculator
