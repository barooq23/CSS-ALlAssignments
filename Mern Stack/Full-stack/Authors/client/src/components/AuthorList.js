import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data.authors)) // diong the sort here didn't work, so I put it in the render
            .catch(err => console.log(err));
    }, []);

    const deleteOneAuthor = id => {
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(res => setAuthors(authors.filter(author => author._id !== id)))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Link to={'/authors/new'}>Add an author</Link>
            {authors.sort((a, b) => a.name.localeCompare(b.name)).map((author, idx) => {
                return <p key={idx}>
                    {author.name}
                    <button onClick={() => navigate('/authors/edit/' + author._id)}>Edit</button>
                    <DeleteButton id={author._id} successCallback={() => deleteOneAuthor(author._id)} />
                    {/* <button onClick={e => deleteOneAuthor(author._id)}>delete</button> */}
                </p>
            })}
        </div>
    )
}

export default AuthorList
