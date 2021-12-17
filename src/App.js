import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import TeamCost from './components/TeamCost/TeamCost';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/FIMehedi/fake-api/main/bangladeshi-cricket-players.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  const [team, setTeam] = useState([]);

  const handleAddTeam = (player, isAdd) => {
    if (isAdd) {
      const newPlayers = players.filter(newPlayer => newPlayer.id !== player.id);
      setPlayers(newPlayers);
      setTeam([player, ...team]);
    }
    else {
      const newTeam = team.filter(newPlayer => newPlayer.id !== player.id);
      setTeam(newTeam);
      setPlayers([player, ...players]);
    }
  };

  const handleDragEnd = result => {

    if (!result.destination) return;
    else if (result.source.droppableId === 'all' && result.destination.droppableId === 'all') {
      const newPlayers = [...players];
      const [selectedPlayer] = newPlayers.splice(result.source.index, 1);
      newPlayers.splice(result.destination.index, 0, selectedPlayer);
      setPlayers(newPlayers);
    }
    else if (result.source.droppableId === 'team' && result.destination.droppableId === 'team') {
      const newTeam = [...team];
      const [selectedPlayer] = newTeam.splice(result.source.index, 1);
      newTeam.splice(result.destination.index, 0, selectedPlayer);
      setTeam(newTeam);
    }
    else if (result.source.droppableId === 'all' && result.destination.droppableId === 'team') {
      const newPlayers = [...players];
      const [selectedPlayer] = newPlayers.splice(result.source.index, 1);
      handleAddTeam(selectedPlayer, true);
      const newTeam = [...team];
      newTeam.splice(result.destination.index, 0, selectedPlayer);
      setTeam(newTeam);
    }
    else if (result.source.droppableId === 'team' && result.destination.droppableId === 'all') {
      const newTeam = [...team];
      const [selectedPlayer] = newTeam.splice(result.source.index, 1);
      handleAddTeam(selectedPlayer, false);
      const newPlayers = [...players];
      newPlayers.splice(result.destination.index, 0, selectedPlayer);
      setPlayers(newPlayers);
    }
  };

  return (
    <div>
      <Header></Header>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="container">
          <Players players={players} handleAddTeam={handleAddTeam} heading="Available Players" droppableId="all"></Players>
          <Players players={team} handleAddTeam={handleAddTeam} team={true} heading="Your Team" droppableId="team"></Players>
          <TeamCost teamPlayers={team}></TeamCost>
        </div>
      </DragDropContext>
    </div>
  );
};

export default App;
