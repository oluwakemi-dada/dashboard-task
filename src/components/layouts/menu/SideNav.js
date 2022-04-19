import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import UserPic from '../../../assets/images/user-pic.png';
import Overview from '../../../assets/images/overview.png';
import Policy from '../../../assets/images/policy.png';
import Reports from '../../../assets/images/report.png';
import Company from '../../../assets/images/company.png';
import UserAccount from '../../../assets/images/user-account.png';
import History from '../../../assets/images/history.png';
import Logout from '../../../assets/images/logout.png';
import styles from '../../../styles/SideNav.module.scss';

const SideNav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={Logo} alt='logo' />
        <h1>Insurance Portal</h1>
      </div>

      <div className={styles.user}>
        <img src={UserPic} alt='user display' />
        <p className={styles.name}>Hello ! Rusalba Ruiz</p>
        <p className={styles.welcome}> Welcome Back To Your Insurance Portal</p>
        <p className={styles.planStatus}>
          Your Plan : <span>Free</span>
        </p>
      </div>

      <div className={styles.createBtn}>
        Create New Plan <span>+</span>
      </div>

      <ul className={styles.nav}>
        <NavLink to='/overview' activeClassName='active-sidenav'>
          <li>
            <img src={Overview} alt='overview icon' />
            <div>Overview</div>
          </li>
        </NavLink>
        <NavLink to='/policy' activeClassName='active-sidenav'>
          <li>
            <img src={Policy} alt='policy icon' />
            <div>Policy</div>
          </li>
        </NavLink>
        <NavLink exact to='/' activeClassName='active-sidenav'>
          <li>
            <img src={Reports} alt='reports icon' />
            <div>Reports</div>
          </li>
        </NavLink>
        <NavLink to='/company' activeClassName='active-sidenav'>
          <li>
            <img src={Company} alt='company icon' />
            <div>Company</div>
          </li>
        </NavLink>
        <NavLink to='/account' activeClassName='active-sidenav'>
          <li>
            <img src={UserAccount} alt='account icon' />
            <div>User Account</div>
          </li>
        </NavLink>
        <NavLink to='/history' activeClassName='active-sidenav'>
          <li>
            <img src={History} alt='history icon' />
            <div>History</div>
          </li>
        </NavLink>
      </ul>

      <div className={styles.logout}>
        <img src={Logout} alt='logout' />
        <div>Log Out</div>
      </div>
    </div>
  );
};

export default SideNav;
