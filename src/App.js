import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import TeamCost from './components/TeamCost/TeamCost';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/FIMehedi/fake-api/main/bangladeshi-cricket-players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, []);

  const [team, setTeam] = useState([]);

  const handleAddTeam = (player, isAdd) => {
    if (isAdd) {
      const newPlayers = players.filter(newPlayer => newPlayer.id !== player.id);
      setPlayers(newPlayers);
      setTeam([player, ...team])
    }
    else {
      const newTeam = team.filter(newPlayer => newPlayer.id !== player.id);
      setTeam(newTeam);
      setPlayers([player, ...players]);
    }
  }

  return (
    <div>
      <Header></Header>
      <div className="container">
        <Players players={players} handleAddTeam={handleAddTeam} heading="Available Players"></Players>
        <Players players={team} handleAddTeam={handleAddTeam} team={true} heading="Your Team"></Players>
        <TeamCost teamPlayers={team}></TeamCost>
      </div>
    </div>
  );
}

export default App;
