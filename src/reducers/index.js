import { combineReducers } from 'redux'
import buttonreducer from './buttonreducer'

const initialstate = {
    counter: 0,
    dogbreeds:[
        {
            id: 1,
            breedname: "Dog1",
            image: "imageDog1"
        },
        {
            id: 2,
            breedname: "Dog2",
            image: "imageDog2"
        },
        {
            id: 3,
            breedname: "Dog3",
            image: "imageDog3"
        },
        {
            id: 4,
            breedname: "Dog4",
            image: "imageDog4"
        },
        {
            id: 5,
            breedname: "Dog5",
            image: "imageDog5"
        }]
    }
  


const reducer = (state = initialstate, action = {}) => {
    switch (action.type) {
        // case SELECT:
        // console.log(SELECT)
        //   return [...state, action.payload]
        default:
            // console.log(state)
            return state
    }
}


export default combineReducers({
    numClicked: buttonreducer,
    reducer
})
