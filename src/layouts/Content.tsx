import colors from '@/utils/colors';
import styled from 'styled-components';

interface IProps {
  color?: string;
}

const Content = styled.div`
  min-height: 100vh;
  background-color: ${(props: IProps) => props.color || colors.primary}
`
export default Content;