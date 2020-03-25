import React from 'react';
import DividerLine from '../../common/divider';
import { TextContentWrapper } from './text-content.styled';

const TextContent = () => {
  return (
    <TextContentWrapper>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
      <DividerLine />
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Molestie at elementum eu facilisis sed odio. Nulla facilisi cras
        fermentum odio eu feugiat. Ac odio tempor orci dapibus ultrices in
        iaculis.
      </p>
    </TextContentWrapper>
  );
};

export default TextContent;
