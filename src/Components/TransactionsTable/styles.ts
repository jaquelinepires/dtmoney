import styled from "styled-components";

export const Container = styled.div`
margin-top: 4rem;

table{
  width: 100%;
  border-spacing: 0 0.5rem; //usa para distancia a table

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }
  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;  

  &:first-child {  // Quando o TD é o primeiro vou colocar a cor de fundo...
    color: var(--text-title);
    }
  &.deposit {  //quando eu tiver class deposit a cor vai ser...
    color: var(--green);
  }
  &.withdraw {  //quando eu tiver class deposit a cor vai ser...
    color: var(--red);
  }


  }

}
`