import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  margin: 30px;
`;

const FormInput = styled.input`
  width: 150px;
  height: 5px;
  padding: 10px 20px;
  margin: 10px 20px;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 120px;
  height: 32px;
  border-radius: 10px;
  font-size: 0.8rem;
  border: 1px solid #282c34;
  transition: 0.5s;

  &:hover {
    background: #282c34;
    color: #f3f3f3;
    font-size: 0.9rem;
  }
`;

const Form = ({ addNewTeam }) => {
  const [person, setPerson] = useState({ name: "", role: "" });

  const handleChanges = event => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    addNewTeam(person);
  };

  return (
    <FormContainer onSubmit={submitForm}>
      <label htmlFor="Name">Name</label>
      <FormInput
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={person.name}
      />
      <label htmlFor="role">Role</label>
      <FormInput
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={person.role}
      />
      <Button type="submit">Add to Team</Button>
    </FormContainer>
  );
};

export default Form;
