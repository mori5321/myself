import styled from 'styled-components';

interface Heading1Props {
  margin?: string;
  fontSize?: string;
}

export const Heading1 = styled.h1`
  margin: ${(props: Heading1Props) => props.margin || "7px"};
  font-size: ${(props: Heading1Props) => props.fontSize || "14px" };
`

