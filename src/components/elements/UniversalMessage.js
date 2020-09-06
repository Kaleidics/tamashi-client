import React, { Component } from 'react';
import { connect } from 'react-redux';

import performUniversalMessage from '../../actions/notificationActions/performUniversalMessage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

class UniversalMessage extends Component {
    handleUniversalMessage = () => {
        this.props.performUniversalMessage({ heading: false, desc: false }, false);
    };

    render() {
        let msgState = `universalMessage ${this.props.universalMessageState === 'success' ? 'success' : 'failure'}`;
        let iconState = `icon ${this.props.universalMessageState === 'success' ? 'icon-success' : 'icon-failure'}`;

        let messageOption = this.props.universalMessageState && (
            <div className={msgState} onClick={this.handleUniversalMessage}>
                <FontAwesomeIcon
                    icon={this.props.universalMessageState === 'success' ? faCheckCircle : faExclamationCircle}
                    className={iconState}
                />
                <div className='universalMessage__text-block'>
                    <p className='universalMessage__heading'>{this.props.universalMessage.heading}</p>
                    <p className='universalMessage_desc'>{this.props.universalMessage.desc}</p>
                </div>
                <FontAwesomeIcon icon={faTimes} className='icon i-cancel i-right-align' />
            </div>
        );
        return <>{messageOption}</>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        performUniversalMessage: () => {
            dispatch(performUniversalMessage());
        }
    };
};

const mapStateToProps = (state) => ({
    universalMessage: state.reduceUniversalMessage.universalMessage,
    universalMessageState: state.reduceUniversalMessage.universalMessageState,
});

export default connect(mapStateToProps, mapDispatchToProps)(UniversalMessage);
