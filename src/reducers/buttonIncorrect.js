export default (state = 0, { type }) => {
    switch (type) {
        case 'INCORRECT':
            return state + 1
        default:
            return state
    }
}
