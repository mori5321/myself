import colors from '@/utils/colors';
import styled from 'styled-components';

interface IProps {
  color?: string;
  fontSize?: number;
}

const Text = styled.div`
  color: ${(props: IProps) => props.color || colors.black };
  font-size: ${(props: IProps) => props.fontSize || 1 }rem;
`

export default Text;