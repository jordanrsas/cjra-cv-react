import React from 'react';
import styled from 'styled-components';

const ParrafoJustify = styled.p`
text-align:justify;
`

const Parrafo = ({texto}) => {
    return (
    <div><ParrafoJustify>{texto}</ParrafoJustify></div>
    );
};

export default Parrafo;