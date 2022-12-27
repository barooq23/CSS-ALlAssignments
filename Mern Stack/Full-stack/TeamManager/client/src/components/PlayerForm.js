import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlayerForm = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState("undecided");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', {
            name,
            position,
            status
        })
            .then(res => navigate('/players/list'))
            .catch(err => {
                console.log("printing error")
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
            <p>Add Player</p>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Player Name:</label>
                    <input type={"text"} onChange={e => setName(e.target.value)} value={name}></input>
                    {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
                </div>
                {(name.length > 0 && name.length < 2) ? <p style={{color: "red"}}>Name must be at least 2 characters</p> : ""}
                <p>
                    <label>Prefered Position:</label>
                    <input type={"text"} onChange={e => setPosition(e.target.value)} value={position}></input>
                </p>
                <input type={"submit"} value={"Add"} disabled={name.length < 2}></input>
            </form>
        </div>
    )
}

export default PlayerForm
