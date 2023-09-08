import React from "react";
import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useSearch } from "../context/SearchContext";

export default function SearchForm() {
  const { searchText, inputChange, keyboardEvent } = useSearch();

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={searchSubmit}>
      <label>
        <input
          type="text"
          name="sick"
          value={searchText}
          onChange={inputChange}
          autoFocus
          onKeyDown={keyboardEvent}
        />
        <FaSearch size="24" color="white" />
      </label>
      <button type="submit">검색</button>
    </StyledForm>
  );
}
const StyledForm = styled.form`
  position: relative;
  label {
    position: relative;
    svg {
      position: absolute;
      top: 0;
      left: 20px;
    }
  }
  input {
    width: 100%;
    border-radius: 50px;
    background: var(--color-white30);
    color: black;
    font-size: 15px;
    padding: 30px 130px 30px 55px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  }
  button {
    width: 20%;
    position: absolute;
    top: 0;
    right: 0;
    background: #007be9;
    color: black;
    font-size: 15px;
    height: 100%;
    border-radius: 0 50px 50px 0;
    &:hover {
      background: var(--color-white70);
      color: var(--color-blue);
    }
  }
`;
