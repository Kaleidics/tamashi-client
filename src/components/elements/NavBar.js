import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignOutBtn from './SignOutBtn';

import logofinal from '../../assets/logofinal.png';

class NavBar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to='/' className='navbar__logo'>
                        <img className='navbar__image' src={logofinal} alt='ExpenX logo' />
                        <p className='navbar__name'>tamashi</p>
                    </Link>
                    {this.props.auth && this.props.location.pathname === '/dashboard' ? (
                        <SignOutBtn />
                    ) : (
                        <div className='navbar__btn-container'>
                            {/* <Link to='/signin' className='btn mr-15'>
                                {this.props.auth ? 'Dashboard' : 'Sign in'}
                            </Link> */}
                            {this.props.auth ? (
                                <SignOutBtn />
                            ) : (
                                <Link to='/register' className='btn btn--alt'>
                                    Register
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.reduceAuthStatus.auth,
});

export default connect(mapStateToProps)(NavBar);
