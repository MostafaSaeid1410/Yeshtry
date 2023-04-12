import './Header.css';
import PrimaryNavigation from './primaryNavigation/PrimaryNavigation';
import CtaContainer from './cta/CtaContainer';
import React from 'react';
import SecondaryNavigation from './secondaryNavigation/SecondaryNavigation';
function Header() {
  return (
    <header>
      <PrimaryNavigation></PrimaryNavigation>
      <CtaContainer></CtaContainer>
      <SecondaryNavigation></SecondaryNavigation>
    </header>
  );
}

export default Header;
