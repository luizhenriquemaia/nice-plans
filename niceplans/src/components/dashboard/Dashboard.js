import React, { Component } from 'react'
import Notifications from './Notifications'
import PlanList from '../plans/PlanList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


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
    console.log(state)
    return {
        plans: state.firestore.ordered.plans
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'plans' }
    ])
)(Dashboard)