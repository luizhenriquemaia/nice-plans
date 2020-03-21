import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'


const PlanDetails = (props) => {
    const { plan, auth } = props
    if (!auth.uid) return <Redirect to='/signin/' />
    if (plan) {
        return(
            <div className="container section project-details">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">{plan.title}</span>
                        <p>{plan.content}</p>
                    </div>
                    <div className="card-action">
                        <div>Posted by {plan.authorFirstName} {plan.authorLastName}</div>
                        <div>{moment(plan.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container center">
                <p>Loading plan...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    return {
        plan: state.firestore.data.plans && state.firestore.data.plans[id],
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        { collection: 'plans', doc: props.match.params.id }
    ])
)(PlanDetails)