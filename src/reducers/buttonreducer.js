export default (state = [], { type }) => {
    switch (type) {
        case 'INCREMENT':
        console.log(state)
            return [...state + 1]
    
        default:
            return state
    }
}
