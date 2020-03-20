import styled from 'styled-components';

const MainTitle = styled.h1`
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.greyLight};
  letter-spacing: 2.5px;
`;

const SecondaryTitle = styled.h5`
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.grey};
  letter-spacing: 1.3px;
`;

const Container = styled.div`
  position: absolute;
  transform: translate(-10%, -50%);
  top: 50%;
  left: 10%;
  z-index: 1;
  width: 50%;
`;

export { Container, MainTitle, SecondaryTitle };
