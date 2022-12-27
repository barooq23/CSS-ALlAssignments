import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState({});
    const navigate = useNavigate();

    const deleteOneProduct = id => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => navigate('/'))
            .catch(err => console.log(err));
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
          .then(res => { console.log(res.data); setOneProduct(res.data.product[0]) })
          .catch(err => console.log(err));
      }, [id]);

    return (
        <div> 
            {/* { JSON.stringify(props)} */}
            <p><Link to={'/'}>home</Link></p>
            <p>Product Title: {oneProduct.title}</p>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <p><Link to={'/products/edit/' + oneProduct._id}>Edit</Link></p>
            <button onClick={e => deleteOneProduct(oneProduct._id)}>Delete</button>
        </div>
    )
}

export default ProductDetail
