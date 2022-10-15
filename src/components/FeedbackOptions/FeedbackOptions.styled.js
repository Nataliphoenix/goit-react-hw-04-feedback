import styled from 'styled-components';

export const Button =styled.button`
padding: 5px;
width: 80px;
margin-bottom:15px;

font-family: inherit;
border-radius: 4px;

&:not(:last-child){
    margin-right:20px;
}

cursor: pointer;

border: #3FEEE6;
background-color:#CAFAFE;
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
0px 1px 2px rgba(0, 0, 0, 0.10),
0px 2px 2px rgba(0, 0, 0, 0.12);

transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover, &:focus{
    transform: scale(1.1);
}
    
`;