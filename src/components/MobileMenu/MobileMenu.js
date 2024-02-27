/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <OverlayContent>
        <CloseButtonWrapper>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close"/>
          </UnstyledButton>
        </CloseButtonWrapper>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </OverlayContent>
    </Overlay>
  );
};

const CloseButtonWrapper = styled.div`
  flex: 1;
  align-self: flex-end;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  a {
    font-size: 18;
    font-weight: bold;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-size: 1.25rem;
    text-transform: uppercase;
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  a {
    justify-content: space-evenly;
    font-size: 14;
    font-weight: lighter;
    text-decoration: none;
    color: ${COLORS.gray[700]};
  }
`;

const Overlay = styled(DialogOverlay)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: hsl(225, 5%, 40%, 0.8);
`;

const OverlayContent = styled(DialogContent)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 16px;
`;

export default MobileMenu;
