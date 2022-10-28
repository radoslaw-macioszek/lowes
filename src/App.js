import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import styled from "@emotion/styled";

import TenOffPane from "./components/ten-off-pane";
import TwentyOffPane from "./components/twenty-off-pane";
import TenPerOffPane from "./components/ten-per-off-pane";
import ThirtyOffPane from "./components/thirty-off-pane";
import Footer from "./components/footer/footer";
import Disclaimer from "./components/disclaimer";
import Faq from "./components/faq";
import Contact from "./components/contact";

import { isSmallScreen } from "./utils";

const StyledTab = styled(Tab)`
  display: flex !important;
  justify-content: center;
  padding-top: 60px;

  .ui {
    @media (max-width: 480px) {
      max-width: 100vw !important;
    }
  }

  div.stretched.twelve.wide.column {
    width: 100vw !important;

    @media (max-width: 480px) {
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 100px;
    }
    padding-left: 230px;
    top: -80px;
    align-items: center;
  }

  .item {
    font-weight: 500 !important;
  }

  .menu {
    @media (min-width: 480px) {
      display: flex !important;
    }

    @media (max-width: 480px) {
      display: ${({ showMenu }) => (showMenu ? "flex" : "none")} !important;
    }
  }
`;

const MenuBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  min-width: 100vw;
  min-height: 1500px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  position: absolute;

  @media (min-width: 480px) {
    display: none;
  }
`;

const PaneContainer = styled.div`
  margin-left: 130px;
  margin-right: 120px;
  max-width: 948px;
  width: 100%;

  @media (min-width: 480px) {
    padding-left: 50px;
  }
`;

const PaneContainer2 = styled.div`
  @media (min-width: 480px) {
    padding-left: 50px;
  }
`;

const panes = onMenuIconPress => [
  {
    menuItem: "30$ OFF 50$",
    render: () => (
      <PaneContainer2>
        <TenOffPane onMenuIconPress={onMenuIconPress} />
      </PaneContainer2>
    )
  },
  {
    menuItem: "20$ OFF 100$",
    render: () => (
      <PaneContainer2>
        <TwentyOffPane onMenuIconPress={onMenuIconPress} />
      </PaneContainer2>
    )
  },
  {
    menuItem: "10% OFF",
    render: () => (
      <PaneContainer2>
        <TenPerOffPane onMenuIconPress={onMenuIconPress} />
      </PaneContainer2>
    )
  },
  {
    menuItem: "FAQ",
    render: () => (
      <PaneContainer>
        <Faq onMenuIconPress={onMenuIconPress} />
      </PaneContainer>
    )
  },
  {
    menuItem: "Disclaimer",
    render: () => (
      <PaneContainer>
        <Disclaimer onMenuIconPress={onMenuIconPress} />
      </PaneContainer>
    )
  },
  {
    menuItem: "Contact",
    render: () => (
      <PaneContainer>
        <Contact onMenuIconPress={onMenuIconPress} />
      </PaneContainer>
    )
  }
];

class App extends Component {
  state = {
    showMenu: !isSmallScreen()
  };

  handlePanePress = () =>
    this.setState(({ showMenu }) => ({
      showMenu: !showMenu
    }));

  handlePaneSelect = () => this.setState({ showMenu: false });

  render() {
    return (
      <>
        <StyledTab
          showMenu={this.state.showMenu}
          menu={{
            vertical: true,
            fixed: "left",
            pointing: true
          }}
          panes={panes(this.handlePanePress)}
          onTabChange={isSmallScreen() ? this.handlePaneSelect : undefined}
        />
        {this.state.showMenu && <MenuBackground />}
        <Footer />
      </>
    );
  }
}

export default App;
