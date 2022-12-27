import axios from 'axios';
import AuthorForm from './AuthorForm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CreateParent = () => {
    const [errors, setErrors] = useState([]);
    const [errorsObj, setErrorsObj] = useState({});
    const navigate = useNavigate();

    const createAuthor = (name, age) => {
        axios.post('http://localhost:8000/api/authors', {
            name,
            age
        })
            .then(res => navigate('/'))
            .catch(err => {
                console.log("printing error")
                console.log(err);
                const errorResponse = err.response.data.error.errors;
                console.log(err.response.data.error.message);
                console.log("error obj = ");
                console.log(err.config.data);
                const errorObjResponse = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                setErrorsObj(errorObjResponse);
            });
    }

    return (
        <div>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            <AuthorForm onSubmitProp={createAuthor} initialName="" initialAge={0} errors={errorsObj} />
        </div>
    )
}

export default CreateParent
