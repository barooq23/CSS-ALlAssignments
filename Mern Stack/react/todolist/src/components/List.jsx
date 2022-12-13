import React,{useState} from "react";

const List = (props) => {
    const changeStatus = (i) => {
        const update = props.myplan.map((item, idx) => {
            if(i === idx){
                item.completed = !item.completed;
            }
            return item;
        });
        props.setTodo(update);
    }

    const deleteItem = (i) => {
        const update = props.myplan.filter((item, idx) => {
          
          return i !== idx;
        });
        props.setTodo(update);
    }
       
  return (
    <div>

        {props.myplan.map((item, idx) => {
            if(item.completed){
                return(
                <div key={idx}>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onClick={() => changeStatus(idx)}
                  ></input>
                  <label style={{textDecoration: "line-through"}}>{item.name}</label>
                  <input type="submit" value="Delete" onClick={() => deleteItem(idx)} />
                </div>
            )}
            else{
                return (
                  <div key={idx}>
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onClick={() => changeStatus(idx)}
                    ></input>
                    <label>{item.name}</label>
                    <input
                      type="submit"
                      value="Delete"
                      onClick={() => deleteItem(idx)}
                    />
                  </div>
                );
            }
            })}

    </div>
  );
};

export default List;
