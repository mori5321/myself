import * as React from 'react';

import Particles from 'react-particles-js';
import colors from '@/utils/colors';
import styled from 'styled-components';

const particlesOptions = {
  particles: {
      number: {
          value: 15
      },
      size: {
          value: 20,
          random: true
      },
      color: {
        value: colors.lightPrimary
      },

      opacity: {
        anim: {
          speed: 0.25
        }
      },

      line_linked: {
        enable: true,
        distance: 10,
        color: colors.primary
      },
  }
}


export default class Bubbles extends React.Component {
  public render() {
    return (
      <Wrapper>
        <Particles
          params={particlesOptions}
          height={"100vh"}
          width={"100%"}
        />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: fixed;
  z-index: -1000;
  width: 100%;
  height: 100vh;
`