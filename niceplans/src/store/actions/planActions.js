export const createPlan = (plan) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        firestore.collection('plans').add({
            ...plan,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PLAN', plan: plan })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PLAN_ERROR', err: err })
        })
    }
}