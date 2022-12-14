import React from 'react'

const NumberToWord = (props) => {
  return (
    <div>
        {isNaN(props.number)?<p>this is word:{props.number}</p>: <p>this is Number:{props.number}</p>}
    </div>
  )
}

export default NumberToWord