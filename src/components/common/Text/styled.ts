import styled from "@emotion/styled";

import { TextProps } from ".";

export const TextElement = styled.span<TextProps>`
  size: ${(props) => props.size}rem;
  font-weight: ${(props) => props.weight};
`;
