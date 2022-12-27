import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import ProductForm from './ProductForm';

const UpdateProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDesc] = useState("");
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.product[0].title);
                setPrice(res.data.product[0].price);
                setDesc(res.data.product[0].description);
                setLoaded(true);
                console.log("update form");
                console.log(res.data.product);
            })
            .catch(err => console.log(err));
    }, [id]);

    const updateHandler = (title, price, description) => {
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {console.log('updating'); console.log(res); navigate('/products/' + id) })
            .catch(err => console.log(err));
    }

    return (
        <div>
            {loaded && (
                <>
                    <ProductForm state={1} onSubmitProp={updateHandler} initialTitle={title} initialPrice={price} initialDesc={description} />
                    <DeleteButton id={id} successCallback={() => navigate('/')} />
                </>
            )}
        </div>
    )
}

export default UpdateProduct
