import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.base};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;

  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.inside};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.button};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.base};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search({
  valorDaBusca = { valorDaBusca },
  setValorDaBusca = { setValorDaBusca },
}) {
  return (
    <StyledSearch>
      <input
        value={valorDaBusca}
        type="text"
        onChange={(e) => {
          setValorDaBusca(e.target.value);
        }}
      />
      <button>🔎</button>
    </StyledSearch>
  );
}
