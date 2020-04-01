import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Style from 'style-it';

import Logo from '../logo.png';

import SvgIconComponent from './SvgIconComponent';

class MainNavComponent extends Component {
  render() {
    const styles = `
    .nav {
      background: var(--toast-gradient-2);
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 10rem;
      border-top-right-radius: 3rem;
      border-bottom-right-radius: 3rem;
    }
    
    .main-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    
    .logo {
      width: 6rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
    
    .caption {
      color: var(--toast-neutral-6);
      letter-spacing: 0.25px;
    }
    
    .icon-caption {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      padding: .75rem 0 1rem 0;
    }

    .icon-caption:last-child {
      margin-bottom: 2rem;
    }
    
    .icon-caption:hover {
      background-color: var(--toast-purple-transparent);
      mix-blend-mode: screen;
    }
`;

    function getIcon(name) {
      return (
        <SvgIconComponent
          name={name}
          width={35}
          height={45}
          stroke='var(--toast-white)'
          strokeWidth={1}
        ></SvgIconComponent>
      );
    }

    function getMainNav(props) {
      if (props.advisor) {
        return (
          <React.Fragment>
            <div className='main-links'>
              <Link to='/'>
                <img src={Logo} rel='icon' alt='' className='logo' />
              </Link>

              <Link to='/clients' className='icon-caption'>
                {getIcon('users')}
                <span className='caption'>Clients</span>
              </Link>

              <Link to='/configurations' className='icon-caption'>
                {getIcon('sliders')}
                <span className='caption'>Configuration</span>
              </Link>
            </div>

            <Link to='/' className='icon-caption'>
              {getIcon('power')}
              <span className='caption'>Log Out</span>
            </Link>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <div className='main-links'>
              <Link to='/'>
                <img src={Logo} rel='icon' alt='' className='logo' />
              </Link>

              <Link to='/clientprofile' className='icon-caption'>
                {getIcon('user')}
                <span className='caption'>Profile</span>
              </Link>

              <Link to='/clientplan' className='icon-caption'>
                {getIcon('barchart')}
                <span className='caption'>Plan</span>
              </Link>

              <Link to='/clientactionitems' className='icon-caption'>
                {getIcon('checkcircle')}
                <span className='caption'>Action Items</span>
              </Link>

              <Link to='/clientadvisorcontact' className='icon-caption'>
                {getIcon('addresscard')}
                <span className='caption'>Advisor</span>
              </Link>
            </div>

            <Link to='/' className='icon-caption'>
              {getIcon('power')}
              <span className='caption'>Log Out</span>
            </Link>
          </React.Fragment>
        );
      }
    }

    return Style.it(
      `${styles}`,
      <div className='nav'>{getMainNav(this.props)}</div>
    );
  }
}

export default MainNavComponent;
