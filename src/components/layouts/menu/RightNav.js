import React from 'react';
import { NavLink } from 'react-router-dom';
import UserPic from '../../../assets/images/user-pic.png';
import Overview from '../../../assets/images/overview.svg';
import OverviewActive from '../../../assets/images/overview-active.svg';
import Policy from '../../../assets/images/policy.svg';
import PolicyActive from '../../../assets/images/policy-active.svg';
import Reports from '../../../assets/images/reports.svg';
import ReportsActive from '../../../assets/images/reports-active.svg';
import Company from '../../../assets/images/company.svg';
import CompanyActive from '../../../assets/images/company-active.svg';
import UserAccount from '../../../assets/images/user-account.svg';
import UserAccountActive from '../../../assets/images/user-account-active.svg';
import History from '../../../assets/images/history.svg';
import HistoryActive from '../../../assets/images/history-active.svg';
import Logout from '../../../assets/images/logout.png';
import styles from '../../../styles/RightNav.module.scss';

const RightNav = ({ setNavbarState }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.user}>
          <img src={UserPic} alt='user display' />
          <p className={styles.name}>Hello ! Rusalba Ruiz</p>
          <p className={styles.welcome}>
            Welcome Back To Your Insurance Portal
          </p>
          <p className={styles.planStatus}>
            Your Plan : <span>Free</span>
          </p>
        </div>

        <div className={styles.createBtn}>
          Create New Plan <span>+</span>
        </div>

        <ul className={styles.nav}>
          <NavLink exact to='/' activeClassName='active-sidenav'>
            <li onClick={() => setNavbarState(false)}>
              <img src={Overview} alt='overview icon' className='inactive' />
              <img
                src={OverviewActive}
                alt='overview icon'
                className='active'
              />
              <div>Overview</div>
            </li>
          </NavLink>
          <NavLink to='/policy' activeClassName='active-sidenav'>
            <li onClick={() => setNavbarState(false)}>
              <img src={Policy} alt='policy icon' className='inactive' />
              <img src={PolicyActive} alt='policy icon' className='active' />
              <div>Policy</div>
            </li>
          </NavLink>
          <NavLink to='/reports' activeClassName='active-sidenav'>
            <li onClick={() => setNavbarState(false)}>
              <img src={Reports} alt='reports icon' className='inactive' />
              <img src={ReportsActive} alt='reports icon' className='active' />
              <div>Reports</div>
            </li>
          </NavLink>
          <NavLink to='/company' activeClassName='active-sidenav'>
            <li onClick={() => setNavbarState(false)}>
              <img src={Company} alt='company icon' className='inactive' />
              <img src={CompanyActive} alt='company icon' className='active' />
              <div>Company</div>
            </li>
          </NavLink>
          <NavLink to='/account' activeClassName='active-sidenav'>
            <li onClick={() => setNavbarState(false)}>
              <img src={UserAccount} alt='account icon' className='inactive' />
              <img
                src={UserAccountActive}
                alt='account icon'
                className='active'
              />
              <div>User Account</div>
            </li>
          </NavLink>
          <NavLink to='/history' activeClassName='active-sidenav'>
            <li onClick={() => setNavbarState(false)}>
              <img src={History} alt='history icon' className='inactive' />
              <img src={HistoryActive} alt='history icon' className='active' />
              <div>History</div>
            </li>
          </NavLink>
        </ul>
      </div>

      <div className={styles.logout}>
        <img src={Logout} alt='logout' />
        <div>Log Out</div>
      </div>
    </div>
  );
};

export default RightNav;
