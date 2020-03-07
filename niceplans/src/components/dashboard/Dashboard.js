import React, { Component } from 'react'
import Notifications from './Notifications'
import PlanList from '../plans/PlanList'


class Dashboard extends Component {
    render() {
        return (
            <div className="container dashboard grid">
                    <div className="plan-list">
                        <PlanList />
                    </div>
                <div className="notifications">
                        <Notifications />
                    </div>
            </div>
        )
    }
}

export default Dashboard