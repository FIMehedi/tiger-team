import React from 'react';
import './TeamCost.css'

const TeamCost = (props) => {

    const totalSalary = props.teamPlayers.reduce((total, player) => total + player.salary, 0)

    return (
        <div>
            <h1 className="heading">Team Cost</h1>

            <div className="team-cost">
                <h5>Total Team Players: {props.teamPlayers.length}</h5>
                <p>Total Salary: ${totalSalary}</p>
            </div>
        </div>
    );
};

export default TeamCost;