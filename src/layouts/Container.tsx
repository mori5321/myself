import styled from 'styled-components';
import colors from '@/utils/colors';

interface ComponentProps {
  backgroundColor?: string;
  color?: string;
  height?: string;
}

const Container = styled.div`
  width: 100vw;
  height: ${(props: ComponentProps) => props.height };
  color: ${(props: ComponentProps) => props.color || colors.black };
  background-color: ${(props: ComponentProps) => props.backgroundColor || colors.white };
`

export default Container;