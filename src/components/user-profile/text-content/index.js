import React from 'react';
import { STextContentWrapper } from './text-content.styled';
import { SDivider } from '../../common/divider.styled';

const TextContent = () => {
  return (
    <STextContentWrapper>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
      <SDivider />
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
    </STextContentWrapper>
  );
};

export default TextContent;
