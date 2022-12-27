import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => { setPlayers(res.data.players); setLoaded(true) })
            .catch(err => console.log(err));
    }, []);

    const deleteOnePlayer = id => {
        axios.delete('http://localhost:8000/api/players/' + id)
            .then(res => setPlayers(players.filter(player => player._id !== id)))
            .catch(err => console.log(err));
    }

    const displayPopUp = (name, id) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to delete ' + name + "?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteOnePlayer(id)
                },
                {
                    label: 'No',
                    //onClick: () => alert('Click No')
                }
            ]
        });
    }

    return (
        loaded &&
        (<div>
            <table style={{margin: "5% auto"}} border='1px'>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Posision</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, idx) => {
                        return <tr key={idx}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            {/* <td><button onClick={() => deleteOnePlayer(player._id)}>Delete</button></td> */}
                            <td><button onClick={() => displayPopUp(player.name, player._id)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>)
    )
}

export default PlayerList
