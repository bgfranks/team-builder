import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Card = styled.div`
  background: #f3f3f3;
  height: 200px;
  width: 300px;
  padding-top: 12%;
  border-radius: 10%;
  margin: 10px;
  transition: 0.5s;
  box-shadow: 10px 10px 18px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    color: #f3f3f3;
    background: #282c34;
    box-shadow: 5px 5px 9px 0px rgba(0, 0, 0, 0.9);

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
`;

const TeamCard = props => {
  return (
    <CardContainer>
      {props.member.map(team => (
        <Card key={team.id}>
          <h2>{team.name}</h2>
          <p>{team.email}</p>
          <p>{team.role}</p>
        </Card>
      ))}
    </CardContainer>
  );
};

export default TeamCard;
