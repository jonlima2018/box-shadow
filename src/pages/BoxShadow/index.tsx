import React from 'react';
import ControlOptions from './ControlOptions';
import PainelShadow from './PainelShadow';
import StyledContainer from './Styled';

const BoxShadow:React.FC = () => (
  <StyledContainer>
    <ControlOptions />
    <PainelShadow />
  </StyledContainer>
);

export default BoxShadow;
