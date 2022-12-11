import React from 'react'

const BoxColor = (props) => {
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
        {props.laith.map((item,idx) =>
        <div key={idx}style={{width:item.width+'px', height:item.height+'px',backgroundColor:item.color}}>
           {item.col}
        </div>)}
    </div>
  )
}

export default BoxColor