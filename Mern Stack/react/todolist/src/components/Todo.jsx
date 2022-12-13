import React,{useState} from 'react'

const ToDo = (props) => {
    const[palns,setPlans]=useState([]);

    const handelSubmit=(e)=>{
        e.preventDefault();
        props.mylist(palns);
    }
return (
  <div>
    <form onSubmit={handelSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent:"space-evenly",
        margin:"10px",
      }}
    >
      <p>
        <label>
          What To Do:
          <input type="text" onChange={(e)=> setPlans(e.target.value)} value={palns} />
        </label>
        <input type="submit" value="Add" />
      </p>
    </form>
  </div>
);
}

export default ToDo