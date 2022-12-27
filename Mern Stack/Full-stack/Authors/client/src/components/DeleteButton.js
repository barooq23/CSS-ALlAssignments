import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const { id, successCallback } = props;

    const deleteOneAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(res => successCallback())
            .catch(err => console.log(err));
    }
    return (
        <>
            <button onClick={deleteOneAuthor}>Delete</button>
        </>
    )
}

export default DeleteButton
