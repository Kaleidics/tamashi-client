import React from 'react';
import { connect } from 'react-redux';

import DashboardHeader from '../layout/DashboardHeader';
import PlainTextBlock from '../elements/PlainTextBlock';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleContent: true,
        };
    }

    componentDidMount() {}

    render() {
        return (
            <main className='dashboard'>
                <DashboardHeader username='Eddie Chu' />
                <section>
                    <PlainTextBlock
                        title='Welcome to Tamashi'
                        description='Hello and thank you for joining Tamashi - the easy way to track and visualize your mental wellbeing. This new tool is under active development and is being continually improved upon as a passion project.'
                        author='Eddie Chu'
                        label='Developer'
                    />
                </section>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.reduceAuthStatus.auth,
});

export default connect(mapStateToProps)(Dashboard);
