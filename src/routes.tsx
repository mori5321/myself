import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Top from "@/pages/Top";
import Career from "@/pages/Career";
import Profile from "@/pages/Profile";

import Container from '@/layouts/Container';
import colors from '@/utils/colors';
import Header from "@/components/Header";
import Bubbles from "@/components/Bubbles";

const Routes: React.SFC = () => {
  return (
    <Router>
      <div>
        <Bubbles />
        <Container color={colors.black}>
          <Header />
        </Container>
        <Route exact path="/" component={Top} />
        <Route path="/career" component={Career} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
};

export default Routes;