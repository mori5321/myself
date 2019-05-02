import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Top from "@/pages/Top";
import Career from "@/pages/Career";
import Skill from "@/pages/Skill";

import Container from '@/layouts/Container';
import colors from '@/utils/colors';
import Header from "@/components/Header";

const Routes: React.SFC = () => {
  return (
    <Router>
      <div>
        <Container backgroundColor={colors.white} color={colors.black}>
          <Header />
        </Container>
        <Route exact path="/" component={Top} />
        <Route path="/career" component={Career} />
        <Route path="/skill" component={Skill} />
      </div>
    </Router>
  );
};

export default Routes;