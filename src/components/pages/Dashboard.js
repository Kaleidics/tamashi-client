import React from "react";
import { connect } from 'react-redux';

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
                <section className="dashboard__main-content">
                  
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.reduceAuthStatus.auth,
});

export default connect(mapStateToProps)(Dashboard);