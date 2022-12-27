import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorForm from './AuthorForm';

const UpdateAuthor = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.author[0].name);
                setAge(res.data.author[0].age);
                setLoaded(true);
                console.log("update form");
                console.log(res.data.author);
            })
            .catch(err => console.log(err));
    }, [id]);

    const updateHandler = (name) => {
        axios.put('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then(res => { console.log('updating'); console.log(res); navigate('/') })
            .catch(err => {
                console.log("printing error");
                console.log(err.response.data.error.errors.message);
                console.log(err);
                const errorResponse = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }

    return (
        <div>
            {loaded && (
                <>
                    {errors.map((err, index) => <p key={index} style={{ color: "red" }}>{err}</p>)}
                    <AuthorForm state={1} onSubmitProp={updateHandler} initialName={name} initialAge={age} />
                </>
            )}
        </div>
    )
}

export default UpdateAuthor
