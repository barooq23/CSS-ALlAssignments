import React, { useState } from 'react';

const ProductForm = (props) => {
    const [title, setTitle] = useState(props.initialTitle);
    const [price, setPrice] = useState(props.initialPrice);
    const [description, setDesc] = useState(props.initialDesc);

    const submitHandler = e => {
        e.preventDefault();
        props.onSubmitProp(title, price, description);
        setTitle("");
        setPrice(0);
        setDesc("");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title</label>
                    <input type={"text"} onChange={ e => setTitle(e.target.value) } value={title}></input>
                </p>
                <p>
                    <label>Price</label>
                    <input type={"number"} onChange={ e => setPrice(e.target.value) } value={price}></input>
                </p>
                <p>
                    <label>Descrition</label>
                    <input type={"text"} onChange={ e => setDesc(e.target.value) } value={description}></input>
                </p>
                <p>
                    <input type={"submit"} value={props.state===1?"Update":"Create"}></input>
                </p>
            </form>
        </div>
    )
}

export default ProductForm
