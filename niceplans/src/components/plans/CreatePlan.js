import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPlan } from '../../store/actions/planActions'
import { Redirect } from 'react-router-dom'


class CreatePlan extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.createPlan(this.state)
    }
    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/signin/' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="title-page">Create a new plan</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" onChange={this.handleChange} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field grid">
                        <button className="sign-btn">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPlan: (plan) => dispatch(createPlan(plan))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlan)