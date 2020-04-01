import styled from 'styled-components';
import { sizeMixin } from '../../../theme/mixins';

const Options = styled.div`
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 5px 0 20px;
`;

const RadioTile = styled.label`
  border: 1px solid rgba(129, 60, 52, 0.15);
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;

  svg {
    ${sizeMixin('30px', '30px')};
    fill: ${({ theme }) => theme.colors.secondaryDarker};
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid rgba(129, 60, 52, 0.5);
  }
`;

const InputContainer = styled.div`
  display: inline-block;
  margin-right: 15px;

  input[type='radio'] {
    display: none;

    &:active ~ ${RadioTile} {
      opacity: 1;
    }

    &:checked ~ ${RadioTile} {
      opacity: 1;
      border: 1px solid ${({ theme }) => theme.colors.secondaryDarker};
    }
  }
`;

export { Options, InputContainer, RadioTile };
