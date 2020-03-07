import React from 'react'


const PlanDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Plan Details - {id}</span>
                    <p>aklsjhdkjashdkjahsdkjahsdkajshdkajsdhakjsdhakjsdhaksjdhaskdjhaskdjahsd</p>
                </div>
                <div className="card-action">
                    <div>Posted by Luiz Henrique</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default PlanDetails