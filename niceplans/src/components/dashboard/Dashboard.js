import React, { Component } from 'react'
import Notifications from './Notifications'
import PlanList from '../plans/PlanList'
import { connect } from 'react-redux'


class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { plans } = this.props
        return (
            <div className="container dashboard grid">
                    <div className="plan-list">
                        <PlanList plans={plans} />
                    </div>
                <div className="notifications">
                        <Notifications />
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        plans: state.plan.plans
    }
}

export default connect(mapStateToProps)(Dashboard)