import React, { useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';

const Main = () => {
    const navigate = useNavigate();

    const style = {
        marginTop: "3%",
        border: "1px solid black"
    }

    useEffect(() => {
        navigate("list")
    }, [])

    return (
        <div style={style}>
            <Link to={"list"}>List</Link> | <Link to={"addplayer"}>Add Player</Link>
            <Routes>
                <Route path='list' element={ <PlayerList /> } />
                <Route path='addplayer' element={ <PlayerForm /> } />
            </Routes>
        </div>
    )
}

export default Main
