import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignOutBtn from './SignOutBtn';

import logofinal from '../../assets/logofinal.png';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
           menu: false
        };

    }

    componentDidMount() {
        window.addEventListener('resize', this.controlMenuOpen.bind(this));
    }

    controlMenuOpen() {
        if(window.innerWidth > 1024) {
            this.setState({
                menu: false
            });
        }
    }
    
    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        });
    }

    render() {


        let menuOpenLineA = this.state.menu ? 'lineA' : '';
        let menuOpenLineB = this.state.menu ? 'lineB' : '';
        let menuOpenContainer = this.state.menu ? '' : 'toggleMenu';

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
                        <div className={`navbar__btn-container ${menuOpenContainer}`}>
                            <Link to='/signin' className='btn mobile-mtb-10 desktop-mr-15' onClick={this.toggleMenu}>
                                {this.props.auth ? 'Dashboard' : 'Sign in'}
                            </Link>
                            {this.props.auth ? (
                                <SignOutBtn />
                            ) : (
                                <Link to='/register' className='btn btn--alt mobile-mtb-10' onClick={this.toggleMenu}>
                                    Register
                                </Link>
                            )}
                        </div>
                    )}
                    <button className='navbar__toggle' onClick={this.toggleMenu}>
                        <span className={`navbar__toggle-line ${menuOpenLineA}`}></span>
                        <span className={`navbar__toggle-line ${menuOpenLineB}`}></span>
                        <p className='navbar__AX-name'>Menu</p>
                    </button>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.reduceAuthStatus.auth,
});

export default connect(mapStateToProps)(NavBar);
