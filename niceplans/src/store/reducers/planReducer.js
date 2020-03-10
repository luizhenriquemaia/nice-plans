const initState = {
    plans: [
        { id: '1', title: 'help me find peach', content: 'blah blah blah' },
        { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
        { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
    ]
}

const planReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PLAN':
            console.log('created plan', action.plan)
    }
    return state
}


export default planReducer