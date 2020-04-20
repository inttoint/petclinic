import styled from 'styled-components';

const SContainer = styled.div`
  padding: 2% 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SAuthContainer = styled(SContainer)`
  z-index: 1;

  h2 {
    margin-top: 0;
    color: ${({ theme }) => theme.colors.grey};
    text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.primary};
  }
`;

export { SAuthContainer, SContainer };
