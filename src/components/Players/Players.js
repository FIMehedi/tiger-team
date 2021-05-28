import React from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = (props) => {

    const players = props.players;
    const handleAddTeam = props.handleAddTeam;

    return (
        <div>
            <h1 className="heading">{props.heading}</h1>
            <div className="players-container">
                {
                    players.map(player => <Player player={player} handleAddTeam={handleAddTeam} team={props.team} key={player.id}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;