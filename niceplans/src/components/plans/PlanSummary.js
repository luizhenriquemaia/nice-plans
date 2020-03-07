import React from 'react'


const PlanSummary = ({ plan }) =>{
    return(
        <div className="card plan-cards">
            <div className="card-content">
                <span className="card-title">{plan.title}</span>
                <p>Posted by Luiz Henrique</p>
                <p>3rd September, 2am</p>
            </div>
        </div>
    )
}

export default PlanSummary