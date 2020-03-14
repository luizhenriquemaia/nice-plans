import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const PlanDetails = (props) => {
    const { plan } = props
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
                        <div>2nd September, 2am</div>
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
        plan: state.firestore.data.plans && state.firestore.data.plans[id]
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        { collection: 'plans', doc: props.match.params.id }
    ])
)(PlanDetails)