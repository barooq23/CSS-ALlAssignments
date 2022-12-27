import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const removeFromDom = id => {
        setProducts(products.filter(product => product._id !== id));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log("getting products");
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const createProduct = (title, price, description) => {
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => setProducts(products.concat(res.data.product)))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice={0} initialDesc="" />
            <hr />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main
