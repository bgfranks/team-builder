import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TeamCard from "./Components/TeamCard";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  color: #282c34;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
`;

function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Brandon Franks",
      email: "bgfranks106@icloud.com",
      role: "Front End Developer",
    },
  ]);

  const [editMember, setEditMember] = useState({});

  const addNewTeam = person => {
    const newTeam = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role,
    };

    setTeam([...team, newTeam]);
  };

  const editTeam = teamMember => {
    setEditMember(teamMember);
  };

  const completeEdit = updatedMember => {
    team.map(member => {
      if (member.id === updatedMember.id[0]) {
        member.name = updatedMember.name;
        member.email = updatedMember.email;
        member.role = updatedMember.role;
        setEditMember({});
      }
      return null;
    });
  };

  return (
    <AppContainer>
      <Header>
        <h1>Team Builder</h1>
      </Header>
      <Form
        addNewTeam={addNewTeam}
        editMember={editMember}
        completeEdit={completeEdit}
        setEditMember={setEditMember}
      />
      <TeamCard member={team} editTeam={editTeam} />
    </AppContainer>
  );
}

export default App;
