import React from 'react';

import FormInput from './FormInput';
import FormCheckBox from './FormCheckBox';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import performSignIn from '../../actions/authActions/performSignIn';
import performUniversalMessage from '../../actions/notificationActions/performUniversalMessage';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            persistSignIn: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.handleUniversalMessage();
    }

    handleUniversalMessage = () => {
        this.props.performUniversalMessage({ heading: false, desc: false }, false);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.performSignIn(this.state);
    }

    render() {
        return (
            <div className='form-wrapper'>
                <form className='form animate-left' noValidate onSubmit={this.handleSubmit}>
                    <fieldset className='fieldset'>
                        <legend className='legend'>Sign In</legend>
                        <FormInput
                            id={'username'}
                            label={'Email'}
                            type={'text'}
                            error={this.state.usernameError}
                            onChange={(e) => this.setState({ username: e.target.value })}
                            value={this.state.username}
                        />
                        <FormInput
                            id={'password'}
                            label={'Password'}
                            type={'password'}
                            error={this.state.passwordError}
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password}
                        />
                        <FormCheckBox
                            id={'persistSignIn'}
                            preface={<>Remember me</>}
                            label={'Keep me signed in'}
                            type={'checkbox'}
                            onChange={(e) => this.setState({ persistSignIn: e.target.checked })}
                            value={this.state.persistSignIn}
                        />
                    </fieldset>
                    <button className='btn' type='submit'>
                        Sign In
                    </button>
                    <p className='form-alternate' onClick={this.props.onToggleForm}>
                        Don't have an account?{' '}
                        <Link to='/register' className='alternate-text'>
                            Sign up here.
                        </Link>
                    </p>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        performSignIn: (credentials) => {
            dispatch(performSignIn(credentials));
        },
        performUniversalMessage: () => {
            dispatch(performUniversalMessage());
        },
    };
};

export default connect(null, mapDispatchToProps)(SignIn);
