function something(state = {"something" : true}, action) {
    switch (action.type) {
        case 'SOMETHING':
            return state;
        default:
            return state
    }
}
export default something;