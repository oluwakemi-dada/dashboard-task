import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../../styles/TopNav.module.scss';

const TopNav = () => {
  return (
    <ul className={styles.nav}>
      <NavLink to='/overview' activeClassName='active-topnav'>
        <li>Overview</li>
        <div></div>
      </NavLink>
      <NavLink to='/policy' activeClassName='active-topnav'>
        <li>Policy</li>
        <div></div>
      </NavLink>
      <NavLink exact to='/' activeClassName='active-topnav'>
        <li>Reports</li>
        <div></div>
      </NavLink>
    </ul>
  );
};

export default TopNav;
