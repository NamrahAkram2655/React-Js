import React from 'react'

const Result = ({amount,result}) => {
  return (
    <div>
      <h3>Your total bill is ${amount} (${amount} + ${result})</h3>
    </div>
  )
}

export default Result
