import React from 'react'
import PlanSummary from './PlanSummary'
import { Link } from 'react-router-dom'


const PlanList = ({ plans }) => {
    return (
        <div className="plan-list section">
            { plans && plans.map(plan => {
                return (
                    <Link to={'/plan/' + plan.id} key={plan.id}>
                        <PlanSummary plan={plan} />
                    </Link>
                )
            }) }
        </div>
    )
}


export default PlanList