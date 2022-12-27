import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    
    const deleteOneProduct = id => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => props.removeFromDom(id))
            .catch(err => console.log(err));
    }

    return (
        <div>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={'/products/' + product._id}>{product.title}</Link>
                    <DeleteButton id={product._id} successCallback={() => deleteOneProduct(product._id)} />
                    {/* <button onClick={e => deleteOneProduct(product._id)}>delete</button> */}
                </p>
            })}
        </div>
    )
}

export default ProductList
