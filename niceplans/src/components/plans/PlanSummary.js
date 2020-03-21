import React from 'react'
import moment from 'moment'


const PlanSummary = ({ plan }) =>{
    return(
        <div className="card plan-cards">
            <div className="card-content">
                <span className="card-title">{plan.title}</span>
                <p>Posted by {plan.authorFirstName} {plan.authorLastName} </p>
                <p>{moment(plan.createdAt.toDate()).calendar()} </p>
            </div>
        </div>
    )
}

export default PlanSummary