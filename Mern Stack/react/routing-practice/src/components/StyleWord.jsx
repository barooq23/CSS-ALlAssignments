import React from 'react'

const StyleWord = (props) => {
  return (
    <div>
        <p style={{
            color: props.color,
            backgroundColor: props.color1
        }}>the word is: {props.hello}</p>
    </div>
  )
}

export default StyleWord