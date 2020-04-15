import styled from 'styled-components';

const SecondaryTitle = styled.h5`
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.grey};
  letter-spacing: 1.3px;
`;

const HeaderContainer = styled.div`
  position: absolute;
  transform: translate(-10%, -50%);
  top: 50%;
  left: 10%;
  z-index: 1;
  width: 50%;
`;

export { HeaderContainer, SecondaryTitle };
