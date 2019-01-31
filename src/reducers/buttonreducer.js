export default (state = 0, { type }) => {
    switch (type) {
        case 'CORRECT':
            return state + 1
        default:
            return state
    }
}
