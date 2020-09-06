import React from "react";
import { connect } from "react-redux";

import performSignOut from '../../actions/authActions/performSignOut'

class SignOutBtn extends React.Component {
    handleSignOut = () => {
        this.props.performSignOut();
    };

    render() {
        return (
            <button className="btn btn--alt" onClick={this.handleSignOut}>
                Sign Out
            </button>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        performSignOut: () => {
            dispatch(performSignOut());
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(SignOutBtn);
