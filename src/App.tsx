import React from 'react';
import './App.css';

interface TeamProperties {
  school: string;
  name: string;
  mascot: string;
  city: string;
  state: string;
}

const teamData: TeamProperties[] =
  require('./CollegeBasketballTeams.json').teams;

function Welcome() {
  return (
    <div>
      <h1>This is March Madness!</h1>
      <h3>
        Here you find school names, the names of their mascots, and where the
        school is found.
      </h3>
      <br />
    </div>
  );
}

class TeamList extends React.Component<TeamProperties> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div>
        <h2>{school}</h2>
        <h3>Mascot: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
        <br />
      </div>
    );
  }
}

function TeamGroup() {
  return (
    <div>
      {teamData.map((team, index) => (
        <TeamList key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamGroup />
    </div>
  );
}
export default App;
