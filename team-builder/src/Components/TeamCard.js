import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Card = styled.div`
  background: #f3f3f3;
  height: 50px;
  width: 300px;
  padding-bottom: 10px;
  border-radius: 10px;
  margin: 10px 10px 20px;
  transition: 0.5s;
  box-shadow: 10px 10px 18px 0px rgba(0, 0, 0, 0.75);

  p {
    display: none;
    transition: 0.9s;
    color: #fff;
  }

  button {
    width: 80px;
    height: 30px;
    font-size: 1rem;
    border-radius: 10px;
    background: #e3e3e3;
    transition: 0.9s;
    display: none;

    &:hover {
      background: white;
      font-size: 1.2rem;
      font-weight: bold;
      width: 90px;
      height: 35px;
    }
  }
  &:hover {
    color: #f3f3f3;
    background: #912f40;
    box-shadow: 5px 5px 9px 0px rgba(0, 0, 0, 0.9);
    padding-top: 10%;
    height: 220px;
    border-radius: 10%;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.3rem;
      display: block;
    }

    button {
      display: initial;
    }
  }
`;

const TeamCard = props => {
  function setEditMember(person) {
    props.editTeam(person);
  }

  return (
    <CardContainer>
      {props.member.map(team => (
        <Card key={team.id}>
          <h2>{team.name}</h2>
          <p>{team.email}</p>
          <p>{team.role}</p>
          <button onClick={() => setEditMember(team)}>Edit</button>
        </Card>
      ))}
    </CardContainer>
  );
};

export default TeamCard;
