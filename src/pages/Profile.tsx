import * as React from 'react';

import Container from '@/layouts/Container';
import colors from '@/utils/colors';
import styled from 'styled-components';

import CenteredText from '@/atomics/CenteredText';
import { Heading1, Heading2 } from '@/components/Headings';

class Profile extends React.Component {
  public render() {
    return (
      <Container style={{maxWidth: "420px", width: "85%", margin: "auto"}}>
        <CenteredText color={colors.black}>
        <Heading1 margin={"28px 0 7px"} fontSize={"32px"}>Profile</Heading1>
          <p></p>
        </CenteredText>

        <CenteredText color={colors.black}>
        <Heading1 margin={"28px 0 7px"} fontSize={"22px"}>Mission</Heading1>
          <p>「表現をもっとおもしろく」</p>
        </CenteredText>

        <CenteredText color={colors.black}>
        <Heading1 margin={"28px 0 7px"} fontSize={"22px"}>Credo</Heading1>
          <p>
            恥を楽しむ / Get Things Done
            <br />
            「その時すでに行動は終わっているんだッッ」
            <br />
          </p>
        </CenteredText>

        <CenteredText color={colors.black}>
          <Heading1 margin={"28px 0 7px"} fontSize={"22px"}>Skill</Heading1>
          <p>
            Ruby / JavaScript / Elixir / Vue.js / React.js 
            <br/>
            Haskell / AWS(EC2, RDS, ALB)
          </p>
        </CenteredText>

        <CenteredText color={colors.black}>
        <Heading1 margin={"28px 0 7px"} fontSize={"22px"}>Interest</Heading1>
          <p> C++ / Docker </p>
        </CenteredText>
      </Container>
    )
  }
}

export default Profile;