function counter(state = 0, action) {
    switch (action.type) {
        case 'UPDATE_COUNTER':
            return (action.isIncrement)? state + 1 : state - 1;
        default:
            return state;
    }
}
export default counter;