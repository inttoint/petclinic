import styled from 'styled-components';

const ImageBackground = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.secondaryDarker} top center
    no-repeat;
  background-image: ${({ bg }) => (bg ? `url(${bg})` : 'none')};
  background-size: cover;
  height: 100vh;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(51, 51, 51, 0.6) 100%,
      ${({ theme }) => theme.colors.primary} 0%
    );
    z-index: 0;
  }
`;

const InnerShadow = styled.div`
  height: 100vh;
  position: relative;
  box-shadow: inset 0 -43px 34px -34px rgba(88, 88, 88, 0.2);
`;

export { ImageBackground, InnerShadow };
