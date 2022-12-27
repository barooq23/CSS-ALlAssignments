import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const {id, successCallback} = props;

    const deleteOneProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => successCallback())
            .catch(err => console.log(err));
    }

    return (
        <>
            <button onClick={deleteOneProduct}>Delete</button>
        </>
    )
}

export default DeleteButton
