import styled from 'styled-components';

interface ComponentProps {
  backgroundColor?: string;
  color?: string;
}

const ContainerFull = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props: ComponentProps) => props.backgroundColor || "black" };
  color: ${(props: ComponentProps) => props.color || "white" };
  margin: 0;
  /* padding: 20px 20px; */
`

export default ContainerFull;