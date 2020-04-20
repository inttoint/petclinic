import styled from 'styled-components';
import { borderMixin, sizeMixin } from '../../../assets/theme/mixins';

const SOptions = styled.div`
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 5px 0 20px;
`;

const SRadioTile = styled.label`
  background: rgba(129, 60, 52, 0.25);
  ${borderMixin('rgba(129, 60, 52, 0.25)')};
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  svg {
    ${sizeMixin('30px', '30px')};
    fill: ${({ theme }) => theme.colors.white};
  }

  &:hover,
  &:focus,
  &:active {
    background: rgba(129, 60, 52, 0.7);
  }
`;

const SInputContainer = styled.div`
  display: inline-block;
  margin-right: 10px;

  input[type='radio'] {
    display: none;

    &:checked ~ ${SRadioTile} {
      background: ${({ theme }) => theme.colors.secondaryDarker};
    }
  }
`;

export { SOptions, SInputContainer, SRadioTile };
