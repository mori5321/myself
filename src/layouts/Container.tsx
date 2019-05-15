import styled from 'styled-components';
import colors from '@/utils/colors';

interface ComponentProps {
  backgroundColor?: string;
  color?: string;
  height?: string;
  width?: string;
  margin?: string;
}

const Container = styled.div`
  margin: ${(props: ComponentProps) => props.margin }; 
  width: ${(props: ComponentProps) => props.width || "100vw" };
  height: ${(props: ComponentProps) => props.height };
  color: ${(props: ComponentProps) => props.color || colors.black };
  background-color: ${(props: ComponentProps) => props.backgroundColor };
`

export default Container;