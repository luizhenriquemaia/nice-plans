export const createPlan = (plan) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore()
        firestore.collection('plans').add({
            ...plan,
            authorFirstName: 'Luiz',
            authorLastName: 'Henrique',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PLAN', plan: plan })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PLAN_ERROR', err: err })
        })
    }
}