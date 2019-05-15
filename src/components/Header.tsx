import * as React from 'react';

import Container from '@/layouts/Container';
import CenteredText from '@/atomics/CenteredText';
import colors from '@/utils/colors';
import styled from 'styled-components';


export default class Header extends React.Component {
  public render() {
    return(
      <Container color={colors.black}>
        <Container style={{ padding: "25px 0"}}>
          <CenteredText>
            <AvatarImage src="assets/images/selfee.jpg" height="60" width="60" />
          </CenteredText>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Title>Nishimori Daisuke</Title>
          </div>
          <CenteredText>Web Developer / Singer / Pianist</CenteredText>
        </Container>
      </Container>
    )
  }
}


const Title = styled.h1`
  text-align: center;
  display: inline-block;
  border-bottom: 2px double ${colors.primary};
`

const AvatarImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: scale-down;
  margin: 0 auto;
`