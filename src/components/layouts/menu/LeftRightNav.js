import React, { useState } from 'react';
import RightNav from './RightNav';
import styled from 'styled-components';
import LeftNav from './LeftNav';

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: #fff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.12);
  height: 100vh;
  width: ${({ state }) => (state ? '25rem' : '0%')};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;

  @media (min-width: 1231px) {
    width: 0%;
  }
`;

const LeftRightNav = () => {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
    {/* NAV ON BIG SCREEN */}
      <LeftNav navbarState={navbarState} setNavbarState={setNavbarState} />

      {/* NAV ON SMALL SCREEN */}
      <ResponsiveNav state={navbarState} className={navbarState ? 'show' : ''}>
        <RightNav />
      </ResponsiveNav>
    </>
  );
};

export default LeftRightNav;
