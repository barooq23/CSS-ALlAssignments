import React, { useState } from 'react'

const AuthorForm = (props) => {
    const [name, setName] = useState(props.initialName);
    const [age, setAge] = useState(props.initialAge);

    const submitHandler = e => {
        e.preventDefault();
        props.onSubmitProp(name, age);
        setName("");
        setAge(0);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Name</label>
                    <input type={"text"} onChange={e => setName(e.target.value)} value={name}></input>
                    {console.log(props.erros)}
                </p>
                <p>
                    <label>Age</label>
                    <input type={"number"} onChange={e => setAge(e.target.value)} value={age}></input>
                </p>
                <p>
                    <input type={"submit"} value={props.state === 1 ? "Update" : "Create"}></input>
                </p>
            </form>
        </div>
    )
}

export default AuthorForm
