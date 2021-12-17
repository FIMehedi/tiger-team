import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './Player.css';
import { Draggable } from 'react-beautiful-dnd';

const player = (props) => {

    const { name, img, salary, role } = props.player;
    const handleAddTeam = props.handleAddTeam;

    return (
        <Draggable draggableId={name} index={props.index}>
            {
                (provided, snapshot) => (
                    <div className={`player ${snapshot.isDragging ? 'dragging' : ''}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div className="player-img">
                            <img src={img} alt="" />
                        </div>
                        <div className="info">
                            <h3>{name}</h3>
                            <h5>{role}</h5>
                            <p>Salary: ${salary}</p>
                            {
                                props.team || <Button onClick={() => handleAddTeam(props.player, true)} className="btn"><FontAwesomeIcon icon={faPlus} /> Add</Button>
                            }
                            {
                                props.team && <Button onClick={() => handleAddTeam(props.player, false)} className="btn"><FontAwesomeIcon icon={faMinus} /> Remove</Button>
                            }
                        </div>
                    </div>
                )
            }
        </Draggable>
    );
};

export default player;