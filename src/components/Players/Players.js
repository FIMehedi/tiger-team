import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Player from '../Player/Player';
import './Players.css';

const Players = (props) => {

    const players = props.players;
    const handleAddTeam = props.handleAddTeam;

    return (
        <div>
            <h1 className="heading">{props.heading}</h1>
            <Droppable droppableId={props.droppableId}>
                {
                    (provided) => (
                        <div className="players-container"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                players.map((player, idx) => <Player player={player} handleAddTeam={handleAddTeam} team={props.team} key={player.id} index={idx}></Player>)
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </div>
    );
};

export default Players;