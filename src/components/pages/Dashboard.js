import React from "react";
import { connect } from 'react-redux';

import DashboardHeader from '../layout/DashboardHeader'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleContent: true
        }
    }

    componentDidMount() {
    }
    
    

    render() {
        return (
            <main className="dashboard">
                <DashboardHeader username="Eddie Chu"/>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.reduceAuthStatus.auth,
});

export default connect(mapStateToProps)(Dashboard);