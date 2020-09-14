import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faChartLine } from '@fortawesome/free-solid-svg-icons';


export default class DashboardHeader extends Component {
    render() {
        return (
            <header className='dashboard-header'>
                <h1 className='dashboard-header__heading'>
                    Good evening, <span className='text-bold'>{this.props.username}</span>
                </h1>
                <div className='dashboard-header__nav'>
                    <button className='btn btn--alt'>
                        <FontAwesomeIcon icon={faCalendarCheck} className='all-mr-10' />
                        Visit today's check in
                    </button>
                    <button className='btn btn--alt'>
                        <FontAwesomeIcon icon={faChartLine} className='all-mr-10' />
                        Track progress
                    </button>
                </div>
            </header>
        );
    }
}
