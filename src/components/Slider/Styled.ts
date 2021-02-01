import styled from 'styled-components';

const StyledSlider = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  .container__slider {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .slider__title {
      font-weight: bold;
      text-transform: capitalize;
      font-size: 1.1em;
    }
  }
`;

export default StyledSlider;
