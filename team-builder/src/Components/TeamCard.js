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

  &:hover {
    color: #f3f3f3;
    background: #282c34;

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
          <p>{team.role}</p>
        </Card>
      ))}
    </CardContainer>
  );
};

export default TeamCard;
