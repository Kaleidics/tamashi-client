import React from 'react';
import logofinal from '../../assets/logofinal.png';

class PlainTextBlock extends React.Component {
    render() {
        return (
            <div className='plainTextBlock'>
                <h3 className='plainTextBlock__title'>{this.props.title}</h3>
                <p className='plainTextBlock__description'>{this.props.description}</p>
                <div className='plainTextBlock__container'>
                    <img className='plainTextBlock__img' src={logofinal} alt='tamashi' />
                    <div className='plainTextBlock__sub'>
                        <p className='plainTextBlock__author'>{this.props.author}</p>
                        <p className='plainTextBlock__label'>{this.props.label}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlainTextBlock;
